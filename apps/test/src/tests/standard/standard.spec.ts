import { runSnapshotTest } from "../utils";
import {
  boostestLiteralAliasType,
  boostestLiteralInterfaceType,
  boostestLiteralTypeClass,
} from "./standard.spec_test_data";

import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "../../types/ts_types/literal";

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
  boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass),
);
