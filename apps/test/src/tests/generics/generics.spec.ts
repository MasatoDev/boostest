import { runSnapshotTest } from "../utils";

import {
  InngerPropGeneric,
  GenericsTypeAlias,
  GenericsInterface,
  GenericsClass,
} from "../../types/ts_types/generics";
import { RefType } from "../../types/ts_types/utils";
import { boostestGenericsAliasType } from "./boostest_output/boostestGenericsAliasType";
import { boostestGeneric } from "./boostest_output/boostestGeneric";
import { boostestGenericsInterfaceType } from "./boostest_output/boostestGenericsInterfaceType";
import { boostestGenericsTypeClass } from "./boostest_output/boostestGenericsTypeClass";

describe("Generics Tests", () => {
  runSnapshotTest(
    "GenericsTypeAlias",
    boostestGenericsAliasType<GenericsTypeAlias>(),
  );
  runSnapshotTest("Generic", boostestGeneric<InngerPropGeneric<RefType>>());
  runSnapshotTest(
    "GenericsInterface",
    boostestGenericsInterfaceType<GenericsInterface>(),
  );
  runSnapshotTest("GenericsClass", boostestGenericsTypeClass<GenericsClass>());
});
