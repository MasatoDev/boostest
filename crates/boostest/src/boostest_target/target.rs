use oxc::{
    ast::{
        ast::{TSTupleElement, TSType, TSTypeQueryExprName},
        visit::walk::walk_ts_type_parameter_instantiation,
        Visit,
    },
    span::Span,
};
use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
    thread,
    time::Duration,
};

use oxc::ast::ast::TSTypeParameterInstantiation;
use oxc::ast::ast::{Argument, CallExpression, TSType::TSTypeReference, TSTypeName};

use crate::{
    boostest_manager::propety_assignment::{ts_type_assign_as_property, TargetReferenceInfo},
    boostest_utils::{
        ast_utils::{self, get_generic_prefix},
        napi::TargetType,
    },
};

#[derive(Debug)]
pub struct TargetDefinition {
    pub specifier: String,
    pub file_path: PathBuf,
    pub span: Span,
    pub target_type: TargetType,
    pub defined_generics: Vec<String>,
}

#[derive(Debug, Clone)]
pub struct TargetSupplement {
    pub is_mapped_type: bool,
    pub is_generic_property: bool,
}

#[derive(Debug, Clone)]
pub struct TargetReference {
    pub file_path: PathBuf,
    pub span: Span,
    pub target_supplement: Option<TargetSupplement>,
}

#[derive(Debug)]
pub struct Target {
    pub name: String,      // boostestHoge<Hoge>() -> Hoge
    pub func_name: String, // boostestHoge<Hoge>() -> boostestHoge
    pub target_reference: TargetReference,
    pub target_definition: Option<TargetDefinition>,
    pub ref_properties: Vec<Arc<Mutex<PropertyTarget>>>,
}

#[derive(Debug)]
pub struct MainTarget {
    pub target: Arc<Mutex<Target>>,
    pub original_target_ref: TargetReference,
    pub initialized: bool,
}

#[derive(Debug)]
pub struct PropertyTarget {
    pub target: Arc<Mutex<Target>>,
    pub parent_key_name: Option<String>,
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
                target_definition: None,
                ref_properties: Vec::new(),
            })),
            original_target_ref,
            initialized: false,
        }
    }

    pub fn update_target_reference(&mut self, name: String, span: Span) {
        let mut target = self.target.lock().unwrap();
        target.name = name;
        target.target_reference.span = span;
    }

    pub fn add_prop_with_retry(&mut self, id: String, span: Span) {
        loop {
            match self.target.clone().lock() {
                Ok(mut target) => {
                    let target_ref = TargetReference {
                        span,
                        file_path: target.target_reference.file_path.clone(),
                        target_supplement: None,
                    };
                    target.add_property(id, None, target_ref);
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

impl PropertyTarget {
    fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        parent_key_name: Option<String>,
        target_reference: TargetReference,
    ) -> Self {
        Self {
            target: Arc::new(Mutex::new(Target {
                name: mock_target_name.unwrap_or_default(),
                target_reference,
                target_definition: None,
                func_name: mock_func_name.clone(),
                ref_properties: Vec::new(),
            })),
            parent_key_name,
        }
    }
}

//TODO: refとdefを区別する
impl Target {
    pub fn resolved(&self) -> bool {
        self.target_definition.is_some()
    }

    pub fn set_target_definition(&mut self, target_definition: TargetDefinition) {
        self.target_definition = Some(target_definition);
    }

    pub fn add_generics(&mut self, word: String) {
        if let Some(df) = &mut self.target_definition {
            df.defined_generics.push(word);
        }
    }

    pub fn add_property(
        &mut self,
        name: String,
        parent_key_name: Option<String>,
        target_reference: TargetReference,
    ) {
        let new_prop = PropertyTarget::new(
            self.func_name.clone(),
            Some(name),
            parent_key_name,
            target_reference,
        );

        self.ref_properties.push(Arc::new(Mutex::new(new_prop)));
    }
}

impl<'a> Visit<'a> for MainTarget {
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

    fn visit_ts_type(&mut self, ts_type: &TSType<'a>) {
        match ts_type {
            TSType::TSTypeReference(ty_ref) if ast_utils::is_defined_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_function_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_array_type(&ty_ref) => {}
            TSType::TSTypeReference(ty_ref) if ast_utils::is_boolean_type(&ty_ref) => {}
            TSType::TSTypeReference(ts_type_ref) => {
                if let Some(type_parameters) = &ts_type_ref.type_parameters {
                    for param in type_parameters.params.iter() {
                        self.visit_ts_type(param);
                    }
                }

                if let TSTypeName::IdentifierReference(identifier) = &ts_type_ref.type_name {
                    let id_name = identifier.name.clone().into_string();
                    self.add_prop_with_retry(id_name, identifier.span);
                }
            }
            TSType::TSTypeLiteral(ts_type_literal) => {
                self.visit_ts_signatures(&ts_type_literal.members);
            }
            TSType::TSConditionalType(ts_condition_type) => {
                self.visit_ts_type(&ts_condition_type.check_type);
                self.visit_ts_type(&ts_condition_type.extends_type);
                self.visit_ts_type(&ts_condition_type.true_type);
                self.visit_ts_type(&ts_condition_type.false_type);
            }
            TSType::TSUnionType(ts_union_type) => {
                for ts_type in ts_union_type.types.iter() {
                    self.visit_ts_type(ts_type);
                }
            }
            TSType::TSTupleType(ts_tuple_type) => {
                for element in ts_tuple_type.element_types.iter() {
                    self.visit_ts_type(element.to_ts_type());
                }
            }
            TSType::TSNamedTupleMember(ts_named_tuple_member) => {
                match &ts_named_tuple_member.element_type {
                    TSTupleElement::TSOptionalType(_) => {
                        // &ts_named_tuple_member.element_type,
                    }
                    TSTupleElement::TSRestType(_) => {}
                    ts_tuple_type => {
                        self.visit_ts_type(ts_tuple_type.to_ts_type());
                    }
                }
            }
            TSType::TSIntersectionType(ts_intersection_type) => {
                for ts_type in ts_intersection_type.types.iter() {
                    self.visit_ts_type(ts_type);
                }
            }
            TSType::TSTypeQuery(ts_type_query) => {
                if let TSTypeQueryExprName::IdentifierReference(identifier) =
                    &ts_type_query.expr_name
                {
                    self.add_prop_with_retry(
                        identifier.name.clone().into_string(),
                        identifier.span,
                    );
                }
            }
            TSType::TSTypeOperatorType(ts_type_operator_type) => {
                if let TSType::TSTypeReference(ts_type_ref) = &ts_type_operator_type.type_annotation
                {
                    self.add_prop_with_retry(ts_type_ref.type_name.to_string(), ts_type_ref.span);
                }
            }
            TSType::TSIndexedAccessType(ts_indexed_access_type) => {
                if let TSType::TSTypeReference(ts_object_type_ref) =
                    &ts_indexed_access_type.object_type
                {
                    self.add_prop_with_retry(
                        ts_object_type_ref.type_name.to_string(),
                        ts_object_type_ref.span,
                    );
                }
            }
            TSType::TSMappedType(ts_mapped_type) => {
                if let Some(ts_type) = &ts_mapped_type.type_parameter.constraint {
                    self.visit_ts_type(ts_type);
                }

                if let Some(ts_type) = &ts_mapped_type.type_annotation {
                    self.visit_ts_type(ts_type);
                }
            }
            _ => {}
        }
    }
}
