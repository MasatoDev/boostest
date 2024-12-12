import { runSnapshotTest } from "../utils";

/**
 *
 *
 * Union type
 *
 *
 */
import {
  TSAliasMixUnionObjType,
  TSAliasMixUnionType,
  TSAliasStringUnionType,
  TSInterfaceMixUnionType,
  TSInterfaceStringUnionType,
} from "../../types/ts_types/union";
// import { boostestTSAliasMixUnionType } from "./boostest_output/boostestTSAliasMixUnionType";
// import { boostestTSAliasStringUnionType } from "./boostest_output/boostestTSAliasStringUnionType";
// import { boostestTSInterfaceMixUnionType } from "./boostest_output/boostestTSInterfaceMixUnionType";
// import { boostestTSInterfaceStringUnionType } from "./boostest_output/boostestTSInterfaceStringUnionType";
// import { boostestTSAliasMixUnionObjType } from "./boostest_output/boostestTSAliasMixUnionObjType";
import { BuiltIn } from "@/ts_types/built_in_class";
import { boostestTSAliasBuiltInType } from "./boostest_output/boostestTSAliasBuiltInType";

describe("BuiltIn Tests", () => {
  runSnapshotTest("type alias BuiltIn", boostestTSAliasBuiltInType<BuiltIn>());
});
