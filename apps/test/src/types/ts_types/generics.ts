import { RefType } from "@/ts_types/utils";

class SimpleClass {
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

type OnDirectRefUnionType<T> = T extends SystemSupportLanguage ? T : never;

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
  extract: Extract<"A" | "B" | "C" | "D" | "E", "D" | "E">;
  extractRefUnion: Extract<SystemSupportLanguage, "en" | "fr">;
  exclude: Exclude<Grade, "A">;
  onDirectRefUnionType: OnDirectRefUnionType<"fr">;
  array: Array<string>;
  pick: Pick<RefType, "name">;
  pickMulti: Pick<RefType, "ver" | "age">;
  omit: Omit<RefType, "name">;
  record: Record<SystemSupportLanguage, string>;
  parameters: Parameters<(name: string, age: number) => void>;
  returnType: ReturnType<() => RefType>;
  instanceType: InstanceType<typeof SimpleClass>;
  constructorParameters: ConstructorParameters<typeof SimpleClass>;
  promise: Promise<RefType>;

  /**********************/
  /******* TODO: *******/
  /**********************/

  // thisType: ThisType<string>;
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
  extract: Extract<"A" | "B" | "C" | "D" | "E", "D" | "E">;
  extractRefUnion: Extract<SystemSupportLanguage, "en" | "fr">;
  exclude: Exclude<Grade, "A">;
  onDirectRefUnionType: OnDirectRefUnionType<"fr">;
  array: Array<string>;
  pick: Pick<RefType, "name">;
  pickMulti: Pick<RefType, "ver" | "age">;
  omit: Omit<RefType, "name">;
  record: Record<SystemSupportLanguage, string>;
  parameters: Parameters<(name: string, age: number) => void>;
  returnType: ReturnType<() => RefType>;
  instanceType: InstanceType<typeof SimpleClass>;
  constructorParameters: ConstructorParameters<typeof SimpleClass>;
  promise: Promise<RefType>;

  /**********************/
  /******* TODO: *******/
  /**********************/
  // thisType: ThisType<string>;
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
    public extract: Extract<"A" | "B" | "C" | "D" | "E", "D" | "E">,
    public extractRefUnion: Extract<SystemSupportLanguage, "en" | "fr">,
    public exclude: Exclude<Grade, "A">,
    public onDirectRefUnionType: OnDirectRefUnionType<"fr">,
    public array: Array<string>,
    public pick: Pick<RefType, "name">,
    public pickMulti: Pick<RefType, "ver" | "age">,
    public omit: Omit<RefType, "name">,
    public record: Record<SystemSupportLanguage, string>,
    public parameters: Parameters<(name: string, age: number) => void>,
    public returnType: ReturnType<() => RefType>,
    public instanceType: InstanceType<typeof SimpleClass>,
    public constructorParameters: ConstructorParameters<typeof SimpleClass>,
    public promise: Promise<RefType>,

    /**********************/
    /******* TODO: *******/
    /**********************/
    // public thisType: ThisType<string>,
  ) {}
}
