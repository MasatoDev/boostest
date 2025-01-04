use oxc::{
    ast::{
        ast::{TSType, TSTypeName, TSTypeQueryExprName},
        match_ts_type_name,
        visit::{
            walk::{walk_ts_type_name, walk_ts_type_parameter_instantiation},
            walk_mut::walk_ts_type_query_expr_name,
        },
        Visit,
    },
    span::Span,
};
use std::{
    collections::HashMap,
    path::PathBuf,
    sync::{Arc, Mutex},
    thread,
    time::Duration,
};

use oxc::ast::ast::TSTypeParameterInstantiation;

use crate::boostest_utils::{
    ast_utils::{self, ignore_ref_name},
    id_name::get_id_with_hash,
    napi::TargetType,
};

// FIXME: use DeclType correctly
#[derive(Debug, PartialEq, Clone)]
pub enum DeclType {
    Type,
    Value,
    ImportAll,
}

#[derive(Debug, Clone)]
pub struct TargetSupplement {
    pub is_generic_property: bool,
}

// FIXME: 定義元名は利用できる。参照名でしか特定できないので、参照名がわかれば定義元名がわかるロジックを追加する必要がある。
#[derive(Debug)]
pub struct ResolvedDefinitions {
    // [reference hash]: definition
    pub inner: HashMap<String, Option<Vec<TargetDefinition>>>,
}

#[derive(Debug, Clone)]
pub struct TargetDefinition {
    pub specifier: String,
    pub file_path: PathBuf,
    pub span: Span,
    pub target_type: TargetType,
    pub defined_generics: Vec<String>,
}

// FIXME: var, type を区別する
#[derive(Debug, Clone)]
pub struct TargetReference {
    pub file_path: PathBuf,
    pub span: Span,
    pub target_supplement: Option<TargetSupplement>,
}

// #[derive(Debug, Clone)]
// pub struct ChainObject {
//     // pub object: Option<ChainObject>,
//     pub name: Option<String>,
//     pub property: String,
// }

#[derive(Debug)]
pub struct Target {
    pub name: String, // boostestHoge<Hoge>() -> Hoge
    // pub chain: Option<ChainObject>,
    pub decl_type: DeclType,
    pub func_name: String, // boostestHoge<Hoge>() -> boostestHoge
    pub target_reference: TargetReference,
    pub is_resolved: bool,
    pub is_namespace: bool,

    pub ref_properties: Vec<Arc<Mutex<Target>>>,
}

#[derive(Debug)]
pub struct MainTarget {
    pub target: Arc<Mutex<Target>>,
    pub original_target_ref: TargetReference,
    pub initialized: bool,

    // [definition hash]: definition
    pub resolved_definitions: Arc<Mutex<ResolvedDefinitions>>,
}

impl MainTarget {
    pub fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        target_reference: TargetReference,
        original_target_ref: TargetReference,
    ) -> Self {
        Self {
            target: Arc::new(Mutex::new(Target {
                name: mock_target_name.unwrap_or_default(),
                func_name: mock_func_name.clone(),
                target_reference,
                decl_type: DeclType::Type,
                is_resolved: false,
                is_namespace: false,
                ref_properties: Vec::new(),
            })),
            original_target_ref,
            initialized: false,
            resolved_definitions: Arc::new(Mutex::new(ResolvedDefinitions {
                inner: HashMap::new(),
            })),
        }
    }

    pub fn update_target_reference(&mut self, name: String, span: Span) {
        let mut target = self.target.lock().unwrap();
        target.name = name;
        target.target_reference.span = span;
    }

    pub fn add_prop_with_retry(&mut self, id: String, span: Span, decl_type: DeclType) {
        loop {
            match self.target.clone().lock() {
                Ok(mut target) => {
                    //NOTE:  Prevent duplicate addition of main target
                    if target.name == id {
                        break;
                    }

                    let target_ref = TargetReference {
                        span,
                        file_path: target.target_reference.file_path.clone(),
                        target_supplement: None,
                    };
                    target.add_property(id, target_ref, decl_type);
                    break;
                }
                Err(_) => {
                    // ロック取得に失敗した場合、少し待ってからリトライ
                    thread::sleep(Duration::from_millis(20));
                }
            }
        }
    }
}

