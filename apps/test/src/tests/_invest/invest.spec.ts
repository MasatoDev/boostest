import { LiteralTypeAlias } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { boostestInvest } from "./boostest_output/boostestInvest";
import { z } from "zod";

const User = z.object({
  username: z.string(),
});

// User.parse({ username: "Ludwig" });

// extract the inferred type
type User = z.infer<typeof User>;
// { username: string }

// TODO:
describe("Invest Tests", () => {
  // runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());
  runSnapshotTest("Invest zod", boostestInvestZod<User>());
});
