import { LiteralTypeAlias, LiteralTypeClass, LiteralTypeInterface } from '@/ts_types/literal';
let _ = boostestLiteralAliasType<LiteralTypeAlias>();
let _ = boostestLiteralInterfaceType<LiteralTypeInterface>();
let _ = boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass);

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
} from '@/ts_types/ts_type_literal';

let _ = boostestTsTypeLiteralString<TsTypeLiteralString>();
let _ = boostestTsTypeLiteralLiteralTypeString<TsTypeLiteralLiteralTypeString>();
let _ = boostestTsLiteralTypeStringUnionType<TsLiteralTypeStringUnionType>();

let _ = boostestTsTypeLiteralNumber<TsTypeLiteralNumber>();
let _ = boostestTsLiteralNumberUnionType<TsLiteralNumberUnionType>();
let _ = boostestTsTypeLiteralLiteralNumberType<TsTypeLiteralLiteralNumberType>();

let _ = boostestTsTypeLiteralBoolean<TsTypeLiteralBoolean>();

let _ = boostestTsTypeLiteralNull<TsTypeLiteralNull>();

let _ = boostestTsTypeLiteralUndefined<TsTypeLiteralUndefined>();

let _ = boostestTsTypeLiteralArray<TsTypeLiteralArray>();
let _ = boostestTsTypeLiteralLiteralArrayType<TsTypeLiteralLiteralArrayType>();
let _ = boostestTsLiteralArrayUnionType<TsLiteralArrayUnionType>();

let _ = boostestTsTypeLiteralObject<TsTypeLiteralObject>();
let _ = boostestTsTypeLiteralLiteralObjectType<TsTypeLiteralLiteralObjectType>();
let _ = boostestTsLiteralObjectUnionType<TsLiteralObjectUnionType>();

let _ = boostestTsTypeLiteralFunction<TsTypeLiteralFunction>();
let _ = boostestTsTypeLiteralLiteralFunctionType<TsTypeLiteralLiteralFunctionType>();
let _ = boostestTsLiteralFunctionUnionType<TsLiteralFunctionUnionType>();

let _ = boostestTsTypeLiteralSymbol<TsTypeLiteralSymbol>();
let _ = boostestTsTypeLiteralLiteralSymbolType<TsTypeLiteralLiteralSymbolType>();

let _ = boostestUseTSTypeLiteralAlias<UseTSTypeLiteralAlias>();
let _ = boostestUseTSTypeLiteralInterface<UseTSTypeLiteralInterface>();

/**
 *
 *
 * Test various export methods
 *
 *
 */
import AnoExportDefaultInterface from '@/export_default_interface';
let a = boostestAnoExportDefaultInterface<AnoExportDefaultInterface>({
  name: 'overridden',
});

import AnoExportDefaultClass from '@/export_default_class';
let b = boostestAnoExportDefaultClass<typeof AnoExportDefaultClass>(AnoExportDefaultClass);

import ExportDefaultClass from './types/export_default_class';
let c = boostestExportDefaultClass<typeof ExportDefaultClass>(ExportDefaultClass);

import ExportDefaultClassWithDecl from './types/export_default_class_with_decl';
let d = boostestExportDefaultClassWithDecl<typeof ExportDefaultClassWithDecl>(ExportDefaultClassWithDecl);

import { ExportNamedDecl } from './types/export_named_decl';
let e = boostestExportNamedDecl<ExportNamedDecl>();

import ExportDefaultNamedDecl from './types/export_default_named_decl';
let f = boostestExportDefaultNamedDecl<ExportDefaultNamedDecl>();

import { AnoExportNamedDeclInterface } from './types/export_named_decl_interface';
let g = boostestExportNamedDeclInterface<AnoExportNamedDeclInterface>();

import { AnoExportNamedDeclClass } from './types/export_named_decl_class';
let h = boostestAnoExportNamedDeclClass<typeof AnoExportNamedDeclClass>(AnoExportNamedDeclClass);

import Mix, { MixCompTSAlias } from './types/mix';
let i = boostestAnoMixInterface<Mix>({ name: 'mix' });
let j = boostestMixCompTSAlias<MixCompTSAlias>({ name: 'mixCompTSAlias' });

/**
 *
 *
 * constructor(public name: string, private age: number, protected readonly readonlyAge: number) {}
 *
 *
 */
import { AccessorClass } from './types/pattern/accessor_class';
let _ = boostestAccessorClass<typeof AccessorClass>(AccessorClass);

// TODO
// import ClassObj from './types/class_obj';
// let k = boostestClassObj<typeof ClassObj>(ClassObj);

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

// TODO
/**
 *
 *
 * this case is a argument of class is object
 * constructor({ name, age }: { name: string; age: number })
 *
 *
 */
// import { ArgObjClass } from './types/pattern/arg_obj_class';
// let _ = boostestArgObjClass<typeof ArgObjClass>(ArgObjClass);
