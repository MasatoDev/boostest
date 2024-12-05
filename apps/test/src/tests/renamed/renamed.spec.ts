import { runSnapshotTest } from "../utils";

import {
  // RenamedNestedPropClass,
  RenamedComplexChipsType,
} from "../../types/export_rename";
// import { boostestRenamedNestedPropClass } from "./boostest_output/boostestRenamedNestedPropClass";
import { boostestRenamedComplexChipsType } from "./boostest_output/boostestRenamedComplexChipsType";

describe("Rename Tests", () => {
  // runSnapshotTest(
  //   "RenamedNestedPropClass",
  //   boostestRenamedNestedPropClass<RenamedNestedPropClass>(),
  // );

  runSnapshotTest(
    "RenamedComplexChipsType",
    boostestRenamedComplexChipsType<RenamedComplexChipsType>(),
  );
});
