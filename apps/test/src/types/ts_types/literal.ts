import { RefType } from '@/ts_types/utils';

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
  thisType: ThisType<string>;
  unionType: string | number;
  conditionalType: string extends number ? true : false;

  tsLiteralString: 'string';
  tsLiteralNumber: 20;
  tsLiteralBoolean: true;
  tsNullLiteral: null;

  // TODO
  array: Array<string>;
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  pick: Pick<RefType, 'name'>;
  omit: Omit<RefType, 'name'>;
  extract: Extract<string | number, string>;
  exclude: Exclude<string | number, string>;
  nonNullable: NonNullable<string | null>;
  parameters: Parameters<() => void>;
  constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  returnType: ReturnType<() => void>;
  instanceType: InstanceType<typeof LiteralTypeClass>;
  promise: Promise<RefType>;

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
  thisType: ThisType<string>;
  unionType: string | number;
  conditionalType: string extends number ? true : false;

  tsLiteralString: 'string';
  tsLiteralNumber: 20;
  tsLiteralBoolean: true;
  tsNullLiteral: null;

  // TODO
  array: Array<string>;
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  pick: Pick<RefType, 'name'>;
  omit: Omit<RefType, 'name'>;
  extract: Extract<string | number, string>;
  exclude: Exclude<string | number, string>;
  nonNullable: NonNullable<string | null>;
  parameters: Parameters<() => void>;
  constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  returnType: ReturnType<() => void>;
  instanceType: InstanceType<typeof LiteralTypeClass>;
  promise: Promise<RefType>;

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
    public thisType: ThisType<string>,
    public unionType: string | number,

    public array: Array<string>,
    public partial: Partial<RefType>,
    public required: Required<RefType>,
    public readonly: Readonly<RefType>,
    public pick: Pick<RefType, 'name'>,
    public omit: Omit<RefType, 'name'>,
    public extract: Extract<string | number, string>,
    public exclude: Exclude<string | number, string>,
    public nonNullable: NonNullable<string | null>,
    public parameters: Parameters<() => void>,
    // public constructorParameters: ConstructorParameters<typeof LiteralTypeClass>,
    public returnType: ReturnType<() => void>,
    // public instanceType: InstanceType<typeof LiteralTypeClass>,
    public promise: Promise<RefType>,

    public classType: typeof Hoge,
    public refTypeInterface: RefTypeInterface
  ) {}
}
