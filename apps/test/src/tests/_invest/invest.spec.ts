import { RefTypeNamespace, LiteralTypeAlias } from "@/ts_types";
import exportAllModule from "@/export_all";
import { runSnapshotTest } from "../utils";
import { boostestExportAllFileAsModule } from "./boostest_output/boostestExportAllFileAsModule";
import { boostestNamespace } from "./boostest_output/boostestNamespace";

// TODO:
describe("Invest Tests", () => {
  // runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());

  runSnapshotTest(
    "Namespace",
    boostestNamespace<RefTypeNamespace.NoneExportAliasType>(),
  );
  runSnapshotTest(
    "Exoprt all file as module",
    boostestExportAllFileAsModule<exportAllModule.SimpleType>(),
  );
});
