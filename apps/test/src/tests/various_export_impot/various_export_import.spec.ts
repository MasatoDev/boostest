import { runSnapshotTest } from "../utils";
import {
  boostestComplexChipsType,
  boostestAnoExportDefaultInterface,
  boostestAnoExportDefaultClass,
  boostestExportDefaultClass,
  boostestExportDefaultClassWithDecl,
  boostestExportNamedDecl,
  boostestExportDefaultNamedDecl,
  boostestExportNamedDeclInterface,
  boostestAnoExportNamedDeclClass,
  boostestAnoMixInterface,
  boostestMixCompTSAlias,
  boostestMixInterfaceFirst,
  boostestMixInterfaceSecond,
  boostestMixInterfaceFirst2,
  boostestMixInterfaceSecond2,
  boostestMixTSAliasFirst,
  boostestMixTSAliasSecond,
  boostestMixTSAliasFirst2,
  boostestMixTSAliasSecond2,
  boostestMixClassFirst,
  boostestMixClassSecond,
  boostestMixClassFirst2,
  boostestMixClassSecond2,
  boostestAccessorClass,
} from "./various_export_import.spec_test_data";

import { ComplexChipsType } from "../../types/export_decl";
import AnoExportDefaultInterface from "../../types/export_default_interface";
import AnoExportDefaultClass from "../../types/export_default_class";
import ExportDefaultClass from "../../types/export_default_class";
import ExportDefaultClassWithDecl from "../../types/export_default_class_with_decl";
import { ExportNamedDecl } from "../../types/export_named_decl";
import ExportDefaultNamedDecl from "../../types/export_default_named_decl";
import { AnoExportNamedDeclInterface } from "../../types/export_named_decl_interface";
import { AnoExportNamedDeclClass } from "../../types/export_named_decl_class";
import Mix, { MixCompTSAlias } from "../../types/mix";
import MixInterfaceSecond, {
  MixInterfaceFirst,
} from "../../types/mix_default_normal/mix_interface";
import MixInterfaceFirst2, {
  MixInterfaceSecond2,
} from "../../types/mix_default_normal/mix_interface2";
import MixTSAliasSecond, {
  MixTSAliasFirst,
} from "../../types/mix_default_normal/mix_ts_alias";
import MixTSAliasSecond2, {
  MixTSAliasFirst2,
} from "../../types/mix_default_normal/mix_ts_alias2";
import MixClassFirst, {
  MixClassSecond,
} from "../../types/mix_default_normal/mix_class";
import MixClassFirst2, {
  MixClassSecond2,
} from "../../types/mix_default_normal/mix_class2";
import { AccessorClass } from "../../types/pattern/accessor_class";

describe("Various Export Methods Tests", () => {
  runSnapshotTest(
    "ComplexChipsType",
    boostestComplexChipsType<ComplexChipsType>(),
  );

  runSnapshotTest(
    "AnoExportDefaultInterface",
    boostestAnoExportDefaultInterface<AnoExportDefaultInterface>({
      name: "overridden",
    }),
  );

  runSnapshotTest(
    "AnoExportDefaultClass",
    boostestAnoExportDefaultClass<typeof AnoExportDefaultClass>(
      AnoExportDefaultClass,
    ),
  );

  runSnapshotTest(
    "ExportDefaultClass",
    boostestExportDefaultClass<typeof ExportDefaultClass>(ExportDefaultClass),
  );

  runSnapshotTest(
    "ExportDefaultClassWithDecl",
    boostestExportDefaultClassWithDecl<typeof ExportDefaultClassWithDecl>(
      ExportDefaultClassWithDecl,
    ),
  );

  runSnapshotTest(
    "ExportNamedDecl",
    boostestExportNamedDecl<ExportNamedDecl>(),
  );

  runSnapshotTest(
    "ExportDefaultNamedDecl",
    boostestExportDefaultNamedDecl<ExportDefaultNamedDecl>(),
  );

  runSnapshotTest(
    "AnoExportNamedDeclInterface",
    boostestExportNamedDeclInterface<AnoExportNamedDeclInterface>(),
  );

  runSnapshotTest(
    "AnoExportNamedDeclClass",
    boostestAnoExportNamedDeclClass<typeof AnoExportNamedDeclClass>(
      AnoExportNamedDeclClass,
    ),
  );

  runSnapshotTest("Mix", boostestAnoMixInterface<Mix>({ name: "mix" }));
  runSnapshotTest(
    "MixCompTSAlias",
    boostestMixCompTSAlias<MixCompTSAlias>({ name: "mixCompTSAlias" }),
  );

  runSnapshotTest(
    "MixInterfaceFirst",
    boostestMixInterfaceFirst<MixInterfaceFirst>(),
  );
  runSnapshotTest(
    "MixInterfaceSecond",
    boostestMixInterfaceSecond<MixInterfaceSecond>(),
  );

  runSnapshotTest(
    "MixInterfaceFirst2",
    boostestMixInterfaceFirst2<MixInterfaceFirst2>(),
  );
  runSnapshotTest(
    "MixInterfaceSecond2",
    boostestMixInterfaceSecond2<MixInterfaceSecond2>(),
  );

  runSnapshotTest(
    "MixTSAliasFirst",
    boostestMixTSAliasFirst<MixTSAliasFirst>(),
  );
  runSnapshotTest(
    "MixTSAliasSecond",
    boostestMixTSAliasSecond<MixTSAliasSecond>(),
  );

  runSnapshotTest(
    "MixTSAliasFirst2",
    boostestMixTSAliasFirst2<MixTSAliasFirst2>(),
  );
  runSnapshotTest(
    "MixTSAliasSecond2",
    boostestMixTSAliasSecond2<MixTSAliasSecond2>(),
  );

  runSnapshotTest(
    "MixClassFirst",
    boostestMixClassFirst<typeof MixClassFirst>(MixClassFirst),
  );
  runSnapshotTest(
    "MixClassSecond",
    boostestMixClassSecond<typeof MixClassSecond>(MixClassSecond),
  );

  runSnapshotTest(
    "MixClassFirst2",
    boostestMixClassFirst2<typeof MixClassFirst2>(MixClassFirst2),
  );
  runSnapshotTest(
    "MixClassSecond2",
    boostestMixClassSecond2<typeof MixClassSecond2>(MixClassSecond2),
  );

  runSnapshotTest(
    "AccessorClass",
    boostestAccessorClass<typeof AccessorClass>(AccessorClass),
  );
});