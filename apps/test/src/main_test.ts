import {
  boostestAccessorClass,
  boostestAnoExportDefaultClass,
  boostestAnoExportDefaultInterface,
  boostestAnoExportNamedDeclClass,
  boostestAnoMixInterface,
  boostestArgObjClass,
  boostestArgObjClass2,
  boostestCallSignature,
  boostestComplexChipsType,
  boostestExportDefaultClass,
  boostestExportDefaultClassWithDecl,
  boostestExportDefaultNamedDecl,
  boostestExportNamedDecl,
  boostestExportNamedDeclInterface,
  boostestIndexSignature,
  boostestLiteralAliasType,
  boostestLiteralInterfaceType,
  boostestLiteralTypeClass,
  boostestMathOperations,
  boostestMixClassFirst,
  boostestMixClassFirst2,
  boostestMixClassSecond,
  boostestMixClassSecond2,
  boostestMixCompTSAlias,
  boostestMixInterfaceFirst,
  boostestMixInterfaceFirst2,
  boostestMixInterfaceSecond,
  boostestMixInterfaceSecond2,
  boostestMixTSAliasFirst,
  boostestMixTSAliasFirst2,
  boostestMixTSAliasSecond,
  boostestMixTSAliasSecond2,
  boostestNestedInterface,
  boostestNestedPropClass,
  boostestNestedType,
  boostestSingleCallSignature,
  boostestTsLiteralArrayUnionType,
  boostestTsLiteralFunctionUnionType,
  boostestTsLiteralNumberUnionType,
  boostestTsLiteralObjectUnionType,
  boostestTsLiteralTypeStringUnionType,
  boostestTsTypeLiteralArray,
  boostestTsTypeLiteralBoolean,
  boostestTsTypeLiteralFunction,
  boostestTsTypeLiteralLiteralArrayType,
  boostestTsTypeLiteralLiteralFunctionType,
  boostestTsTypeLiteralLiteralNumberType,
  boostestTsTypeLiteralLiteralObjectType,
  boostestTsTypeLiteralLiteralSymbolType,
  boostestTsTypeLiteralLiteralTypeString,
  boostestTsTypeLiteralNull,
  boostestTsTypeLiteralNumber,
  boostestTsTypeLiteralObject,
  boostestTsTypeLiteralString,
  boostestTsTypeLiteralSymbol,
  boostestTsTypeLiteralUndefined,
  boostestUseTSTypeLiteralAlias,
  boostestUseTSTypeLiteralInterface,
} from "./main_test_test_data";

// TODO: not supported yet
// _ = boostest();

import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "@/ts_types/literal";
let literalAlias = boostestLiteralAliasType<LiteralTypeAlias>();
literalAlias = boostestLiteralInterfaceType<LiteralTypeInterface>();
boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass);

import {
  // string
  TsTypeLiteralString,
  TsTypeLiteralLiteralTypeString,
  TsLiteralTypeStringUnionType,

  // number
  TsTypeLiteralNumber,
  TsTypeLiteralLiteralNumberType,
  TsLiteralNumberUnionType,

  // boolean
  TsTypeLiteralBoolean,
  TsTypeLiteralLiteralBooleanType,
  TsLiteralBooleanUnionType,

  // null
  TsTypeLiteralNull,

  // undefined
  TsTypeLiteralUndefined,

  // Array
  TsTypeLiteralArray,
  TsTypeLiteralLiteralArrayType,
  TsLiteralArrayUnionType,

  // Object
  TsTypeLiteralObject,
  TsTypeLiteralLiteralObjectType,
  TsLiteralObjectUnionType,

  // Function
  TsTypeLiteralFunction,
  TsTypeLiteralLiteralFunctionType,
  TsLiteralFunctionUnionType,

  // Symbol
  TsTypeLiteralSymbol,
  TsTypeLiteralLiteralSymbolType,

  // use
  UseTSTypeLiteralAlias,
  UseTSTypeLiteralInterface,
} from "@/ts_types/ts_type_literal";

boostestTsTypeLiteralString<TsTypeLiteralString>();
boostestTsTypeLiteralLiteralTypeString<TsTypeLiteralLiteralTypeString>();
boostestTsLiteralTypeStringUnionType<TsLiteralTypeStringUnionType>();

