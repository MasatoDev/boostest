import AnoExportDefaultInterface from './types/export_default_interface';
import AnoExportDefaultClass from './types/export_default_class';
import ExportDefaultClassWithDecl from './types/export_default_class_with_decl';
import ExportDefaultClass from './types/export_default_class';
import { ExportNamedDecl } from './types/export_named_decl';
import ExportDefaultNamedDecl from './types/export_default_named_decl';
import { AnoExportNamedDeclInterface } from './types/export_named_decl_interface';
import { AnoExportNamedDeclClass } from './types/export_named_decl_class';
import Mix, { MixCompTSAlias } from './types/mix';
import {
  boostestAnoExportDefaultClass,
  boostestAnoExportDefaultInterface,
  boostestAnoExportNamedDeclClass,
  boostestAnoMixInterface,
  boostestExportDefaultClass,
  boostestExportDefaultClassWithDecl,
  boostestExportDefaultNamedDecl,
  boostestExportNamedDecl,
  boostestExportNamedDeclInterface,
  boostestMixCompTSAlias,
} from './example_test_data';

const anoExportAnoDefaultInterface = boostestAnoExportDefaultInterface<AnoExportDefaultInterface>({
  name: 'overridden',
});
const AnoexportDefaultClass = boostestAnoExportDefaultClass<typeof AnoExportDefaultClass>(AnoExportDefaultClass);
const exportDefaultClass = boostestExportDefaultClass<typeof ExportDefaultClass>(ExportDefaultClass);
const exportDefaultClassWithDecl = boostestExportDefaultClassWithDecl<typeof ExportDefaultClassWithDecl>(ExportDefaultClassWithDecl);
const exportNamedDecl = boostestExportNamedDecl<ExportNamedDecl>();
const exportDefaultNamedDecl = boostestExportDefaultNamedDecl<ExportDefaultNamedDecl>();
const exportNamedDeclInterface = boostestExportNamedDeclInterface<AnoExportNamedDeclInterface>();
const exportNamedDeclClass = boostestAnoExportNamedDeclClass<typeof AnoExportNamedDeclClass>(AnoExportNamedDeclClass);
const mix = boostestAnoMixInterface<Mix>({name:'mix'});
const mixCompTSAlias = boostestMixCompTSAlias<MixCompTSAlias>({name:'mixCompTSAlias'});

const values = [
  anoExportAnoDefaultInterface,
  AnoexportDefaultClass,
  exportDefaultClass,
  exportDefaultClassWithDecl,
  exportNamedDecl,
  exportDefaultNamedDecl,
  exportNamedDeclInterface,
  exportNamedDeclClass,
  mix,
  mixCompTSAlias,
];

for (const value of values) {
  // valueがオブジェクトの場合はJSON.stringify()で文字列に変換
  const output = typeof value === 'object' ? JSON.stringify(value, null, 2) : value;
  console.log(`result: ${output}\n`);
}
