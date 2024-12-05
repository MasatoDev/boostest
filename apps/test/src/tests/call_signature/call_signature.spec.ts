import { runSnapshotTest } from "../utils";

import {
  CallSignature,
  MathOperations,
  SingleCallSignature,
  CallSignatureInterface,
} from "../../types/ts_types/call_signature";
import { boostestCallSignature } from "./boostest_output/boostestCallSignature";
import { boostestCallSignatureInterface } from "./boostest_output/boostestCallSignatureInterface";
import { boostestSingleCallSignature } from "./boostest_output/boostestSingleCallSignature";
import { boostestMathOperations } from "./boostest_output/boostestMathOperations";

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
