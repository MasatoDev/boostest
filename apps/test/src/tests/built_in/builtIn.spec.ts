import { runSnapshotTest } from "../utils";
import {
  BuiltInClass,
  BuiltInInterface,
  BuiltInType,
} from "@/ts_types/built_in_class";
import { boostestTSAliasBuiltInType } from "./boostest_output/boostestTSAliasBuiltInType";
import { boostestInterfaceBuiltInType } from "./boostest_output/boostestInterfaceBuiltInType";
import { boostestClassBuiltInType } from "./boostest_output/boostestClassBuiltInType";

describe("BuiltIn Tests", () => {
  runSnapshotTest(
    "type alias BuiltIn",
    notoostestTSAliasBuiltInType<BuiltInType>(),
  );
  // runSnapshotTest(
  //   "interface BuiltIn",
  //   boostestInterfaceBuiltInType<BuiltInInterface>(),
  // );
  // runSnapshotTest("class BuiltIn", boostestClassBuiltInType<BuiltInClass>());
});
