import { runSnapshotTest } from "../utils";
import {
  boostestTSAliasMixUnionObjType,
  boostestTSAliasMixUnionType,
  boostestTSAliasStringUnionType,
  boostestTSInterfaceMixUnionType,
  boostestTSInterfaceStringUnionType,
} from "./union.spec_test_data";

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
