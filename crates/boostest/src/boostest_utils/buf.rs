use oxc::span::Span;
use ropey::Rope;

pub fn utf16_to_utf8_offset(rope: &Rope, utf16_offset: usize) -> usize {
    let mut utf8_offset = 0;
    let mut utf16_count = 0;

    for chunk in rope.chunks() {
        let chunk_utf16_len = chunk.encode_utf16().count();
        if utf16_count + chunk_utf16_len > utf16_offset {
            for (_i, c) in chunk.chars().enumerate() {
                if utf16_count == utf16_offset {
                    return utf8_offset;
                }
                utf16_count += c.len_utf16();
                utf8_offset += c.len_utf8();
            }
        } else {
            utf16_count += chunk_utf16_len;
            utf8_offset += chunk.len();
        }
    }

    utf8_offset
}

pub fn source_text_from_span(span: Span, source_text: &str) -> &str {
    let rope = Rope::from_str(source_text);
    let start = utf16_to_utf8_offset(&rope, span.start as usize);
    let end = utf16_to_utf8_offset(&rope, span.end as usize);
    &source_text[start..end]
}

pub fn utf16_span_to_utf8_span(span: Span, source_text: &str) -> Span {
    let rope = Rope::from_str(source_text);
    let start = utf16_to_utf8_offset(&rope, span.start as usize);
    let end = utf16_to_utf8_offset(&rope, span.end as usize);
    Span::new(start as u32, end as u32)
}

#[cfg(test)]
mod tests {
    use super::*;
    use oxc::span::Span;
    use ropey::Rope;

    #[test]
    fn test_utf16_to_utf8_offset() {
        let source_text = "hello 🌍 world!"; // 含むUTF-16とUTF-8で異なる文字
        let rope = Rope::from_str(source_text);

        // "🌍" はUTF-16で2コードユニット、UTF-8で4バイト
        assert_eq!(utf16_to_utf8_offset(&rope, 6), 6); // ' 'の位置
        assert_eq!(utf16_to_utf8_offset(&rope, 7), 7); // '🌍'の開始位置
        assert_eq!(utf16_to_utf8_offset(&rope, 8), 11); // '🌍'の終了位置
        assert_eq!(utf16_to_utf8_offset(&rope, 12), 15); // 'w'の位置
    }

    #[test]
    fn test_source_text_from_span() {
        let source_text = "hello 🌍 world!";
        let span = Span::new(6, 11); // UTF-16で" 🌍"を表す範囲

        let result = source_text_from_span(span, source_text);

        assert_eq!(result, " 🌍");
    }

    #[test]
    fn test_utf16_span_to_utf8_span() {
        let source_text = "hello 🌍 world!";
        let utf16_span = Span::new(6, 11); // UTF-16で" 🌍"を表す範囲

        let utf8_span = utf16_span_to_utf8_span(utf16_span, source_text);

        assert_eq!(utf8_span.start, 6); // UTF-8での開始位置
        assert_eq!(utf8_span.end, 11); // UTF-8での終了位置
    }

