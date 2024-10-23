use oxc::allocator::Vec;

use oxc::ast::ast::{
    Argument, CallExpression, Declaration, Expression, ImportDeclaration,
    ImportDeclarationSpecifier, Statement, TSImportEqualsDeclaration, TSType::TSTypeReference,
    TSTypeName, VariableDeclaration,
};
use oxc::ast::ast::{
    BindingPatternKind, Class, ClassBody, ExportDefaultDeclaration, ExportDefaultDeclarationKind,
    ExportNamedDeclaration, ExpressionStatement, MethodDefinition, PropertyDefinition,
    TSInterfaceDeclaration, TSModuleReference, TSSignature, TSType, TSTypeAliasDeclaration,
    TSTypeParameterInstantiation, VariableDeclarator,
};
use oxc::ast::VisitMut;

use crate::boostest_mock_builder::test_data_assignment;
use crate::boostest_mock_loader::mock_loader::MockLoader;

use super::mock_ast_loader::MockAstLoader;

// *********************************** MockBuilder ***********************************
impl<'a> VisitMut<'a> for MockLoader {
    fn visit_statements(&mut self, stmts: &mut Vec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::VariableDeclaration(decl) => {
                    self.visit_variable_declaration(decl);
                }
                Statement::ExpressionStatement(expr_stmt) => {
                    self.visit_expression_statement(expr_stmt);
                }
                _ => {}
            }
        }
    }

    // --------------ADD BASE MOCK--------------
    fn visit_variable_declaration(&mut self, decl: &mut VariableDeclaration<'a>) {
        for declarator in decl.declarations.iter_mut() {
            self.visit_variable_declarator(declarator);
        }
    }

    fn visit_variable_declarator(&mut self, declarator: &mut VariableDeclarator<'a>) {
        if let Some(Expression::CallExpression(call_expr)) = &mut declarator.init {
            self.visit_call_expression(call_expr)
        }
    }

    fn visit_expression_statement(&mut self, stmt: &mut ExpressionStatement<'a>) {
        match &mut stmt.expression {
            Expression::CallExpression(call_expr) => self.visit_call_expression(call_expr),
            Expression::AssignmentExpression(assignment_expr) => {
                if let Expression::CallExpression(call_expr) = &mut assignment_expr.right {
                    self.visit_call_expression(call_expr)
                }
            }
            _ => {}
        }
    }

    fn visit_call_expression(&mut self, expr: &mut CallExpression<'a>) {
        if let Expression::Identifier(ident) = &expr.callee {
            let pattern = &self.get_pattern();

            // add target function to mock ast loader
            if ident.name.contains(pattern) {
                let target_mock_name = ident.name.clone().into_string();
                self.add_ast_loader(target_mock_name.clone().to_string());

                if let Some(target_mock) = self.get_mock(&target_mock_name) {
                    target_mock.lock().unwrap().visit_call_expression(expr);
                }
            }
        }
    }
}

// *********************************** BoostestMock ***********************************

