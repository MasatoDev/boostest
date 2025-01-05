import { RefTypeNamespace, LiteralTypeAlias } from "@/ts_types";
import exportAllModule from "@/export_all";
import { runSnapshotTest } from "../utils";
import { boostestExportAllFileAsModule } from "./boostest_output/boostestExportAllFileAsModule";

// TODO:
describe("Invest Tests", () => {
  // runSnapshotTest("Invest", boostestInvest<LiteralTypeAlias>());
  // runSnapshotTest(
  //   "Namespace",
  //   boostestNamespace<RefTypeNamespace.RefTypeAlias>(),
  // );
  runSnapshotTest(
    "Exoprt all file as module",
    boostestExportAllFileAsModule<exportAllModule.SimpleType>(),
  );
});
