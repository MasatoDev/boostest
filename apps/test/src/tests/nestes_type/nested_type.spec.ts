import { runSnapshotTest } from "../utils";
import { NestedType, NestedInterface } from "@/ts_types/nested";
import { NestedPropClass } from "../../types/nested_prop_class";

import {
  boostestNestedType,
  boostestNestedInterface,
  boostestNestedPropClass,
} from "./nested_type.spec_test_data";

describe("Nested Type Tests", () => {
  runSnapshotTest("NestedType", boostestNestedType<NestedType>());
  runSnapshotTest(
    "NestedInterface",
    boostestNestedInterface<NestedInterface>(),
  );
  runSnapshotTest(
    "NestedPropClass",
    boostestNestedPropClass<typeof NestedPropClass>(NestedPropClass),
  );
});
