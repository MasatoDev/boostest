use oxc::{
    allocator::Allocator,
    ast::{
        ast::{Declaration, Program, Statement},
        AstBuilder, VisitMut,
    },
    codegen::Codegen,
    parser::Parser,
    span::{SourceType, Span},
};

use oxc::allocator;

const SPAN: Span = Span::new(0, 0);

pub struct FallbackMockData {
    pub mock_func_name: String,
    pub key_name: Option<String>,
}

pub struct FallbackFuncBuilder<'a> {
    mock_data: FallbackMockData,
    ast_builder: AstBuilder<'a>,
}

impl<'a> FallbackFuncBuilder<'a> {
    pub fn new(allocator: &'a Allocator, mock_func_name: String, key_name: Option<String>) -> Self {
        let ast_builder = AstBuilder::new(allocator);

        let mock_data = FallbackMockData {
            mock_func_name,
            key_name,
        };

        Self {
            ast_builder,
            mock_data,
        }
    }

    pub fn generate_code(&mut self, source_type: SourceType) -> String {
        let bytes = include_bytes!("./template/default.ts");
        let source_code = std::str::from_utf8(bytes).unwrap();
        let parser = Parser::new(self.ast_builder.allocator, source_code, source_type);
        let program = &mut parser.parse().program;

        self.visit_program(program);

        Codegen::new().build(program).code
    }
}

impl<'a> VisitMut<'a> for FallbackFuncBuilder<'a> {
    fn visit_program(&mut self, program: &mut Program<'a>) {
        self.visit_statements(&mut program.body);
    }

    fn visit_statements(&mut self, stmts: &mut allocator::Vec<'_, Statement<'a>>) {
        for stmt in stmts.iter_mut() {
            match stmt {
                Statement::ExportNamedDeclaration(export) => {
                    if let Some(decl) = &mut export.declaration {
                        self.visit_declaration(decl);
                    }
                }
                _ => {}
            }
        }
    }

    fn visit_declaration(&mut self, decl: &mut Declaration<'a>) {
        match decl {
            Declaration::FunctionDeclaration(func) => {
                if let Some(id) = &mut func.id {
                    if id.name.to_string() == "boostestDefaultTemplate" {
                        let new_name = match &self.mock_data.key_name {
                            Some(key_name) => {
                                format!("{}_{}", key_name, self.mock_data.mock_func_name)
                            }
                            None => self.mock_data.mock_func_name.clone(),
                        };

                        let name = self.ast_builder.atom(&new_name);
                        let new_binding = self.ast_builder.binding_identifier(SPAN, name);

                        let _ = std::mem::replace(id, new_binding);
                    }
                }
            }
            _ => {}
        }
    }
}
