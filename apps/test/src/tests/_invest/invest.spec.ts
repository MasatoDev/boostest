import { RefTypeNamespace, LiteralTypeAlias } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { boostestInvest } from "./boostest_output/boostestInvest";
import { boostestNamespace } from "./boostest_output/boostestNamespace";

// TODO:
describe("Invest Tests", () => {
  runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());
  // runSnapshotTest(
  //   "Namespace",
  //   boostestNamespace<RefTypeNamespace.RefTypeAlias>(),
  // );
});
