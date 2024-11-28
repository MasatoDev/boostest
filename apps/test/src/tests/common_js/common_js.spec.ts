import { runSnapshotTest } from "../utils";

import Hoge from "../../types/common";
import { boostestCommonCjs } from "./boostest_output/boostestCommonCjs";

describe("Commonjs Tests", () => {
  runSnapshotTest("CommonCjs", boostestCommonCjs<Hoge>());
});
