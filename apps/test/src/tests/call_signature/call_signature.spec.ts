import { runSnapshotTest } from "../utils";
import {
  boostestCallSignature,
  boostestMathOperations,
  boostestSingleCallSignature,
  boostestCallSignatureInterface,
} from "./call_signature.spec_test_data";

import {
  CallSignature,
  MathOperations,
  SingleCallSignature,
  CallSignatureInterface,
} from "../../types/ts_types/call_signature";

describe("Call Signature Tests", () => {
  runSnapshotTest("CallSignature", boostestCallSignature<CallSignature>());
  runSnapshotTest(
    "CallSignatureInterface",
    boostestCallSignatureInterface<CallSignatureInterface>(),
  ); // FIXME: CallSignatureInterface
  runSnapshotTest(
    "SingleCallSignature",
    boostestSingleCallSignature<SingleCallSignature>(),
  );
  runSnapshotTest("MathOperations", boostestMathOperations<MathOperations>());
});