//TODO: refとdefを区別する
impl Target {
    pub fn resolved(&self) -> bool {
        self.is_resolved
    }

    pub fn add_property(
        &mut self,
        name: String,
        target_reference: TargetReference,
        decl_type: DeclType,
    ) {
        // println!("add_property: {}", name);
        let already_exists = self.ref_properties.iter().any(|prop| {
            let prop = prop.lock().unwrap();
            prop.target_reference.span == target_reference.span
                && prop.target_reference.file_path == target_reference.file_path
        });

        if already_exists {
            return;
        }

        let new_target = Target {
            name,
            is_resolved: false,
            is_namespace: false,
            func_name: self.func_name.clone(),
            decl_type,
            target_reference,
            ref_properties: Vec::new(),
        };
        self.ref_properties.push(Arc::new(Mutex::new(new_target)));
    }
}

impl ResolvedDefinitions {
    // keyをreferenceのhashにする
    // keyは創作開始時にすぐ追加できて、すでにdefsにあれば何もせず終了する
    // keyは創作開始時にすぐ追加できて、すでにdefsに慣れければ継続。

    pub fn is_resolved(&mut self, target_reference: &TargetReference) -> bool {
        let key = get_id_with_hash(
            target_reference.file_path.to_string_lossy().to_string(),
            target_reference.span,
        );

        match self.inner.get(&key) {
            Some(Some(_)) => true,
            Some(None) => true, // prevent loop resolve
            _ => {
                self.inner.insert(key, None);
                false
            }
        }
    }

    pub fn is_setable_target_definition(
        &mut self,
        target_reference: &TargetReference,
        target_def_type: TargetType,
        decl_type: DeclType,
    ) -> bool {
        let match_type = match target_def_type {
            TargetType::TSInterface => decl_type == DeclType::Type,
            TargetType::TSTypeAlias => decl_type == DeclType::Type,
            TargetType::Variable => decl_type == DeclType::Value,
            TargetType::TSModule => true,
            TargetType::Function => true,
            TargetType::Class => true,
            TargetType::ImportAll => true,
        };

        if !match_type {
            return false;
        }

        if let Some(target_defs) = self.get_target_definition(target_reference) {
            let has_type_alias = target_defs.iter().any(|def| {
                if def.target_type == TargetType::TSTypeAlias {
                    return true;
                }
                false
            });
            if has_type_alias {
                return false;
            }

            // Not hanlde import all
            // let all_have_import_all = target_defs
            //     .iter()
            //     .all(|def| def.target_type == TargetType::ImportAll);
            // let not_import_all = target_def_type != TargetType::ImportAll;
            // if all_have_import_all && not_import_all {
            //     return false;
            // }

            // Interfaces can be merged with other same name interfaces.
            let all_have_type_interface = target_defs
                .iter()
                .all(|def| def.target_type == TargetType::TSInterface);
            let not_interface = target_def_type != TargetType::TSInterface;
            if all_have_type_interface && not_interface {
                return false;
            }

            return true;
        }
        true
    }

    pub fn set_target_definition(
        &mut self,
        target_reference: &TargetReference,
        target_definition: TargetDefinition,
    ) {
        let key = get_id_with_hash(
            target_reference.file_path.to_string_lossy().to_string(),
            target_reference.span,
        );

        if let Some(mut target_defs) = self.get_target_definition(target_reference) {
            target_defs.push(target_definition.clone());
            self.inner.insert(key.clone(), Some(target_defs));
        } else {
            self.inner.insert(key, Some(vec![target_definition]));
        }
    }

