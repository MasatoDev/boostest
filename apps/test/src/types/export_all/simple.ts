export type SimpleType = {
  name: string;
  age: number;
  refType: ReferenceType;
};

type ReferenceType = {
  name: string;
  ver: number;
};

export declare class ZodString {
  _parse(input: ReferenceType): SimpleType;
  // protected _regex(
  //   regex: RegExp,
  //   validation: StringValidation,
  //   message?: errorUtil.ErrMessage,
  // ): ZodEffects<this, string, string>;
  _addCheck(check: ReferenceType): ZodString;
  email(message?: ReferenceType): ZodString;
}
