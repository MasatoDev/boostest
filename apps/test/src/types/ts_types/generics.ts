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

export type InngerGeneric<T> = T;
export type InngerPropGeneric<T> = {
  name: T;
};

type InnerGenericInitializer = {
  name: string;
  innerGeneric: InngerGeneric<RefType>;
  innerGenericLiteral: InngerGeneric<"inner generic string">;
};

export type GenericsTypeAlias = {
  /**********************/
  /******* FIXME: *******/
  /**********************/
  // nestedPartial: {
  //   childPartial: Partial<RefType>;
  // };
  // innserGenericInitializer: InnerGenericInitializer;
  // thisType: ThisType<string>;
  // array: Array<string>;
  partial: Partial<RefType>;
  // required: Required<RefType>;
  // readonly: Readonly<RefType>;
  // pick: Pick<RefType, "name">;
  // omit: Omit<RefType, "name">;
  // extract: Extract<string | number, string>;
  // exclude: Exclude<string | number, string>;
  // nonNullable: NonNullable<string | null>;
  // promise: Promise<RefType>;

  // parameters: Parameters<() => void>;
  // returnType: ReturnType<() => void>;
  // constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  // instanceType: InstanceType<typeof LiteralTypeClass>;
};

export type GenericsInterface = {
  /**********************/
  /******* FIXME: *******/
  /**********************/
  // nestedPartial: {
  //   childPartial: Partial<RefType>;
  // };
  // innserGenericInitializer: InnerGenericInitializer;
  // thisType: ThisType<string>;
  // array: Array<string>;
  partial: Partial<RefType>;
  // required: Required<RefType>;
  // readonly: Readonly<RefType>;
  // pick: Pick<RefType, "name">;
  // omit: Omit<RefType, "name">;
  // extract: Extract<string | number, string>;
  // exclude: Exclude<string | number, string>;
  // nonNullable: NonNullable<string | null>;
  // parameters: Parameters<() => void>;
  // constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  // returnType: ReturnType<() => void>;
  // instanceType: InstanceType<typeof LiteralTypeClass>;
  // promise: Promise<RefType>;
};

export class GenericsClass {
  constructor() /**********************/
  /******* FIXME: *******/
  /**********************/
  // public nestedPartial: {
  //   childPartial: Partial<RefType>;
  // },
  // public innserGenericInitializer: InnerGenericInitializer,
  // public thisType: ThisType<string>,
  // public array: Array<string>,
  // public partial: Partial<RefType>,
  // public required: Required<RefType>,
  // public readonly: Readonly<RefType>,
  // public pick: Pick<RefType, "name">,
  // public omit: Omit<RefType, "name">,
  // public extract: Extract<string | number, string>,
  // public exclude: Exclude<string | number, string>,
  // public nonNullable: NonNullable<string | null>,
  // public parameters: Parameters<() => void>,
  // public constructorParameters: ConstructorParameters<typeof Hoge>,
  // public returnType: ReturnType<() => void>,
  // public instanceType: InstanceType<typeof Hoge>,
  // public promise: Promise<RefType>,
  {}
}
