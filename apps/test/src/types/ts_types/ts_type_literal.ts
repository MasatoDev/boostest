export interface UseTSTypeLiteralInterface {
  literalString: TsTypeLiteralString;
  literalLiteralString: TsTypeLiteralLiteralTypeString;
  literalStringUnion: TsLiteralTypeStringUnionType;
  literalNumber: TsTypeLiteralNumber;
  literalLiteralNumber: TsTypeLiteralLiteralNumberType;
  literalNumberUnion: TsLiteralNumberUnionType;
  literalBoolean: TsTypeLiteralBoolean;
  literalLiteralBoolean: TsTypeLiteralLiteralBooleanType;
  literalBooleanUnion: TsLiteralBooleanUnionType;
  literalNull: TsTypeLiteralNull;
  literalUndefined: TsTypeLiteralUndefined;
  literalArray: TsTypeLiteralArray;
  literalLiteralArray: TsTypeLiteralLiteralArrayType;
  literalArrayUnion: TsLiteralArrayUnionType;
  literalObject: TsTypeLiteralObject;
  literalLiteralObject: TsTypeLiteralLiteralObjectType;
  literalObjectUnion: TsLiteralObjectUnionType;
  literalFunction: TsTypeLiteralFunction;
  literalLiteralFunction: TsTypeLiteralLiteralFunctionType;
  literalFunctionUnion: TsLiteralFunctionUnionType;
  literalBigInt: TsTypeLiteralBigInt;
  literalLiteralBigInt: TsTypeLiteralLiteralBigIntType;
  literalBigIntUnion: TsLiteralBigIntUnionType;
  literalSymbol: TsTypeLiteralSymbol;
  // literalLiteralSymbol: TsTypeLiteralLiteralSymbolType;
}

export type UseTSTypeLiteralAlias = {
  literalString: TsTypeLiteralString;
  literalLiteralString: TsTypeLiteralLiteralTypeString;
  literalStringUnion: TsLiteralTypeStringUnionType;
  literalNumber: TsTypeLiteralNumber;
  literalLiteralNumber: TsTypeLiteralLiteralNumberType;
  literalNumberUnion: TsLiteralNumberUnionType;
  literalBoolean: TsTypeLiteralBoolean;
  literalLiteralBoolean: TsTypeLiteralLiteralBooleanType;
  literalBooleanUnion: TsLiteralBooleanUnionType;
  literalNull: TsTypeLiteralNull;
  literalUndefined: TsTypeLiteralUndefined;
  literalArray: TsTypeLiteralArray;
  literalLiteralArray: TsTypeLiteralLiteralArrayType;
  literalArrayUnion: TsLiteralArrayUnionType;
  literalObject: TsTypeLiteralObject;
  literalLiteralObject: TsTypeLiteralLiteralObjectType;
  literalObjectUnion: TsLiteralObjectUnionType;
  literalFunction: TsTypeLiteralFunction;
  literalLiteralFunction: TsTypeLiteralLiteralFunctionType;
  literalFunctionUnion: TsLiteralFunctionUnionType;
  literalBigInt: TsTypeLiteralBigInt;
  literalLiteralBigInt: TsTypeLiteralLiteralBigIntType;
  literalBigIntUnion: TsLiteralBigIntUnionType;
  literalSymbol: TsTypeLiteralSymbol;
  // literalLiteralSymbol: TsTypeLiteralLiteralSymbolType;
};

// String Literal Types
export type TsTypeLiteralString = string; // General string type, can hold any string value
export type TsTypeLiteralLiteralTypeString = "string"; // Specific string literal type, can only hold the value 'string'
export type TsLiteralTypeStringUnionType = "A" | "B" | "C"; // Union of specific string literals, can hold 'A', 'B', or 'C'

// Number Literal Types
export type TsTypeLiteralNumber = number; // General number type, can hold any number value
export type TsTypeLiteralLiteralNumberType = 42; // Specific number literal type, can only hold the value 42
export type TsLiteralNumberUnionType = 1 | 2 | 3; // Union of specific number literals, can hold 1, 2, or 3

// Boolean Literal Types
export type TsTypeLiteralBoolean = boolean; // General boolean type, can hold true or false
export type TsTypeLiteralLiteralBooleanType = true; // Specific boolean literal type, can only hold the value true
export type TsLiteralBooleanUnionType = true | false; // Union of boolean literals, can hold true or false

// Null Literal Type
export type TsTypeLiteralNull = null; // Specific type for the null value

// Undefined Literal Type
export type TsTypeLiteralUndefined = undefined; // Specific type for the undefined value

// Array Literal Types
export type TsTypeLiteralArray = any[]; // General array type, can hold any array
export type TsTypeLiteralLiteralArrayType = [1, 2, 3]; // Specific array literal type, can only hold the array [1, 2, 3]
export type TsLiteralArrayUnionType = [] | [1] | [1, 2]; // Union of specific array literals, can hold [], [1], or [1, 2]

// Object Literal Types
export type TsTypeLiteralObject = object; // General object type, can hold any object
export type TsTypeLiteralLiteralObjectType = { name: string; age: number }; // Specific object literal type, can only hold an object with name (string) and age (number) properties
export type TsLiteralObjectUnionType =
  | { type: "A" }
  | { type: "B"; value: number }; // Union of specific object literals, can hold either { type: 'A' } or { type: 'B', value: number }

// Function Literal Types
export type TsTypeLiteralFunction = Function; // General function type, can hold any function
export type TsTypeLiteralLiteralFunctionType = () => void; // Specific function literal type, can only hold a function that takes no arguments and returns void
export type TsLiteralFunctionUnionType =
  | ((x: number) => number)
  | ((x: string) => string); // Union of specific function literals, can hold a function that takes a number and returns a number, or a function that takes a string and returns a string

// Other Literal Types
export type TsTypeLiteralBigInt = bigint; // General bigint type, can hold any bigint value
export type TsTypeLiteralLiteralBigIntType = 123n; // Specific bigint literal type, can only hold the value 123n
export type TsLiteralBigIntUnionType = 1n | 2n | 3n; // Union of specific bigint literals, can hold 1n, 2n, or 3n

// Symbol Literal Type
const mySymbol = Symbol("mySymbol");
export type TsTypeLiteralSymbol = symbol; // General symbol type, can hold any symbol value
export type TsTypeLiteralLiteralSymbolType = typeof mySymbol; // Specific symbol literal type, can only hold the symbol mySymbol
