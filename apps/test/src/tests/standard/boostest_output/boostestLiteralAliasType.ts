export function boostestLiteralAliasType<T>(args?: Partial<T>): T {
	return {
		stringLiteral: "test string data",
		numberLiteral: 10,
		bigintLiteral: 9007199254740991n,
		booleanLiteral: false,
		nullLiteral: null,
		undefinedId: undefined,
		anyLiteral: "any",
		unknownLiteral: undefined,
		objectLiteral: {},
		voidLiteral: null,
		functionLiteral: () => {},
		arrayLiteral: [],
		referenceLiteral: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		unionType: "test string data",
		conditionalType: false,
		tsLiteralString: "string",
		tsLiteralNumber: 20,
		tsBigInt: 10000000000000n,
		tsLiteralBoolean: true,
		tsNullLiteral: null,
		tsObject: {},
		tsArray: [],
		symbolLiteral: Symbol(),
		tsTuple: [
			"test string data",
			10,
			"any",
			{
				name: "test string data",
				ver: 10,
				age: 10
			},
			{
				name: "test string data",
				ver: 10
			}
		],
		tsNamedTuple: [
			"test string data",
			10,
			{
				name: "test string data",
				ver: 10,
				age: 10
			},
			{
				name: "test string data",
				ver: 10
			}
		],
		intersectionType: {
			...{
				name: "test string data",
				ver: 10,
				age: 10
			},
			...{
				name: "test string data",
				age: 10
			}
		},
		keyof: "name",
		indexAccessor: "test string data",
		...args
	} as T;
}
type main_output_target = { stringLiteral: string; numberLiteral: number; bigintLiteral: bigint; booleanLiteral: false | true; nullLiteral: null; undefinedId: undefined; anyLiteral: any; unknownLiteral: unknown; objectLiteral: object; voidLiteral: void; functionLiteral: () => void; arrayLiteral: Array<string>; referenceLiteral: { name: string; ver: number; age: number }; unionType: string | number; conditionalType: false; tsLiteralString: "string"; tsLiteralNumber: 20; tsBigInt: 10000000000000n; tsLiteralBoolean: true; tsNullLiteral: null; tsObject: {  }; tsArray: { length: 0 }; symbolLiteral: symbol; tsTuple: { 0: string; 1: number; 2: any; 3: { name: string; ver: number; age: number }; 4: { name: string; ver: number }; length: 5 }; tsNamedTuple: { 0: string; 1: number; 2: { name: string; ver: number; age: number }; 3: { name: string; ver: number }; length: 4 }; intersectionType: { name: string; ver: number; age: number } & { name: string; age: number }; keyof: "name" | "ver" | "age"; indexAccessor: string }; // Extracted from typeAlias

type main = ref_fc2b516db091da296cc6e3fd56962c334955a7da858807e7f62b7c5f7dfa3f70;
type ref_fc2b516db091da296cc6e3fd56962c334955a7da858807e7f62b7c5f7dfa3f70 = {
    stringLiteral: string;
    numberLiteral: number;
    bigintLiteral: bigint;
    booleanLiteral: boolean;
    nullLiteral: null;
    undefinedId: undefined;
    anyLiteral: any;
    unknownLiteral: unknown;
    objectLiteral: object;
    voidLiteral: void;
    functionLiteral: () => void;
    arrayLiteral: Array<string>;
    referenceLiteral: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa;
    unionType: string | number;
    conditionalType: string extends number ? true : false;
    tsLiteralString: "string";
    tsLiteralNumber: 20;
    tsBigInt: 10000000000000n;
    tsLiteralBoolean: true;
    tsNullLiteral: null;
    tsObject: {};
    tsArray: [
    ];
    symbolLiteral: symbol;
    tsTuple: [
        string,
        number,
        any,
        ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa,
        ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d
    ];
    tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa,
        refInterface: ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d
    ];
    intersectionType: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa & {
        name: string;
        age: number;
    };
    keyof: keyof ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa;
    indexAccessor: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa["name"];
};
type ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa = {
    name: string;
    ver: number;
    age: number;
};
interface ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d {
    name: string;
    ver: number;
}