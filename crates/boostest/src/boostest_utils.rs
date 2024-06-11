use anyhow::{anyhow, Result};

use boostest_oxc_utils::ExpressionExt;

use oxc::ast::{ast::Argument, AstKind};
use oxc::{
    ast::ast::{
        Argument::{ObjectExpression, SpreadElement},
        Declaration::{
            ClassDeclaration, TSInterfaceDeclaration, TSTypeAliasDeclaration, VariableDeclaration,
        },
        Expression::{CallExpression, Identifier},
        ImportDeclaration, ImportDeclarationSpecifier, Statement, StringLiteral,
        TSPropertySignature,
        TSType::TSTypeReference,
        TSTypeAnnotation,
        TSTypeName::IdentifierReference,
    },
    syntax::identifier,
};

use crate::boostest_mock::mock;
use crate::boostest_mock::mock_builder::MockBuilder;

pub fn create_mock_target<'a>(mock_builder: &mut MockBuilder, stmt: Statement<'a>) -> Result<()> {
    let pattern = "boostestMock";

    if let Some(stmt) = stmt.as_declaration() {
        if let VariableDeclaration(decl) = stmt {
            for decl in &decl.declarations {
                if let Some(CallExpression(call_expr)) = &decl.init {
                    if let Some(identifier) = call_expr.callee.as_identifier() {
                        if identifier.name.contains(pattern) {
                            let target_mock_name = identifier.name.clone().into_string();
                            let mock = mock::BoostestMock::new(target_mock_name.clone());
                            mock_builder.add_mock(mock);

                            call_expr.type_parameters.iter().for_each(|type_params| {
                                for param in &type_params.params {
                                    if let TSTypeReference(ty_ref) = param {
                                        if let IdentifierReference(identifier) = &ty_ref.type_name {
                                            mock_builder.add_ts_type_ref_mock(
                                                &target_mock_name,
                                                identifier.name.clone().into_string(),
                                            );
                                        }
                                    }
                                }
                            });
                            for arg in &call_expr.arguments {
                                match arg {
                                    Argument::Identifier(ident) => {
                                        mock_builder.add_class_ref_mock(
                                            &target_mock_name,
                                            identifier.name.clone().into_string(),
                                        );
                                    }
                                    ObjectExpression(ident) => {
                                        println!("arg: {:?}", ident);
                                    }
                                    SpreadElement(ident) => {
                                        println!("arg: {:?}", ident);
                                    }
                                    _ => {
                                        println!("other arg: {:?}", arg);
                                    }
                                }
                            }

                            return Ok(());
                        }
                    }
                }
            }
        }
    }

    return Err(anyhow!("何か問題が発生しました"));
}
