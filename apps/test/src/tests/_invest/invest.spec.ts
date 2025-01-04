import { LiteralTypeAlias } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { boostestInvest } from "./boostest_output/boostestInvest";
import { extendApi } from "@anatine/zod-openapi";
import { UserResponseSchema } from "@/ts_types";

// TODO:
describe("Invest Tests", () => {
  // runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());
  runSnapshotTest("Invest", boostestInvest<ReturnType<typeof extendApi>>());
});
