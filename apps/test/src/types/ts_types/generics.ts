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

type SystemSupportLanguage = "en" | "fr" | "it" | "es";

type Butterfly = {
  [key in SystemSupportLanguage]: string;
};

type ButterflyWithGenerics<T> = {
  [key in SystemSupportLanguage]: T;
};

type KeyOfButterfly = {
  [key in keyof RefType]: RefType[key];
};

export type GenericsTypeAlias = {
  mapperType: Butterfly;
  keyOfMapperType: KeyOfButterfly;
  innserGenericInitializer: InnerGenericInitializer;
  butterflyWithGenerics: ButterflyWithGenerics<string>;
  nonNullable: NonNullable<undefined | string | null>;
  nestedPartial: {
    childPartial: Partial<RefType>;
  };
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  /**********************/
  /******* FIXME: *******/
  /**********************/
  // thisType: ThisType<string>;
  // array: Array<string>;
  // pick: Pick<RefType, "name">;
  // omit: Omit<RefType, "name">;
  extract: Extract<"A" | "B" | "C" | "D" | "E", "D" | "E">;
  exclude: Exclude<Grade, "A">;
  // promise: Promise<RefType>;

  // parameters: Parameters<() => void>;
  // returnType: ReturnType<() => void>;
  // constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  // instanceType: InstanceType<typeof LiteralTypeClass>;
};

type Grade = "A" | "B" | "C" | "D" | "E";

export type GenericsInterface = {
  innserGenericInitializer: InnerGenericInitializer;
  mapperType: Butterfly;
  keyOfMapperType: KeyOfButterfly;
  butterflyWithGenerics: ButterflyWithGenerics<string>;
  nonNullable: NonNullable<undefined | string | null>;
  nestedPartial: {
    childPartial: Partial<RefType>;
  };
  partial: Partial<RefType>;
  required: Required<RefType>;
  readonly: Readonly<RefType>;
  /**********************/
  /******* FIXME: *******/
  /**********************/
  // innserGenericInitializer: InnerGenericInitializer;
  // thisType: ThisType<string>;
  // array: Array<string>;
  // pick: Pick<RefType, "name">;
  // omit: Omit<RefType, "name">;
  extract: Extract<"A" | "B" | "C" | "D" | "E", "D" | "E">;
  exclude: Exclude<Grade, "A">;
  // parameters: Parameters<() => void>;
  // constructorParameters: ConstructorParameters<typeof LiteralTypeClass>;
  // returnType: ReturnType<() => void>;
  // instanceType: InstanceType<typeof LiteralTypeClass>;
  // promise: Promise<RefType>;
};

export class GenericsClass {
  constructor(
    public innserGenericInitializer: InnerGenericInitializer,
    public mapperType: Butterfly,
    public keyOfMapperType: KeyOfButterfly,
    public butterflyWithGenerics: ButterflyWithGenerics<string>,
    public nonNullable: NonNullable<undefined | string | null>,
    public nestedPartial: {
      childPartial: Partial<RefType>;
    },
    public partial: Partial<RefType>,
    public required: Required<RefType>,
    public readonly: Readonly<RefType>,

    /**********************/
    /******* FIXME: *******/
    /**********************/
    // public innserGenericInitializer: InnerGenericInitializer,
    // public thisType: ThisType<string>,
    // public array: Array<string>,
    // public pick: Pick<RefType, "name">,
    // public omit: Omit<RefType, "name">,
    // public extract: Extract<string | number, string>,
    // public exclude: Exclude<string | number, string>,
    // public parameters: Parameters<() => void>,
    // public constructorParameters: ConstructorParameters<typeof Hoge>,
    // public returnType: ReturnType<() => void>,
    // public instanceType: InstanceType<typeof Hoge>,
    // public promise: Promise<RefType>,
  ) {}
}
