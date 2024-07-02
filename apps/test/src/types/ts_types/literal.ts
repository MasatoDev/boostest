type RefType = {
  name: string;
  ver: number;
};

export type LiteralType = {
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
  // arrayLiteral: Array<string>;
  arrayLiteral: string[];
  referenceLiteral: RefType;
  thisType: ThisType<string>;
  unionType: string | number;
  conditionalType: string extends number ? true : false;

  tsLiteralString: 'string';
  tsLiteralNumber: 20;
  tsLiteralBoolean: true;
  tsNullLiteral: null;
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
    // public arrayLiteral: Array<string>
    public arrayLiteral: string[],
    public referenceLiteral: RefType,
    public thisType: ThisType<string> // public unionType: string | number
  ) {}
}
