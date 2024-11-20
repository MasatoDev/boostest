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

import {
  boostestTsTypeLiteralString,
  boostestTsTypeLiteralLiteralTypeString,
  boostestTsLiteralTypeStringUnionType,
  boostestTsTypeLiteralNumber,
  boostestTsTypeLiteralLiteralNumberType,
  boostestTsLiteralNumberUnionType,
  boostestTsTypeLiteralBoolean,
  boostestTsTypeLiteralLiteralBooleanType,
  boostestTsLiteralBooleanUnionType,
  boostestTsTypeLiteralNull,
  boostestTsTypeLiteralUndefined,
  boostestTsTypeLiteralArray,
  boostestTsTypeLiteralLiteralArrayType,
  boostestTsLiteralArrayUnionType,
  boostestTsTypeLiteralObject,
  boostestTsTypeLiteralLiteralObjectType,
  boostestTsLiteralObjectUnionType,
  boostestTsTypeLiteralFunction,
  boostestTsTypeLiteralLiteralFunctionType,
  boostestTsLiteralFunctionUnionType,
  boostestTsTypeLiteralSymbol,
  boostestUseTSTypeLiteralAlias,
  boostestUseTSTypeLiteralInterface,
  // boostestTsTypeLiteralLiteralSymbolType,
} from "./literal.spec_test_data";

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
