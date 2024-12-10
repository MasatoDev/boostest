import { runSnapshotTest } from "../utils";

import { TsTypeLiteralLiteralObjectType } from "@/ts_types/ts_type_literal";
// import { boostestRenamedNestedPropClass } from "./boostest_output/boostestRenamedNestedPropClass";
import { boostestRenamedComplexChipsType } from "./boostest_output/boostestRenamedComplexChipsType";

describe("Rename Tests", () => {
  runSnapshotTest(
    "Direct Promise",
    boostestRenamedComplexChipsType<Promise<TsTypeLiteralLiteralObjectType>>(),
  );
});
