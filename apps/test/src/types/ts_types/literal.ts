import { RefType } from "@/ts_types/utils";

interface RefTypeInterface {
  name: string;
  ver: number;
}
class Hoge {
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
  neverLiteral: never;
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

  // constructorType: abstract new (...args: any) => any;

  symbolLiteral: symbol;
  tsTuple: [string, number, any, RefType, RefTypeInterface];
  tsNamedTuple: [
    name: string,
    ver: number,
    ref: RefType,
    refInterface: RefTypeInterface,
  ];
  intersectionType: RefType & RefTypeInterface & { name: string; age: number };

  // TODO
  thisType: ThisType<string>;
  array: Array<string>;
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  pick: Pick<RefType, "name">;
  omit: Omit<RefType, "name">;
  extract: Extract<string | number, string>;
  exclude: Exclude<string | number, string>;
  nonNullable: NonNullable<string | null>;
  parameters: Parameters<() => void>;
  constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  returnType: ReturnType<() => void>;
  instanceType: InstanceType<typeof LiteralTypeClass>;
  promise: Promise<RefType>;

  // TODO
  classType: typeof Hoge;
  refTypeInterface: RefTypeInterface;
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
  neverLiteral: never;
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

  // TODO
  thisType: ThisType<string>;
  array: Array<string>;
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  pick: Pick<RefType, "name">;
  omit: Omit<RefType, "name">;
  extract: Extract<string | number, string>;
  exclude: Exclude<string | number, string>;
  nonNullable: NonNullable<string | null>;
  parameters: Parameters<() => void>;
  constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  returnType: ReturnType<() => void>;
  instanceType: InstanceType<typeof LiteralTypeClass>;
  promise: Promise<RefType>;

  // TODO: literal
  classType: typeof Hoge;
  refTypeInterface: RefTypeInterface;
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
    public neverLiteral: never,
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

    // TODO
    public thisType: ThisType<string>,
    public array: Array<string>,
    public partial: Partial<RefType>,
    public required: Required<RefType>,
    public readonly: Readonly<RefType>,
    public pick: Pick<RefType, "name">,
    public omit: Omit<RefType, "name">,
    public extract: Extract<string | number, string>,
    public exclude: Exclude<string | number, string>,
    public nonNullable: NonNullable<string | null>,
    public parameters: Parameters<() => void>,
    // public constructorParameters: ConstructorParameters<typeof LiteralTypeClass>,
    public returnType: ReturnType<() => void>,
    // public instanceType: InstanceType<typeof LiteralTypeClass>,
    public promise: Promise<RefType>,

    // TODO
    public classType: typeof Hoge,
    public refTypeInterface: RefTypeInterface,
  ) {}
}
