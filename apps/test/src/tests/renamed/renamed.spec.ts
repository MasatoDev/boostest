import { runSnapshotTest } from "../utils";
import {
  boostestRenamedNestedPropClass,
  boostestRenamedComplexChipsType,
} from "./renamed.spec_test_data";

import {
  RenamedNestedPropClass,
  RenamedComplexChipsType,
} from "../../types/export_rename";

describe("Rename Tests", () => {
  runSnapshotTest(
    "RenamedNestedPropClass",
    boostestRenamedNestedPropClass<typeof RenamedNestedPropClass>(
      RenamedNestedPropClass,
    ),
  );

  runSnapshotTest(
    "RenamedComplexChipsType",
    boostestRenamedComplexChipsType<RenamedComplexChipsType>(),
  );
});
