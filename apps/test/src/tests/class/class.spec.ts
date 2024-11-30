import { runSnapshotTest } from "../utils";
import { ArgObjClass } from "../../types/pattern/arg_obj_class";
import { ArgObjClass2 } from "../../types/pattern/arg_obj_class2";
import {
  ConstructorSignature,
  InnerConstructorSignature,
  ConstructorSignatureInterface,
} from "../../types/ts_types/constructor_signature";
import { boostestArgObjClass } from "./boostest_output/boostestArgObjClass";
import { boostestArgObjClass2 } from "./boostest_output/boostestArgObjClass2";
import { boostestConstructorSignature } from "./boostest_output/boostestConstructorSignature";
import { boostestInnerConstructorSignature } from "./boostest_output/boostestInnerConstructorSignature";
import { boostestConstructorSignatureInterface } from "./boostest_output/boostestConstructorSignatureInterface";
import { boostestCallSignatureInterface } from "../call_signature/boostest_output/boostestCallSignatureInterface";
import { CallSignatureInterface } from "@/ts_types/call_signature";

describe("Class Tests", () => {
  runSnapshotTest("ArgObjClass", boostestArgObjClass<ArgObjClass>());
  runSnapshotTest("ArgObjClass2", boostestArgObjClass2<ArgObjClass2>());

  // FIXME:CallSignatureInterface
  runSnapshotTest(
    "CallSignatureInterface",
    boostestCallSignatureInterface<CallSignatureInterface>(),
  );
  runSnapshotTest(
    "ConstructorSignature",
    boostestConstructorSignature<ConstructorSignature>(),
  );
  runSnapshotTest(
    "InnerConstructorSignature",
    boostestInnerConstructorSignature<InnerConstructorSignature>(),
  );
  runSnapshotTest(
    "ConstructorSignatureInterface",
    boostestConstructorSignatureInterface<ConstructorSignatureInterface>(),
  );
});