impl<'a> VisitMut<'a> for MockAstLoader {
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
        // for argument in arguments.iter() {
        //     self.visit_argument(argument);
        // }
    }

    fn visit_ts_type_parameter_instantiation(&mut self, ty: &mut TSTypeParameterInstantiation<'a>) {
        for param in &ty.params {
            if let TSTypeReference(ty_ref) = param {
                if let TSTypeName::IdentifierReference(identifier) = &ty_ref.type_name {
                    self.set_target_name(identifier.name.clone().into_string(), identifier.span);
                }
            }
        }
    }

    fn visit_argument(&mut self, arg: &mut Argument<'a>) {
        match arg {
            Argument::Identifier(identifier) => {
                self.set_target_name(identifier.name.clone().into_string(), identifier.span);
            }
            _ => {
                // println!("This isn't mock target: {:?}", arg);
            }
        }
    }

    // -------------- ADD DECL TO MOCK --------------

    fn visit_statements(&mut self, stmts: &mut Vec<'a, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                // TODO: support named change `const huga  = hoge;`
                Statement::VariableDeclaration(_) => {}
                Statement::TSImportEqualsDeclaration(ts_import_equals_decl) => {
                    self.visit_ts_import_equals_declaration(ts_import_equals_decl);
                }
                Statement::ImportDeclaration(import) => {
                    self.visit_import_declaration(import);
                }

                Statement::ExportNamedDeclaration(export_named_decl) => {
                    self.visit_export_named_declaration(export_named_decl);
                }
                Statement::ClassDeclaration(class) => self.visit_class(class),
                Statement::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Statement::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl);
                }
                Statement::TSExportAssignment(_ts_export_assignment) => {
                    /*
                     * TODO: support commonjs
                     * export = ClassName;
                     *
                     */

                    // if let Expression::Identifier(id) = &ts_export_assignment.expression {
                    //     self.set_default_import_name(
                    //         &String::from("default"),
                    //         &id.name.to_string(),
                    //     );
                    // }
                }
                Statement::ExportDefaultDeclaration(export_default_decl) => {
                    self.visit_export_default_declaration(export_default_decl);
                }
                _ => {
                    // println!("Another Statement {:?}", stmt);
                }
            }
        }
    }

    fn visit_export_default_declaration(&mut self, decl: &mut ExportDefaultDeclaration<'a>) {
        match &mut decl.declaration {
            ExportDefaultDeclarationKind::ClassDeclaration(class) => {
                self.visit_class(class);
            }
            ExportDefaultDeclarationKind::TSInterfaceDeclaration(ts_interface_decl) => {
                self.visit_ts_interface_declaration(ts_interface_decl);
            }
            ExportDefaultDeclarationKind::TSEnumDeclaration(_) => {}
            ExportDefaultDeclarationKind::FunctionDeclaration(_) => {}
            ExportDefaultDeclarationKind::Identifier(id) => {
                /*
                 * export default ClassName;
                 * exported: default
                 * local: ClassName
                 */
                self.set_default_import_name(&decl.exported.to_string(), &id.name.to_string());
            }
            _ => {}
        }
    }

    // handle mock target is class
    fn visit_class(&mut self, class: &mut Class<'a>) {
        if let Some(identifier) = &class.id {
            if let Some(target_name) = self.get_decl_name_for_resolve() {
                if identifier.name.to_string() == *target_name {
                    self.add_class(class);
                    self.visit_class_body(&mut class.body);
                }
            }
        }
    }

    fn visit_class_body(&mut self, body: &mut ClassBody<'a>) {
        body.body.iter_mut().for_each(|element| match element {
            oxc::ast::ast::ClassElement::MethodDefinition(method) => {
                self.visit_method_definition(method);
            }

            /*
            class MyClass {
              static staticProperty = 10; // StaticBlock
              private _name: string; // PropertyDefinition
              constructor(name: string) {
                this._name = name;
              }
              get name(): string { // AccessorProperty (getter)
                return this._name;
              }
              set name(newName: string) { // AccessorProperty (setter)
                this._name = newName;
              }
              greet() { // MethodDefinition
                console.log(`Hello, ${this.name}!`);
              }
              [index: number]: string; // TSIndexSignature
            }
            */
            _ => {}
        });
    }

    fn visit_method_definition(&mut self, method: &mut MethodDefinition<'a>) {
        if let Some(key_name) = method.key.name() {
            if key_name == "constructor" {
                for formal_parameter in method.value.params.items.iter_mut() {
                    match &formal_parameter.pattern.kind {
                        BindingPatternKind::BindingIdentifier(id) => {
                            if let Some(ts_type) = &formal_parameter.pattern.type_annotation {
                                test_data_assignment::ts_type_assign_as_property(
                                    self,
                                    &ts_type.type_annotation,
                                    id.name.to_string(),
                                );
                            }
                        }
                        BindingPatternKind::ObjectPattern(_) => {
                            if let Some(ts_type) = &formal_parameter.pattern.type_annotation {
                                test_data_assignment::ts_type_assign_as_property(
                                    self,
                                    &ts_type.type_annotation,
                                    String::from("object"),
                                );
                            }
                        }
                        _ => {}
                    }
                }
            }
        }
    }

    fn visit_property_definition(&mut self, def: &mut PropertyDefinition<'a>) {
        for annotation in def.type_annotation.iter_mut() {
            if let Some(key_name) = def.key.name() {
                test_data_assignment::ts_type_assign_as_property(
                    self,
                    &annotation.type_annotation,
                    key_name.to_string(),
                );
            }
        }
    }

    fn visit_ts_signature(&mut self, signature: &mut TSSignature<'a>) {
        match signature {
            TSSignature::TSPropertySignature(ts_prop_signature) => {
                for annotation in ts_prop_signature.type_annotation.iter() {
                    if let Some(key_name) = ts_prop_signature.key.name() {
                        test_data_assignment::ts_type_assign_as_property(
                            self,
                            &annotation.type_annotation,
                            key_name.to_string(),
                        );
                    }
                }
            }
            // TODO
            /*
            type MyType = {
              [key: string]: number; // TSIndexSignature
              name: string;           // TSPropertySignature
              sayHello(): void;       // TSMethodSignature
              new (name: string): MyType; // TSConstructSignatureDeclaration
              (message: string): string; // TSCallSignatureDeclaration
            };
            */
            TSSignature::TSCallSignatureDeclaration(_) => {}
            _ => {}
        }
    }

    // handle mock target is type alias
    fn visit_ts_type_alias_declaration(&mut self, decl: &mut TSTypeAliasDeclaration<'a>) {
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.add_ts_alias(decl);

                // NOTE: handle mock target property
                match &mut decl.type_annotation {
                    TSType::TSTypeLiteral(ts_type_literal) => {
                        for ts_signature in ts_type_literal.members.iter_mut() {
                            self.visit_ts_signature(ts_signature);
                        }
                    }
                    _ => {}
                }
            }
        }
    }

    fn visit_ts_interface_declaration(&mut self, decl: &mut TSInterfaceDeclaration<'a>) {
        if let Some(target_name) = self.get_decl_name_for_resolve() {
            if decl.id.name.to_string() == *target_name {
                self.add_ts_interface(decl);

                for ts_signature in decl.body.body.iter_mut() {
                    self.visit_ts_signature(ts_signature);
                }
            }
        }
    }

    fn visit_ts_import_equals_declaration(&mut self, decl: &mut TSImportEqualsDeclaration<'a>) {
        let name = &decl.id.name;

        match &decl.module_reference {
            TSModuleReference::ExternalModuleReference(external_module_reference) => {
                let full_path = external_module_reference
                    .expression
                    .value
                    .clone()
                    .into_string();
                self.set_temp_import_source(name.to_string(), full_path, None, false)
            }
            TSModuleReference::IdentifierReference(_id) => {
                // println!("id: {:?}", id)
            }
            _ => {}
        };
    }

    fn visit_import_declaration(&mut self, decl: &mut ImportDeclaration<'a>) {
        if let Some(specifiers) = &decl.specifiers {
            for specifier in specifiers {
                let full_path = decl.source.value.clone().into_string();
                let mut imported: Option<String> = None;

                match specifier {
                    ImportDeclarationSpecifier::ImportNamespaceSpecifier(namespace) => {
                        let local = namespace.local.name.clone().into_string();
                        self.set_temp_import_source(local, full_path, imported, false)
                    }
                    ImportDeclarationSpecifier::ImportSpecifier(normal) => {
                        let local = normal.local.name.clone().into_string();
                        imported = Some(normal.imported.to_string());

                        self.set_temp_import_source(local, full_path, imported, false)
                    }
                    ImportDeclarationSpecifier::ImportDefaultSpecifier(default) => {
                        let local = default.local.name.clone().into_string();
                        self.set_temp_import_source(local, full_path, imported, true)
                    }
                }
            }
        }
    }

    fn visit_export_named_declaration(&mut self, decl: &mut ExportNamedDeclaration<'a>) {
        let ExportNamedDeclaration {
            declaration,
            specifiers,
            source,
            ..
        } = decl;

        for specifier in specifiers.iter_mut() {
            let local = specifier.local.name().to_string();
            let exported = specifier.exported.name().to_string();

            /*
             * export type { Huga as default };     // source is None
             * export type { Huga as default } from '...';
             */
            if let Some(source) = source {
                let full_path = source.value.clone().into_string();
                // NOTE: set local to imported because use for searching decl with local name
                // export type {Huga(local) as Hoge(exported)} from '...'
                self.set_temp_import_source(exported, full_path, Some(local), false);
            } else {
                /*
                 * export type {Huga as default};
                 *
                 * exported: default
                 * local: Huga
                 */
                self.set_default_import_name(&exported, &local);

                /*
                 * export type {Huga as AnotherHuga};
                 *
                 * exported: AnotherHuga
                 * local: Huga
                 */
                self.set_original_name(&exported, &local)
            }
        }

        if let Some(export_named_decl) = declaration {
            match export_named_decl {
                Declaration::ClassDeclaration(class) => {
                    self.visit_class(class);
                }
                Declaration::TSTypeAliasDeclaration(decl) => {
                    self.visit_ts_type_alias_declaration(decl);
                }
                Declaration::TSInterfaceDeclaration(decl) => {
                    self.visit_ts_interface_declaration(decl)
                }
                _ => {
                    // println!("Another Statement {:?}", export_named_decl);
                }
            }
        }
    }
}
