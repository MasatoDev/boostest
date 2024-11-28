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
import { boostestTSAliasMixUnionType } from "./boostest_output/boostestTSAliasMixUnionType";
import { boostestTSAliasStringUnionType } from "./boostest_output/boostestTSAliasStringUnionType";
import { boostestTSInterfaceMixUnionType } from "./boostest_output/boostestTSInterfaceMixUnionType";
import { boostestTSInterfaceStringUnionType } from "./boostest_output/boostestTSInterfaceStringUnionType";
import { boostestTSAliasMixUnionObjType } from "./boostest_output/boostestTSAliasMixUnionObjType";

describe("Union Tests", () => {
  runSnapshotTest(
    "TSAliasMixUnionType",
    boostestTSAliasMixUnionType<TSAliasMixUnionType>(),
  );

  runSnapshotTest(
    "TSAliasStringUnionType",
    boostestTSAliasStringUnionType<TSAliasStringUnionType>(),
  );

  runSnapshotTest(
    "TSInterfaceMixUnionType",
    boostestTSInterfaceMixUnionType<TSInterfaceMixUnionType>({ type: "A" }),
  );

  runSnapshotTest(
    "TSInterfaceStringUnionType",
    boostestTSInterfaceStringUnionType<TSInterfaceStringUnionType>({
      type: "A",
    }),
  );

  runSnapshotTest(
    "TSAliasMixUnionObjType",
    boostestTSAliasMixUnionObjType<TSAliasMixUnionObjType>({
      ref_type: "A",
      type: "A",
    }),
  );
});
