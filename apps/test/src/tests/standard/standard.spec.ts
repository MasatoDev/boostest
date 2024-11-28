import { runSnapshotTest } from "../utils";

import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "../../types/ts_types/literal";
import { boostestLiteralAliasType } from "./boostest_output/boostestLiteralAliasType";
import { boostestLiteralInterfaceType } from "./boostest_output/boostestLiteralInterfaceType";
import { boostestLiteralTypeClass } from "./boostest_output/boostestLiteralTypeClass";

describe("Standard Tests", () => {
  runSnapshotTest(
    "LiteralTypeAlias",
    boostestLiteralAliasType<LiteralTypeAlias>(),
  );
  runSnapshotTest(
    "LiteralTypeInterface",
    boostestLiteralInterfaceType<LiteralTypeInterface>(),
  );
});
runSnapshotTest(
  "LiteralTypeClass",
  boostestLiteralTypeClass<LiteralTypeClass>(),
);