    #[test]
    fn test_utf16_span_to_utf8_span_typescript() {
        // let bytes = include_bytes!("../../../../apps/test/src/types/ts_types/literal.ts");
        // let source_code = std::str::from_utf8(bytes).unwrap();

        let source_code = "import { RefType } from \"@/ts_types/utils\";\n\ninterface RefTypeInterface {\n  name: string;\n  ver: number;\n}\n\nexport class Hoge {\n  name: string;\n  ver: number;\n  constructor(name: string, ver: number) {\n    this.name = name;\n    this.ver = ver;\n  }\n}\n\nexport type LiteralTypeAlias = {\n  stringLiteral: string;\n  numberLiteral: number;\n  bigintLiteral: bigint;\n  booleanLiteral: boolean;\n  nullLiteral: null;\n  undefinedId: undefined;\n  anyLiteral: any;\n  unknownLiteral: unknown;\n  // neverLiteral: never;\n  objectLiteral: object;\n  voidLiteral: void;\n  functionLiteral: () => void;\n  arrayLiteral: string[];\n  referenceLiteral: RefType;\n  unionType: string | number;\n  conditionalType: string extends number ? true : false;\n\n  tsLiteralString: \"string\";\n  tsLiteralNumber: 20;\n  tsBigInt: 10000000000000n;\n  tsLiteralBoolean: true;\n  tsNullLiteral: null;\n  tsObject: {};\n  tsArray: [];\n\n  symbolLiteral: symbol;\n  tsTuple: [string, number, any, RefType, RefTypeInterface];\n  tsNamedTuple: [\n    name: string,\n    ver: number,\n    ref: RefType,\n    refInterface: RefTypeInterface,\n  ];\n  intersectionType: RefType & { name: string; age: number };\n  keyof: keyof RefType;\n  indexAccessor: RefType[\"name\"];\n  constructorType: abstract new (...args: any) => Hoge;\n  classType: typeof Hoge;\n};\n\nexport type LiteralTypeInterface = {\n  stringLiteral: string;\n  numberLiteral: number;\n  bigintLiteral: bigint;\n  booleanLiteral: boolean;\n  nullLiteral: null;\n  undefinedId: undefined;\n  anyLiteral: any;\n  unknownLiteral: unknown;\n  // neverLiteral: never;\n  objectLiteral: object;\n  voidLiteral: void;\n  functionLiteral: () => void;\n  arrayLiteral: string[];\n  referenceLiteral: RefType;\n  unionType: string | number;\n  conditionalType: string extends number ? true : false;\n\n  tsLiteralString: \"string\";\n  tsLiteralNumber: 20;\n  tsBigInt: 10000000000000n;\n  tsLiteralBoolean: true;\n  tsNullLiteral: null;\n  tsObject: {};\n  tsArray: [];\n\n  symbolLiteral: symbol;\n  tsTuple: [string, number, any, RefType, RefTypeInterface];\n  tsNamedTuple: [\n    name: string,\n    ver: number,\n    ref: RefType,\n    refInterface: RefTypeInterface,\n  ];\n  intersectionType: RefType & RefTypeInterface & { name: string; age: number };\n  keyof: keyof RefType;\n  indexAccessor: RefType[\"name\"];\n  constructorType: abstract new (...args: any) => Hoge;\n  classType: typeof Hoge;\n};\n\nexport class LiteralTypeClass {\n  constructor(\n    public stringLiteral: string,\n    public numberLiteral: number,\n    public bigintLiteral: bigint,\n    public booleanLiteral: boolean,\n    public nullLiteral: null,\n    public undefinedId: undefined,\n    public anyLiteral: any,\n    public unknownLiteral: unknown,\n    // public neverLiteral: never,\n    public objectLiteral: object,\n    public voidLiteral: void,\n    public functionLiteral: () => void,\n    public arrayLiteral: string[],\n    public referenceLiteral: RefType,\n    public unionType: string | number,\n\n    public tsLiteralString: \"string\",\n    public tsLiteralNumber: 20,\n    public tsBigInt: 10000000000000n,\n    public tsLiteralBoolean: true,\n    public tsNullLiteral: null,\n    public tsObject: {},\n    public tsArray: [],\n\n    public symbolLiteral: symbol,\n    public tsTuple: [string, number, any, RefType, RefTypeInterface, string],\n    public tsNamedTuple: [\n      name: string,\n      ver: number,\n      ref: RefType,\n      refInterface: RefTypeInterface,\n      hello: number,\n    ],\n    public intersectionType: RefType &\n      RefTypeInterface & { name: string; age: number },\n    public conditionalType: string extends number ? true : false,\n\n    public keyof: keyof RefType,\n    public indexAccessor: RefType[\"name\"],\n    public constructorType: abstract new (...args: any) => Hoge,\n    public classType: typeof Hoge,\n  ) {}\n}\n";

        let utf16_span = Span::new(108, 249);
        let utf8_span = utf16_span_to_utf8_span(utf16_span, source_code);

        assert_eq!(utf8_span.start, 108); // UTF-8での開始位置
        assert_eq!(utf8_span.end, 249); // UTF-8での終了位置
    }
}
