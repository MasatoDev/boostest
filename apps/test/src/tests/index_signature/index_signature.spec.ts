import { IndexSignature } from "../../types/ts_types/index_signature";
import { runSnapshotTest } from "../utils";
import { boostestIndexSignature } from "./boostest_output/boostestIndexSignature";

describe("Index signature Tests", () => {
  runSnapshotTest("IndexSignature", boostestIndexSignature<IndexSignature>());
});
