import { runSnapshotTest } from "../utils";
import {
  BuiltInClass,
  BuiltInInterface,
  BuiltInType,
} from "@/ts_types/built_in_class";
import { boostestInterfaceBuiltInType } from "./boostest_output/boostestInterfaceBuiltInType";
import { boostestClassBuiltInType } from "./boostest_output/boostestClassBuiltInType";
import { boostestTSAliasBuiltInType } from "./boostest_output/boostestTSAliasBuiltInType";

describe("BuiltIn Tests", () => {
  runSnapshotTest(
    "type alias BuiltIn",
    boostestTSAliasBuiltInType<BuiltInType>(),
  );
  runSnapshotTest(
    "interface BuiltIn",
    boostestInterfaceBuiltInType<BuiltInInterface>(),
  );
  runSnapshotTest("class BuiltIn", boostestClassBuiltInType<BuiltInClass>());
});
