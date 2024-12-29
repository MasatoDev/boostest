import { LiteralTypeAlias } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { boostestInvest } from "./boostest_output/boostestInvest";

// TODO:
describe("Invest Tests", () => {
  runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());
});
