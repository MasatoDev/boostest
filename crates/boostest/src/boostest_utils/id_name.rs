use oxc::span::Span;
use sha2::{Digest, Sha256};
/*

type Hoge ={name: string, ref: Ref}
type Ref = {name: RefAnother}

// parent_key: none
// target_name: Hoge
// key_name: ref
// id: Ref
-> Hoge_ref_Ref

// parent_key: Hoge_ref
// target_name: Ref
// key_name: name
// id: RefAnother
-> Hoge_ref_Ref_name_RefAnother
*/
pub fn get_parent_key_name(
    parent_key_name: Option<String>,
    key_name: Option<String>,
    target_name: String,
) -> String {
    // Hoge
    // Ref
    let mut ref_name = target_name;

    // Hoge (unexist parent_key_name)
    // Hoge_ref_Ref
    if let Some(k_name) = parent_key_name {
        ref_name = format!("{}_{}", k_name, ref_name);
    }

    // Hoge_ref
    // Hoge_ref_Ref_name
    if let Some(k_name) = key_name {
        ref_name = format!("{}_{}", ref_name, k_name);
    }

    ref_name
}

pub fn get_decl_name(parent_key_name: Option<String>, function_name: String, id: String) -> String {
    let mut name = id;

    if let Some(k_name) = parent_key_name {
        name = format!("{}_{}", k_name, name);
    } else {
        name = format!("{}_{}", function_name, name);
    }

    name
}

pub fn get_id_with_hash(file_path: String, span: Span) -> String {
    // ハッシュ計算
    let mut hasher = Sha256::new();
    hasher.update(file_path);
    hasher.update(span.start.to_le_bytes()); // u32をバイト列に変換して追加
    hasher.update(span.end.to_le_bytes());
    let hash_result = hasher.finalize();

    // ハッシュ結果を16進文字列に変換
    let hash_hex = format!("{:x}", hash_result);

    // プレフィックスを付与して返す
    format!("{}_{}", "ref", hash_hex)
}
