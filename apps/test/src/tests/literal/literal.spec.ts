import { runSnapshotTest, failedTest } from "../utils";
import {
  // string
  TsTypeLiteralString,
  TsTypeLiteralLiteralTypeString,
  TsLiteralTypeStringUnionType,

  // number
  TsTypeLiteralNumber,
  TsTypeLiteralLiteralNumberType,
  TsLiteralNumberUnionType,

  // boolean
  TsTypeLiteralBoolean,
  TsTypeLiteralLiteralBooleanType,
  TsLiteralBooleanUnionType,

  // null
  TsTypeLiteralNull,

  // undefined
  TsTypeLiteralUndefined,

  // Array
  TsTypeLiteralArray,
  TsTypeLiteralLiteralArrayType,
  TsLiteralArrayUnionType,

  // Object
  TsTypeLiteralObject,
  TsTypeLiteralLiteralObjectType,
  TsLiteralObjectUnionType,

  // Function
  TsTypeLiteralFunction,
  TsTypeLiteralLiteralFunctionType,
  TsLiteralFunctionUnionType,

  // Symbol
  TsTypeLiteralSymbol,
  TsTypeLiteralLiteralSymbolType,

  // use
  UseTSTypeLiteralAlias,
  UseTSTypeLiteralInterface,
} from "@/ts_types/ts_type_literal";
import { boostestTsTypeLiteralString } from "./boostest_output/boostestTsTypeLiteralString";
import { boostestTsTypeLiteralLiteralTypeString } from "./boostest_output/boostestTsTypeLiteralLiteralTypeString";
import { boostestTsLiteralTypeStringUnionType } from "./boostest_output/boostestTsLiteralTypeStringUnionType";
import { boostestTsTypeLiteralNumber } from "./boostest_output/boostestTsTypeLiteralNumber";
import { boostestTsTypeLiteralLiteralNumberType } from "./boostest_output/boostestTsTypeLiteralLiteralNumberType";
import { boostestTsLiteralNumberUnionType } from "./boostest_output/boostestTsLiteralNumberUnionType";
import { boostestTsTypeLiteralBoolean } from "./boostest_output/boostestTsTypeLiteralBoolean";
import { boostestTsTypeLiteralLiteralBooleanType } from "./boostest_output/boostestTsTypeLiteralLiteralBooleanType";
import { boostestTsLiteralBooleanUnionType } from "./boostest_output/boostestTsLiteralBooleanUnionType";
import { boostestTsTypeLiteralNull } from "./boostest_output/boostestTsTypeLiteralNull";
import { boostestTsTypeLiteralUndefined } from "./boostest_output/boostestTsTypeLiteralUndefined";
import { boostestUseTSTypeLiteralInterface } from "./boostest_output/boostestUseTSTypeLiteralInterface";
import { boostestUseTSTypeLiteralAlias } from "./boostest_output/boostestUseTSTypeLiteralAlias";
import { boostestTsTypeLiteralSymbol } from "./boostest_output/boostestTsTypeLiteralSymbol";
import { boostestTsLiteralFunctionUnionType } from "./boostest_output/boostestTsLiteralFunctionUnionType";
import { boostestTsTypeLiteralLiteralFunctionType } from "./boostest_output/boostestTsTypeLiteralLiteralFunctionType";
import { boostestTsTypeLiteralFunction } from "./boostest_output/boostestTsTypeLiteralFunction";
import { boostestTsLiteralObjectUnionType } from "./boostest_output/boostestTsLiteralObjectUnionType";
import { boostestTsTypeLiteralLiteralObjectType } from "./boostest_output/boostestTsTypeLiteralLiteralObjectType";
import { boostestTsTypeLiteralObject } from "./boostest_output/boostestTsTypeLiteralObject";
import { boostestTsLiteralArrayUnionType } from "./boostest_output/boostestTsLiteralArrayUnionType";
import { boostestTsTypeLiteralLiteralArrayType } from "./boostest_output/boostestTsTypeLiteralLiteralArrayType";
import { boostestTsTypeLiteralArray } from "./boostest_output/boostestTsTypeLiteralArray";

describe("Literal Type Tests", () => {
  runSnapshotTest(
    "TsTypeLiteralString",
    boostestTsTypeLiteralString<TsTypeLiteralString>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralTypeString",
    boostestTsTypeLiteralLiteralTypeString<TsTypeLiteralLiteralTypeString>(),
  );
  runSnapshotTest(
    "TsLiteralTypeStringUnionType",
    boostestTsLiteralTypeStringUnionType<TsLiteralTypeStringUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralNumber",
    boostestTsTypeLiteralNumber<TsTypeLiteralNumber>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralNumberType",
    boostestTsTypeLiteralLiteralNumberType<TsTypeLiteralLiteralNumberType>(),
  );
  runSnapshotTest(
    "TsLiteralNumberUnionType",
    boostestTsLiteralNumberUnionType<TsLiteralNumberUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralBoolean",
    boostestTsTypeLiteralBoolean<TsTypeLiteralBoolean>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralBooleanType",
    boostestTsTypeLiteralLiteralBooleanType<TsTypeLiteralLiteralBooleanType>(),
  );
  runSnapshotTest(
    "TsLiteralBooleanUnionType",
    boostestTsLiteralBooleanUnionType<TsLiteralBooleanUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralNull",
    boostestTsTypeLiteralNull<TsTypeLiteralNull>(),
  );
  runSnapshotTest(
    "TsTypeLiteralUndefined",
    boostestTsTypeLiteralUndefined<TsTypeLiteralUndefined>(),
  );
  runSnapshotTest(
    "TsTypeLiteralArray",
    boostestTsTypeLiteralArray<TsTypeLiteralArray>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralArrayType",
    boostestTsTypeLiteralLiteralArrayType<TsTypeLiteralLiteralArrayType>(),
  );
  runSnapshotTest(
    "TsLiteralArrayUnionType",
    boostestTsLiteralArrayUnionType<TsLiteralArrayUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralObject",
    boostestTsTypeLiteralObject<TsTypeLiteralObject>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralObjectType",
    boostestTsTypeLiteralLiteralObjectType<TsTypeLiteralLiteralObjectType>(),
  );
  runSnapshotTest(
    "TsLiteralObjectUnionType",
    boostestTsLiteralObjectUnionType<TsLiteralObjectUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralFunction",
    boostestTsTypeLiteralFunction<TsTypeLiteralFunction>(),
  );
  runSnapshotTest(
    "TsTypeLiteralLiteralFunctionType",
    boostestTsTypeLiteralLiteralFunctionType<TsTypeLiteralLiteralFunctionType>(),
  );
  runSnapshotTest(
    "TsLiteralFunctionUnionType",
    boostestTsLiteralFunctionUnionType<TsLiteralFunctionUnionType>(),
  );
  runSnapshotTest(
    "TsTypeLiteralSymbol",
    boostestTsTypeLiteralSymbol<TsTypeLiteralSymbol>(),
  );
  runSnapshotTest(
    "TsTypeLiteralAlias",
    boostestUseTSTypeLiteralAlias<UseTSTypeLiteralAlias>(),
  );
  runSnapshotTest(
    "TsTypeLiteralInterface",
    boostestUseTSTypeLiteralInterface<UseTSTypeLiteralInterface>(),
  );

  // failedTest("TsTypeLiteralLiteralSymbol");
});