let _ = boostestTsTypeLiteralNumber<TsTypeLiteralNumber>();
let _ = boostestTsLiteralNumberUnionType<TsLiteralNumberUnionType>();
let _ =
  boostestTsTypeLiteralLiteralNumberType<TsTypeLiteralLiteralNumberType>();

let _ = boostestTsTypeLiteralBoolean<TsTypeLiteralBoolean>();

let _ = boostestTsTypeLiteralNull<TsTypeLiteralNull>();

let _ = boostestTsTypeLiteralUndefined<TsTypeLiteralUndefined>();

let _ = boostestTsTypeLiteralArray<TsTypeLiteralArray>();
let _ = boostestTsTypeLiteralLiteralArrayType<TsTypeLiteralLiteralArrayType>();
let _ = boostestTsLiteralArrayUnionType<TsLiteralArrayUnionType>();

let _ = boostestTsTypeLiteralObject<TsTypeLiteralObject>();
let _ =
  boostestTsTypeLiteralLiteralObjectType<TsTypeLiteralLiteralObjectType>();
let _ = boostestTsLiteralObjectUnionType<TsLiteralObjectUnionType>();

let _ = boostestTsTypeLiteralFunction<TsTypeLiteralFunction>();
let _ =
  boostestTsTypeLiteralLiteralFunctionType<TsTypeLiteralLiteralFunctionType>();
let _ = boostestTsLiteralFunctionUnionType<TsLiteralFunctionUnionType>();

let _ = boostestTsTypeLiteralSymbol<TsTypeLiteralSymbol>();
let _ =
  boostestTsTypeLiteralLiteralSymbolType<TsTypeLiteralLiteralSymbolType>();

let _ = boostestUseTSTypeLiteralAlias<UseTSTypeLiteralAlias>();
let _ = boostestUseTSTypeLiteralInterface<UseTSTypeLiteralInterface>();

/**
 *
 *
 * Nested type
 *
 *
 */
import { NestedType, NestedInterface } from "@/ts_types/nested";
let _ = boostestNestedType<NestedType>();
let _ = boostestNestedInterface<NestedInterface>();

import { NestedPropClass } from "@/nested_prop_class";
let _ = boostestNestedPropClass<typeof NestedPropClass>(NestedPropClass);

/**
 *
 *
 * Test various export methods
 *
 *
 */
import { ComplexChipsType } from "./types/export_decl";
let _ = boostestComplexChipsType<ComplexChipsType>();

import AnoExportDefaultInterface from "@/export_default_interface";
let a = boostestAnoExportDefaultInterface<AnoExportDefaultInterface>({
  name: "overridden",
});

import AnoExportDefaultClass from "@/export_default_class";
let b = boostestAnoExportDefaultClass<typeof AnoExportDefaultClass>(
  AnoExportDefaultClass,
);

import ExportDefaultClass from "./types/export_default_class";
let c =
  boostestExportDefaultClass<typeof ExportDefaultClass>(ExportDefaultClass);

import ExportDefaultClassWithDecl from "./types/export_default_class_with_decl";
let d = boostestExportDefaultClassWithDecl<typeof ExportDefaultClassWithDecl>(
  ExportDefaultClassWithDecl,
);

import { ExportNamedDecl } from "./types/export_named_decl";
let e = boostestExportNamedDecl<ExportNamedDecl>();

import ExportDefaultNamedDecl from "./types/export_default_named_decl";
let f = boostestExportDefaultNamedDecl<ExportDefaultNamedDecl>();

import { AnoExportNamedDeclInterface } from "./types/export_named_decl_interface";
let g = boostestExportNamedDeclInterface<AnoExportNamedDeclInterface>();

import { AnoExportNamedDeclClass } from "./types/export_named_decl_class";
let h = boostestAnoExportNamedDeclClass<typeof AnoExportNamedDeclClass>(
  AnoExportNamedDeclClass,
);

import Mix, { MixCompTSAlias } from "./types/mix";
let i = boostestAnoMixInterface<Mix>({ name: "mix" });
let j = boostestMixCompTSAlias<MixCompTSAlias>({ name: "mixCompTSAlias" });

import MixInterfaceSecond, {
  MixInterfaceFirst,
} from "@/mix_default_normal/mix_interface";
let _ = boostestMixInterfaceFirst<MixInterfaceFirst>();
let _ = boostestMixInterfaceSecond<MixInterfaceSecond>();