    pub fn get_target_definition(
        &self,
        target_reference: &TargetReference,
    ) -> Option<Vec<TargetDefinition>> {
        let key = get_id_with_hash(
            target_reference.file_path.to_string_lossy().to_string(),
            target_reference.span,
        );

        if let Some(Some(definition)) = self.inner.get(&key) {
            Some(definition.clone())
        } else {
            None
        }
    }

    pub fn get_target_def_hash_name_with_key(
        &self,
        key: &str,
        original_name: &str,
    ) -> Option<String> {
        if let Some(Some(definitions)) = self.inner.get(key) {
            if let Some(definition) = definitions.last() {
                let TargetDefinition {
                    file_path,
                    span,
                    target_type,
                    ..
                } = definition;

                if *target_type == TargetType::ImportAll {
                    return Some(original_name.to_string());
                }

                let name = get_id_with_hash(file_path.to_string_lossy().to_string(), span.clone());
                return Some(name);
            }
            return None;
        } else {
            None
        }
    }

    pub fn get_target_type(&self, target_reference: &TargetReference) -> Option<TargetType> {
        let key = get_id_with_hash(
            target_reference.file_path.to_string_lossy().to_string(),
            target_reference.span,
        );

        if let Some(Some(definitions)) = self.inner.get(&key) {
            if let Some(definition) = definitions.first() {
                return Some(definition.target_type.clone());
            }
            None
        } else {
            None
        }
    }
}

impl<'a> Visit<'a> for MainTarget {
    // boostestHoeg<Hoge>:  visit_ts_type_parameter_instantiation -> Hoge
    fn visit_ts_type_parameter_instantiation(&mut self, ty: &TSTypeParameterInstantiation<'a>) {
        if !self.initialized {
            if let Some(ts_type) = ty.params.first() {
                match ts_type {
                    TSType::TSTypeReference(ty_ref) => {
                        if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                            self.update_target_reference(
                                identifier.name.clone().into_string(),
                                identifier.span,
                            );
                        }
                    }
                    TSType::TSTypeQuery(ty_q) => {
                        if let TSTypeName::IdentifierReference(identifier) =
                            &ty_q.expr_name.to_ts_type_name()
                        {
                            self.update_target_reference(
                                identifier.name.clone().into_string(),
                                identifier.span,
                            );
                        }
                    }
                    _ => {}
                }

                self.initialized = true;
            }
        }

