import { runSnapshotTest } from "../utils";
import {
  boostestIntersectionTypeAlias,
  boostestIntersectionInterface,
  boostestIntersectionClass,
} from "./intersection.spec_test_data";

import {
  IntersectionTypeAlias,
  IntersectionInterface,
  IntersectionClass,
} from "../../types/ts_types/intersection";

describe("Intersection Tests", () => {
  runSnapshotTest(
    "IntersectionTypeAlias",
    boostestIntersectionTypeAlias<IntersectionTypeAlias>(),
  );
  runSnapshotTest(
    "IntersectionInterface",
    boostestIntersectionInterface<IntersectionInterface>(),
  );
  runSnapshotTest(
    "IntersectionClass",
    boostestIntersectionClass<typeof IntersectionClass>(IntersectionClass),
  );
});
