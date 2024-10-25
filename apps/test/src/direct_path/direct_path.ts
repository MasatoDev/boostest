import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "@/ts_types/literal";

let _ = boostestLiteralAliasType<LiteralTypeAlias>();
let _ = boostestLiteralInterfaceType<LiteralTypeInterface>();
let _ = boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass);
//
// import { ExportNamedDecl } from "@/export_named_decl";
// let e = boostestExportNamedDecl<ExportNamedDecl>();
//
// import ExportDefaultNamedDecl from "@/export_default_named_decl";
// let f = boostestExportDefaultNamedDecl<ExportDefaultNamedDecl>();
//
// import { AnoExportNamedDeclInterface } from "@/export_named_decl_interface";
// let g = boostestExportNamedDeclInterface<AnoExportNamedDeclInterface>();
//
// import { AnoExportNamedDeclClass } from "@/export_named_decl_class";
// let h = boostestAnoExportNamedDeclClass<typeof AnoExportNamedDeclClass>(
//   AnoExportNamedDeclClass,
// );

// import {
//   RenamedNestedPropClass,
//   RenamedComplexChipsType,
// } from "@/export_rename";
//
// let a = boostestRenamedNestedPropClass<typeof RenamedNestedPropClass>(
//   RenamedNestedPropClass,
// );
// let b = boostestRenamedComplexChipsType<RenamedComplexChipsType>();