        walk_ts_type_parameter_instantiation(self, ty);
    }

    fn visit_ts_type_name(&mut self, it: &TSTypeName<'a>) {
        if let TSTypeName::IdentifierReference(identifier) = it {
            let id = identifier.name.clone();
            if ignore_ref_name(&id) {
                return;
            }

            self.add_prop_with_retry(id.to_string(), identifier.span, DeclType::Type);
        }

        if let TSTypeName::QualifiedName(qualified_name) = it {
            let id = &qualified_name.right.name;
            if ignore_ref_name(id) {
                return;
            }

            self.add_prop_with_retry(id.to_string(), qualified_name.right.span, DeclType::Type);
        }

        walk_ts_type_name(self, it);
    }

    fn visit_ts_type_query_expr_name(&mut self, it: &TSTypeQueryExprName<'a>) {
        match it {
            TSTypeQueryExprName::TSImportType(it) => self.visit_ts_import_type(it),
            match_ts_type_name!(TSTypeQueryExprName) => {
                let ts_type_name = it.to_ts_type_name();

                if let TSTypeName::IdentifierReference(identifier) = ts_type_name {
                    let id = identifier.name.clone();
                    if ignore_ref_name(&id) {
                        return;
                    }

                    self.add_prop_with_retry(id.to_string(), identifier.span, DeclType::Value);
                }

                if let TSTypeName::QualifiedName(qualified_name) = ts_type_name {
                    let id = &qualified_name.right.name;
                    if ignore_ref_name(id) {
                        return;
                    }

                    self.add_prop_with_retry(
                        id.to_string(),
                        qualified_name.right.span,
                        DeclType::Value,
                    );
                }

                walk_ts_type_name(self, ts_type_name);
            }
        }
    }

    // fn visit_ts_type(&mut self, ts_type: &TSType<'a>) {
    //     match ts_type {
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_array_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
    //         TSType::TSTypeReference(ts_type_ref) => {
    //             if let Some(type_parameters) = &ts_type_ref.type_parameters {
    //                 for param in type_parameters.params.iter() {
    //                     self.visit_ts_type(param);
    //                 }
    //             }
    //
    //             if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
    //                 if ignore_ref_name(&identifier.name) {
    //                     return;
    //                 }
    //
    //                 let id_name = identifier.name.clone().into_string();
    //                 self.add_prop_with_retry(id_name, identifier.span);
    //             }
    //         }
    //         TSType::TSTypeLiteral(ts_type_literal) => {
    //             self.visit_ts_signatures(&ts_type_literal.members);
    //         }
    //         TSType::TSConditionalType(ts_condition_type) => {
    //             self.visit_ts_type(&ts_condition_type.check_type);
    //             self.visit_ts_type(&ts_condition_type.extends_type);
    //             self.visit_ts_type(&ts_condition_type.true_type);
    //             self.visit_ts_type(&ts_condition_type.false_type);
    //         }
    //         TSType::TSUnionType(ts_union_type) => {
    //             for ts_type in ts_union_type.types.iter() {
    //                 self.visit_ts_type(ts_type);
    //             }
    //         }
    //         TSType::TSTupleType(ts_tuple_type) => {
    //             for element in ts_tuple_type.element_types.iter() {
    //                 self.visit_ts_type(element.to_ts_type());
    //             }
    //         }
    //         TSType::TSNamedTupleMember(ts_named_tuple_member) => {
    //             match &ts_named_tuple_member.element_type {
    //                 TSTupleElement::TSOptionalType(_) => {
    //                     // &ts_named_tuple_member.element_type,
    //                 }
    //                 TSTupleElement::TSRestType(_) => {}
    //                 ts_tuple_type => {
    //                     self.visit_ts_type(ts_tuple_type.to_ts_type());
    //                 }
    //             }
    //         }
    //         TSType::TSIntersectionType(ts_intersection_type) => {
    //             for ts_type in ts_intersection_type.types.iter() {
    //                 self.visit_ts_type(ts_type);
    //             }
    //         }
    //         TSType::TSTypeQuery(ts_type_query) => {
    //             if let TSTypeQueryExprName::IdentifierReference(identifier) =
    //                 &ts_type_query.expr_name
    //             {
    //                 self.add_prop_with_retry(
    //                     identifier.name.clone().into_string(),
    //                     identifier.span,
    //                 );
    //             }
    //         }
    //         TSType::TSTypeOperatorType(ts_type_operator_type) => {
    //             if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation
    //             {
    //                 self.add_prop_with_retry(ts_type_ref.type_name.to_string(), ts_type_ref.span);
    //             }
    //         }
    //         TSType::TSIndexedAccessType(ts_indexed_access_type) => {
    //             if let TSType::TSTypeReference(ts_object_type_ref) =
    //                 &ts_indexed_access_type.object_type
    //             {
    //                 self.add_prop_with_retry(
    //                     ts_object_type_ref.type_name.to_string(),
    //                     ts_object_type_ref.span,
    //                 );
    //             }
    //         }
    //         TSType::TSMappedType(ts_mapped_type) => {
    //             if let Some(ts_type) = &ts_mapped_type.type_parameter.constraint {
    //                 self.visit_ts_type(ts_type);
    //             }
    //
    //             if let Some(ts_type) = &ts_mapped_type.type_annotation {
    //                 self.visit_ts_type(ts_type);
    //             }
    //         }
    //
    //         _ => {}
    //     }
    // }
}

pub fn gen_target_supplement(is_generic_property: bool) -> Option<TargetSupplement> {
    if !is_generic_property {
        return None;
    }

    Some(TargetSupplement {
        is_generic_property,
    })
}
