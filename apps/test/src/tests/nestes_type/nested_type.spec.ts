import { runSnapshotTest } from "../utils";
import { NestedType, NestedInterface } from "@/ts_types/nested";
import { NestedPropClass } from "../../types/nested_prop_class";
import { boostestNestedType } from "./boostest_output/boostestNestedType";
import { boostestNestedInterface } from "./boostest_output/boostestNestedInterface";
import { boostestNestedPropClass } from "./boostest_output/boostestNestedPropClass";

describe("Nested Type Tests", () => {
  runSnapshotTest("NestedType", boostestNestedType<NestedType>());
  runSnapshotTest(
    "NestedInterface",
    boostestNestedInterface<NestedInterface>(),
  );
  runSnapshotTest(
    "NestedPropClass",
    boostestNestedPropClass<NestedPropClass>(),
  );
});
