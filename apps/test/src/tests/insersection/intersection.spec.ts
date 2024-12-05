import { runSnapshotTest } from "../utils";

import {
  IntersectionTypeAlias,
  IntersectionInterface,
  IntersectionClass,
} from "../../types/ts_types/intersection";
import { boostestIntersectionTypeAlias } from "./boostest_output/boostestIntersectionTypeAlias";
import { boostestIntersectionInterface } from "./boostest_output/boostestIntersectionInterface";
import { boostestIntersectionClass } from "./boostest_output/boostestIntersectionClass";

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
    boostestIntersectionClass<IntersectionClass>(),
  );
});
