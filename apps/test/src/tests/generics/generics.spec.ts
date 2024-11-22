import { runSnapshotTest } from "../utils";
import {
  boostestGenericsAliasType,
  boostestGeneric,
  boostestGenericsInterfaceType,
  boostestGenericsTypeClass,
} from "./generics.spec_test_data";

import {
  InngerPropGeneric,
  GenericsTypeAlias,
  GenericsInterface,
  GenericsClass,
} from "../../types/ts_types/generics";
import { RefType } from "../../types/ts_types/utils";

describe("Generics Tests", () => {
  runSnapshotTest(
    "GenericsTypeAlias",
    boostestGenericsAliasType<GenericsTypeAlias>(),
  );
  // runSnapshotTest("Generic", boostestGeneric<InngerPropGeneric<RefType>>());
  // runSnapshotTest(
  //   "GenericsInterface",
  //   boostestGenericsInterfaceType<GenericsInterface>(),
  // );
  // runSnapshotTest(
  //   "GenericsClass",
  //   boostestGenericsTypeClass<typeof GenericsClass>(GenericsClass),
  // );
});
