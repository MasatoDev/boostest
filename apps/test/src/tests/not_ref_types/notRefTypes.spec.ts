import { runSnapshotTest } from "../utils";

import { TsTypeLiteralLiteralObjectType } from "@/ts_types/ts_type_literal";
import { boostestDirectPromise } from "./boostest_output/boostestDirectPromise";

describe("Rename Tests", () => {
  runSnapshotTest(
    "Direct Promise",
    boostestDirectPromise<Promise<TsTypeLiteralLiteralObjectType>>(),
  );
});
