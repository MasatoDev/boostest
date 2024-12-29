import { runSnapshotTest } from "../utils";

import { LiteralTypeAlias } from "@/export_main_file";
import { LiteralTypeAlias as DLiteralTypeAlias } from "@/export_d_main_file";
import type { LiteralTypeAlias as FileNameLiteralTypeAlias } from "@/export_filename_main_file/literal";
import { boostestIndexExort } from "./boostest_output/boostestIndexExort";
import { boostestDLiteralTypeAlias } from "./boostest_output/boostestDLiteralTypeAlias";
import { boostestFileNameLiteralTypeAlias } from "./boostest_output/boostestFileNameLiteralTypeAlias";

describe("main file import tests", () => {
  runSnapshotTest("IndexExport", boostestIndexExort<LiteralTypeAlias>());
  runSnapshotTest(
    "DLiteralTypeAlias",
    boostestDLiteralTypeAlias<DLiteralTypeAlias>(),
  );
  runSnapshotTest(
    "FileNameLiteralTypeAlias",
    boostestFileNameLiteralTypeAlias<FileNameLiteralTypeAlias>(),
  );
});
