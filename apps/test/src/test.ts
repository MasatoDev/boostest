import { LiteralTypeAlias, LiteralTypeClass, LiteralTypeInterface } from './types/ts_types/literal';
let _ = boostestLiteralAliasType<LiteralTypeAlias>();
let _ = boostestLiteralInterfaceType<LiteralTypeInterface>();
let _ = boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass);

import AnoExportDefaultInterface from './types/export_default_interface';
let a = boostestAnoExportDefaultInterface<AnoExportDefaultInterface>({
  name: 'overridden',
});

import AnoExportDefaultClass from './types/export_default_class';
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

import { AccessorClass } from './types/pattern/accessor_class';
let _ = boostestAccessorClass<typeof AccessorClass>(AccessorClass);

// TODO
// import ClassObj from './types/class_obj';
// let k = boostestClassObj<typeof ClassObj>(ClassObj);

// import { TSAliasMixUnionType, TSAliasStringUnionType, TSAliasMixUnionObjType, TSInterfaceMixUnionType, TSInterfaceStringUnionType } from './types/ts_types/union';
// let k = boostestTSAliasMixUnionType<TSAliasMixUnionType>('A');
// let l = boostestTSAliasStringUnionType<TSAliasStringUnionType>('A');
// let m = boostestTSInterfaceMixUnionType<TSInterfaceMixUnionType>({ type: 'A' });
// let n = boostestTSInterfaceStringUnionType<TSInterfaceStringUnionType>({ type: 'A' });
// let o = boostestTSAliasMixUnionObjType<TSAliasMixUnionObjType>({ ref_type: 'A', type: 'A' });

// TODO
// import { ArgObjClass } from './types/pattern/arg_obj_class';
// let _ = boostestArgObjClass<typeof ArgObjClass>(ArgObjClass);
