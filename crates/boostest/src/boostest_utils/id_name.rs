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

[parent_key_name]_[target_name]_[key_name]_[id]

*/
pub fn get_parent_key_name(
    parent_key_name: Option<String>,
    key_name: Option<String>,
    target_name: String,
    id: String,
) -> String {
    let mut ref_name = id;

    if let Some(k_name) = key_name {
        ref_name = format!("{}_{}", k_name, ref_name);
    }

    ref_name = format!("{}_{}", target_name, ref_name);

    if let Some(k_name) = parent_key_name {
        ref_name = format!("{}_{}", k_name, ref_name);
    }

    ref_name
}

pub fn get_main_decl_name(function_name: String, id: String) -> String {
    format!("{}_{}", id, function_name)
}
