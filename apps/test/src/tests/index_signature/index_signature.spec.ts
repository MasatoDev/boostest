import { boostestIndexSignature } from "./index_signature.spec_test_data";
import { IndexSignature } from "../../types/ts_types/index_signature";
import { runSnapshotTest } from "../utils";

describe("Index signature Tests", () => {
  runSnapshotTest("IndexSignature", boostestIndexSignature<IndexSignature>());
});