import MixInterfaceFirst2, {
  MixInterfaceSecond2,
} from "@/mix_default_normal/mix_interface2";
let _ = boostestMixInterfaceFirst2<MixInterfaceFirst2>();
let _ = boostestMixInterfaceSecond2<MixInterfaceSecond2>();

import MixTSAliasSecond, {
  MixTSAliasFirst,
} from "@/mix_default_normal/mix_ts_alias";
let _ = boostestMixTSAliasFirst<MixTSAliasFirst>();
let _ = boostestMixTSAliasSecond<MixTSAliasSecond>();

import MixTSAliasSecond2, {
  MixTSAliasFirst2,
} from "@/mix_default_normal/mix_ts_alias2";
let _ = boostestMixTSAliasFirst2<MixTSAliasFirst2>();
let _ = boostestMixTSAliasSecond2<MixTSAliasSecond2>();

import MixClassFirst, { MixClassSecond } from "@/mix_default_normal/mix_class";
let _ = boostestMixClassFirst<typeof MixClassFirst>(MixClassFirst);
let _ = boostestMixClassSecond<typeof MixClassSecond>(MixClassSecond);

import MixClassFirst2, {
  MixClassSecond2,
} from "@/mix_default_normal/mix_class2";
let _ = boostestMixClassFirst2<typeof MixClassFirst2>(MixClassFirst2);
let _ = boostestMixClassSecond2<typeof MixClassSecond2>(MixClassSecond2);

/**
 *
 *
 * constructor(public name: string, private age: number, protected readonly readonlyAge: number) {}
 *
 *
 */
import { AccessorClass } from "./types/pattern/accessor_class";
let _ = boostestAccessorClass<typeof AccessorClass>(AccessorClass);

/**
 *
 *
 * Union type
 *
 *
 */
// import { TSAliasMixUnionType, TSAliasStringUnionType, TSAliasMixUnionObjType, TSInterfaceMixUnionType, TSInterfaceStringUnionType } from './types/ts_types/union';
// let k = boostestTSAliasMixUnionType<TSAliasMixUnionType>('A');
// let l = boostestTSAliasStringUnionType<TSAliasStringUnionType>('A');
// let m = boostestTSInterfaceMixUnionType<TSInterfaceMixUnionType>({ type: 'A' });
// let n = boostestTSInterfaceStringUnionType<TSInterfaceStringUnionType>({ type: 'A' });
// let o = boostestTSAliasMixUnionObjType<TSAliasMixUnionObjType>({ ref_type: 'A', type: 'A' });

/**
 *
 *
 * TODO:
 * this case is a argument of class is object
 * constructor({ name, age }: { name: string; age: number })
 *
 *
 */
import { ArgObjClass } from "./types/pattern/arg_obj_class";
import { ArgObjClass2 } from "./types/pattern/arg_obj_class2";
let _ = boostestArgObjClass<typeof ArgObjClass>(ArgObjClass);
let _ = boostestArgObjClass2<typeof ArgObjClass2>(ArgObjClass2);

import { IndexSignature } from "@/ts_types/index_signature";
let _ = boostestIndexSignature<IndexSignature>();

import {
  CallSignature,
  MathOperations,
  SingleCallSignature,
  CallSignatureInterface,
} from "@/ts_types/call_signature";
import { boostest } from "boostest";
let _ = boostestCallSignature<CallSignature>();
let _ = boostestSingleCallSignature<SingleCallSignature>();
let _ = boostestMathOperations<MathOperations>();

// TODO: this is not implemented
// let _ = boostestCallSignatureInterface<CallSignatureInterface>();

import {
  RenamedNestedPropClass,
  RenamedComplexChipsType,
} from "@/export_rename";

let a = boostestRenamedNestedPropClass<typeof RenamedNestedPropClass>(
  RenamedNestedPropClass,
);
let b = boostestRenamedComplexChipsType<RenamedComplexChipsType>();

import * as Hoge from "@/common.ts";
let hoge = boostestCommonCjs<Hoge>();

/**
 *
 *
 * TODO
 * constructor signature
 *
 *
 */
// import { ConstructorSignature, InnerConstructorSignature, ConstructorSignatureInterface } from '@/ts_types/constructor_signature';

// let _ = boostestConstructorSignature<ConstructorSignature>();
// let _ = boostestInnerConstructorSignature<InnerConstructorSignature>();
// let _ = boostestConstructorSignatureInterface<ConstructorSignatureInterface>();
