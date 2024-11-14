import { runSnapshotTest } from "../utils";
import { boostestCommonCjs } from "./common_js.spec_test_data";

import Hoge from "../../types/common";

describe("Commonjs Tests", () => {
  runSnapshotTest("CommonCjs", boostestCommonCjs<Hoge>());
});
