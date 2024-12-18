import { runSnapshotTest } from "../utils";

import { TsTypeLiteralLiteralObjectType } from "@/ts_types/ts_type_literal";
import { boostestDirectPromise } from "./boostest_output/boostestDirectPromise";
import { RefType, RefInterface } from "@/ts_types/utils";
import { Hoge } from "@/ts_types/literal";
import { boostestTuple } from "./boostest_output/boostestTuple";
import { boostestString } from "./boostest_output/boostestString";
import { boostestBoolean } from "./boostest_output/boostestBoolean";
import { boostestNumber } from "./boostest_output/boostestNumber";
import { boostestUnion } from "./boostest_output/boostestUnion";
import { boostestReference } from "./boostest_output/boostestReference";
import { boostestArray } from "./boostest_output/boostestArray";
import { boostestFunction } from "./boostest_output/boostestFunction";
import { boostestVoid } from "./boostest_output/boostestVoid";
import { boostestObject } from "./boostest_output/boostestObject";
import { boostestUnknown } from "./boostest_output/boostestUnknown";
import { boostestAny } from "./boostest_output/boostestAny";
import { boostestUndefined } from "./boostest_output/boostestUndefined";
import { boostestNull } from "./boostest_output/boostestNull";
import { boostestBigInt } from "./boostest_output/boostestBigInt";
import { boostestConditional } from "./boostest_output/boostestConditional";
import { boostestSymbol } from "./boostest_output/boostestSymbol";
import { boostestNamedTuple } from "./boostest_output/boostestNamedTuple";
import { boostestIntersection } from "./boostest_output/boostestIntersection";
import { boostestKeyof } from "./boostest_output/boostestKeyof";
import { boostestIndexAccessor } from "./boostest_output/boostestIndexAccessor";
import { boostestConstructor } from "./boostest_output/boostestConstructor";
import { boostestClass } from "./boostest_output/boostestClass";

describe("not ref types(direct) Tests", () => {
  runSnapshotTest(
    "Direct Promise",
    boostestDirectPromise<Promise<TsTypeLiteralLiteralObjectType>>(),
  );
  runSnapshotTest("Direct boolean", boostestBoolean<boolean>());
  runSnapshotTest("Direct string", boostestString<string>());
  runSnapshotTest("Direct number", boostestNumber<number>());
  runSnapshotTest("Direct bigint", boostestBigInt<bigint>());
  runSnapshotTest("Direct null", boostestNull<null>());
  runSnapshotTest("Direct undefined", boostestUndefined<undefined>());
  runSnapshotTest("Direct any", boostestAny<any>());
  runSnapshotTest("Direct unknown", boostestUnknown<unknown>());
  runSnapshotTest("Direct object", boostestObject<object>());
  runSnapshotTest("Direct void", boostestVoid<void>());
  runSnapshotTest(
    "Direct function",
    boostestFunction<(arg: RefType) => RefInterface>(),
  );
  runSnapshotTest("Direct array", boostestArray<string[]>());
  runSnapshotTest("Direct reference", boostestReference<RefType>());
  runSnapshotTest("Direct union", boostestUnion<string | number>());
  runSnapshotTest(
    "Direct conditional",
    boostestConditional<string extends number ? true : false>(),
  );
  runSnapshotTest("Direct symbol", boostestSymbol<symbol>());
  runSnapshotTest(
    "Direct tuple",
    boostestTuple<[string, number, any, RefType, RefInterface]>(),
  );
  runSnapshotTest(
    "Direct named tuple",
    boostestNamedTuple<
      [name: string, ver: number, ref: RefType, refInterface: RefInterface]
    >(),
  );
  runSnapshotTest(
    "Direct intersection",
    boostestIntersection<RefType & { name: string; age: number }>(),
  );
  runSnapshotTest("Direct keyof", boostestKeyof<keyof RefType>());
  runSnapshotTest(
    "Direct index accessor",
    boostestIndexAccessor<RefType["name"]>(),
  );
  runSnapshotTest(
    "Direct constructor",
    boostestConstructor<abstract new (...args: any) => Hoge>(),
  );
  runSnapshotTest("Direct class", boostestClass<typeof Hoge>());
});
