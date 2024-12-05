import { runSnapshotTest } from "../utils";

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

import { boostestComplexChipsType } from "./boostest_output/boostestComplexChipsType";
import { boostestAnoExportDefaultInterface } from "./boostest_output/boostestAnoExportDefaultInterface";
import { boostestAnoExportDefaultClass } from "./boostest_output/boostestAnoExportDefaultClass";
import { boostestExportDefaultClass } from "./boostest_output/boostestExportDefaultClass";
import { boostestExportDefaultClassWithDecl } from "./boostest_output/boostestExportDefaultClassWithDecl";
import { boostestExportNamedDecl } from "./boostest_output/boostestExportNamedDecl";
import { boostestExportDefaultNamedDecl } from "./boostest_output/boostestExportDefaultNamedDecl";
import { boostestExportNamedDeclInterface } from "./boostest_output/boostestExportNamedDeclInterface";
import { boostestAnoMixInterface } from "./boostest_output/boostestAnoMixInterface";
import { boostestMixCompTSAlias } from "./boostest_output/boostestMixCompTSAlias";
import { boostestMixInterfaceFirst } from "./boostest_output/boostestMixInterfaceFirst";
import { boostestMixInterfaceSecond } from "./boostest_output/boostestMixInterfaceSecond";
import { boostestMixInterfaceFirst2 } from "./boostest_output/boostestMixInterfaceFirst2";
import { boostestMixInterfaceSecond2 } from "./boostest_output/boostestMixInterfaceSecond2";
import { boostestMixTSAliasFirst } from "./boostest_output/boostestMixTSAliasFirst";
import { boostestMixTSAliasSecond } from "./boostest_output/boostestMixTSAliasSecond";
import { boostestMixTSAliasFirst2 } from "./boostest_output/boostestMixTSAliasFirst2";
import { boostestMixTSAliasSecond2 } from "./boostest_output/boostestMixTSAliasSecond2";
import { boostestMixClassFirst } from "./boostest_output/boostestMixClassFirst";
import { boostestMixClassSecond } from "./boostest_output/boostestMixClassSecond";
import { boostestMixClassFirst2 } from "./boostest_output/boostestMixClassFirst2";
import { boostestMixClassSecond2 } from "./boostest_output/boostestMixClassSecond2";
import { boostestAccessorClass } from "./boostest_output/boostestAccessorClass";
import { boostestAnoExportNamedDeclClass } from "./boostest_output/boostestAnoExportNamedDeclClass";

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
    boostestAnoExportDefaultClass<AnoExportDefaultClass>(),
  );

  runSnapshotTest(
    "ExportDefaultClass",
    boostestExportDefaultClass<ExportDefaultClass>(),
  );

  runSnapshotTest(
    "ExportDefaultClassWithDecl",
    boostestExportDefaultClassWithDecl<ExportDefaultClassWithDecl>(),
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
    boostestAnoExportNamedDeclClass<AnoExportNamedDeclClass>(),
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

  runSnapshotTest("MixClassFirst", boostestMixClassFirst<MixClassFirst>());
  runSnapshotTest("MixClassSecond", boostestMixClassSecond<MixClassSecond>());

  runSnapshotTest("MixClassFirst2", boostestMixClassFirst2<MixClassFirst2>());
  runSnapshotTest(
    "MixClassSecond2",
    boostestMixClassSecond2<MixClassSecond2>(),
  );

  runSnapshotTest("AccessorClass", boostestAccessorClass<AccessorClass>());
});
