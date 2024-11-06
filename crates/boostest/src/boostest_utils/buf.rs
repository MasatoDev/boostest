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
