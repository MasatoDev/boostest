import { RefType } from "@/ts_types/utils";

interface RefTypeInterface {
  name: string;
  ver: number;
}

export class Hoge {
  name: string;
  ver: number;
  constructor(name: string, ver: number) {
    this.name = name;
    this.ver = ver;
  }
}

export type LiteralTypeAlias = {
  stringLiteral: string;
  numberLiteral: number;
  bigintLiteral: bigint;
  booleanLiteral: boolean;
  nullLiteral: null;
  undefinedId: undefined;
  anyLiteral: any;
  unknownLiteral: unknown;
  // neverLiteral: never;
  objectLiteral: object;
  voidLiteral: void;
  functionLiteral: () => void;
  arrayLiteral: string[];
  referenceLiteral: RefType;
  unionType: string | number;
  conditionalType: string extends number ? true : false;

  tsLiteralString: "string";
  tsLiteralNumber: 20;
  tsBigInt: 10000000000000n;
  tsLiteralBoolean: true;
  tsNullLiteral: null;
  tsObject: {};
  tsArray: [];

  symbolLiteral: symbol;
  tsTuple: [string, number, any, RefType, RefTypeInterface];
  tsNamedTuple: [
    name: string,
    ver: number,
    ref: RefType,
    refInterface: RefTypeInterface,
  ];
  intersectionType: RefType & { name: string; age: number };
  keyof: keyof RefType;
  indexAccessor: RefType["name"];
  constructorType: abstract new (...args: any) => Hoge;
  classType: typeof Hoge;
};

export type LiteralTypeInterface = {
  stringLiteral: string;
  numberLiteral: number;
  bigintLiteral: bigint;
  booleanLiteral: boolean;
  nullLiteral: null;
  undefinedId: undefined;
  anyLiteral: any;
  unknownLiteral: unknown;
  // neverLiteral: never;
  objectLiteral: object;
  voidLiteral: void;
  functionLiteral: () => void;
  arrayLiteral: string[];
  referenceLiteral: RefType;
  unionType: string | number;
  conditionalType: string extends number ? true : false;

  tsLiteralString: "string";
  tsLiteralNumber: 20;
  tsBigInt: 10000000000000n;
  tsLiteralBoolean: true;
  tsNullLiteral: null;
  tsObject: {};
  tsArray: [];

  symbolLiteral: symbol;
  tsTuple: [string, number, any, RefType, RefTypeInterface];
  tsNamedTuple: [
    name: string,
    ver: number,
    ref: RefType,
    refInterface: RefTypeInterface,
  ];
  intersectionType: RefType & RefTypeInterface & { name: string; age: number };
  keyof: keyof RefType;
  indexAccessor: RefType["name"];
  constructorType: abstract new (...args: any) => Hoge;
  classType: typeof Hoge;
};

export class LiteralTypeClass {
  constructor(
    public stringLiteral: string,
    public numberLiteral: number,
    public bigintLiteral: bigint,
    public booleanLiteral: boolean,
    public nullLiteral: null,
    public undefinedId: undefined,
    public anyLiteral: any,
    public unknownLiteral: unknown,
    // public neverLiteral: never,
    public objectLiteral: object,
    public voidLiteral: void,
    public functionLiteral: () => void,
    public arrayLiteral: string[],
    public referenceLiteral: RefType,
    public unionType: string | number,

    public tsLiteralString: "string",
    public tsLiteralNumber: 20,
    public tsBigInt: 10000000000000n,
    public tsLiteralBoolean: true,
    public tsNullLiteral: null,
    public tsObject: {},
    public tsArray: [],

    public symbolLiteral: symbol,
    public tsTuple: [string, number, any, RefType, RefTypeInterface, string],
    public tsNamedTuple: [
      name: string,
      ver: number,
      ref: RefType,
      refInterface: RefTypeInterface,
      hello: number,
    ],
    public intersectionType: RefType &
      RefTypeInterface & { name: string; age: number },
    public conditionalType: string extends number ? true : false,

    public keyof: keyof RefType,
    public indexAccessor: RefType["name"],
    public constructorType: abstract new (...args: any) => Hoge,
    public classType: typeof Hoge,
  ) {}
}
