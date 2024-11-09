use oxc::span::Span;
use std::{
    path::PathBuf,
    sync::{Arc, Mutex},
};

use oxc::ast::ast::TSTypeParameterInstantiation;
use oxc::ast::ast::{Argument, CallExpression, TSType::TSTypeReference, TSTypeName};
use oxc::ast::VisitMut;

#[derive(Debug)]
pub enum TargetType {
    Class,
    TSInterface,
    TSTypeAlias,
}

#[derive(Debug)]
pub struct TargetDefinition {
    pub specifier: String,
    pub file_path: PathBuf,
    pub span: Span,
    pub target_type: TargetType,
}

#[derive(Debug, Clone)]
pub struct TargetSupplement {
    pub is_mapped_type: bool,
}

#[derive(Debug)]
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
}

#[derive(Debug)]
pub struct PropertyTarget {
    pub target: Arc<Mutex<Target>>,
    pub key_name: Option<String>,
}

impl MainTarget {
    pub fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        target_reference: TargetReference,
    ) -> Self {
        Self {
            target: Arc::new(Mutex::new(Target {
                name: mock_target_name.unwrap_or(String::new()),
                func_name: mock_func_name.clone(),
                target_reference,
                target_definition: None,
                ref_properties: Vec::new(),
            })),
        }
    }

    pub fn update_target_reference(&mut self, name: String, span: Span) {
        let mut target = self.target.lock().unwrap();
        target.name = name;
        target.target_reference.span = span;
    }
}

impl PropertyTarget {
    fn new(
        mock_func_name: String,
        mock_target_name: Option<String>,
        prop_key_name: Option<String>,
        target_reference: TargetReference,
    ) -> Self {
        Self {
            target: Arc::new(Mutex::new(Target {
                name: mock_target_name.unwrap_or(String::new()),
                target_reference,
                target_definition: None,
                func_name: mock_func_name.clone(),
                ref_properties: Vec::new(),
            })),
            key_name: prop_key_name,
        }
    }
}

//TODO: refとdefを区別する
impl Target {
    pub fn resolved(&self) -> bool {
        self.target_definition.is_some()
    }

    pub fn set_target_reference(&mut self, target_reference: TargetReference) {
        self.target_reference = target_reference;
    }
    pub fn set_target_reference_span(&mut self, span: Span) {
        self.target_reference.span = span
    }
    pub fn set_target_definition(&mut self, target_definition: TargetDefinition) {
        self.target_definition = Some(target_definition);
    }
    pub fn set_target_definition_span(&mut self, span: Span) {
        if let Some(target_definition) = &mut self.target_definition {
            target_definition.span = span;
        }
    }

    pub fn add_property(
        &mut self,
        name: String,
        key_name: String,
        target_reference: TargetReference,
    ) {
        let new_prop = PropertyTarget::new(
            self.func_name.clone(),
            Some(name),
            Some(key_name),
            target_reference,
        );

        self.ref_properties.push(Arc::new(Mutex::new(new_prop)));
    }
}

impl<'a> VisitMut<'a> for MainTarget {
    fn visit_call_expression(&mut self, expr: &mut CallExpression<'a>) {
        let CallExpression {
            type_parameters,
            arguments,
            ..
        } = expr;

        if let Some(result) = type_parameters {
            self.visit_ts_type_parameter_instantiation(result);
        }

        // NOTE: handle first argument only
        if let Some(first_arg) = arguments.get_mut(0) {
            self.visit_argument(first_arg);
        }
    }

    fn visit_ts_type_parameter_instantiation(&mut self, ty: &mut TSTypeParameterInstantiation<'a>) {
        for param in &ty.params {
            if let TSTypeReference(ty_ref) = param {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.update_target_reference(
                        identifier.name.clone().into_string(),
                        identifier.span,
                    );
                }
            }
        }
    }

    fn visit_argument(&mut self, arg: &mut Argument<'a>) {
        match arg {
            Argument::Identifier(identifier) => {
                self.update_target_reference(
                    identifier.name.clone().into_string(),
                    identifier.span,
                );
            }
            _ => {
                // println!("This isn't mock target: {:?}", arg);
            }
        }
    }
}
