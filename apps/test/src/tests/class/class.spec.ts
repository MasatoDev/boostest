import { runSnapshotTest } from "../utils";
import { ArgObjClass } from "../../types/pattern/arg_obj_class";
import { ArgObjClass2 } from "../../types/pattern/arg_obj_class2";
import {
  ConstructorSignature,
  InnerConstructorSignature,
  ConstructorSignatureInterface,
} from "../../types/ts_types/constructor_signature";

import {
  boostestArgObjClass,
  boostestArgObjClass2,
  // boostestCallSignatureInterface,
  boostestConstructorSignature,
  boostestInnerConstructorSignature,
  boostestConstructorSignatureInterface,
} from "./class.spec_test_data";

describe("Class Tests", () => {
  runSnapshotTest(
    "ArgObjClass",
    boostestArgObjClass<typeof ArgObjClass>(ArgObjClass),
  );
  runSnapshotTest(
    "ArgObjClass2",
    boostestArgObjClass2<typeof ArgObjClass2>(ArgObjClass2),
  );

  // FIXME:CallSignatureInterface
  // runSnapshotTest(
  //   "CallSignatureInterface",
  //   boostestCallSignatureInterface<CallSignatureInterface>(),
  // );
  // FIXME: ConstructorSignature:
  runSnapshotTest(
    "ConstructorSignature",
    boostestConstructorSignature<ConstructorSignature>(),
  );
  // FIXME: InnerConstructorSignature:
  runSnapshotTest(
    "InnerConstructorSignature",
    boostestInnerConstructorSignature<InnerConstructorSignature>(),
  );
  // FIXME: ConstructorSignatureInterface:
  runSnapshotTest(
    "ConstructorSignatureInterface",
    boostestConstructorSignatureInterface<ConstructorSignatureInterface>(),
  );
});
