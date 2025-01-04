type main =
  ref_67caf8dc3f4af06574259e3fa1ea9fc5ec87d5ab7ba7b10b9f6bd216405cfaf6;
namespace z {
  type allKeys<T> = T extends any ? keyof T : never;
  export type inferFlattenedErrors<
    T extends ZodType<any, any, any>,
    U = string,
  > = typeToFlattenedError<TypeOf<T>, U>;
  export type typeToFlattenedError<T, U = string> = {
    formErrors: Array<U>;
    fieldErrors: {
      [P in allKeys<T>]?: Array<U>;
    };
  };
  export declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
  };
  export type ZodIssueCode = keyof typeof ZodIssueCode;
  export type ZodIssueBase = {
    path: Array<string | number>;
    message?: string;
  };
  export interface ZodInvalidTypeIssue {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
  }
  export interface ZodInvalidLiteralIssue {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
  }
  export interface ZodUnrecognizedKeysIssue {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: Array<string>;
  }
  export interface ZodInvalidUnionIssue {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: Array<ZodError>;
  }
  export interface ZodInvalidUnionDiscriminatorIssue {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Array<Primitive>;
  }
  export interface ZodInvalidEnumValueIssue {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: Array<string | number>;
  }
  export interface ZodInvalidArgumentsIssue {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
  }
  export interface ZodInvalidReturnTypeIssue {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
  }
  export interface ZodInvalidDateIssue {
    code: typeof ZodIssueCode.invalid_date;
  }
  export type StringValidation =
    | "email"
    | "url"
    | "emoji"
    | "uuid"
    | "nanoid"
    | "regex"
    | "cuid"
    | "cuid2"
    | "ulid"
    | "datetime"
    | "date"
    | "time"
    | "duration"
    | "ip"
    | "cidr"
    | "base64"
    | "jwt"
    | "base64url"
    | {
        includes: string;
        position?: number;
      }
    | {
        startsWith: string;
      }
    | {
        endsWith: string;
      };
  export interface ZodInvalidStringIssue {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
  }
  export interface ZodTooSmallIssue {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodTooBigIssue {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodInvalidIntersectionTypesIssue {
    code: typeof ZodIssueCode.invalid_intersection_types;
  }
  export interface ZodNotMultipleOfIssue {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
  }
  export interface ZodNotFiniteIssue {
    code: typeof ZodIssueCode.not_finite;
  }
  export interface ZodCustomIssue {
    code: typeof ZodIssueCode.custom;
    params?: {
      [k: string]: any;
    };
  }
  export type DenormalizedError = {
    [k: string]: DenormalizedError | Array<string>;
  };
  export type ZodIssueOptionalMessage =
    | ZodInvalidTypeIssue
    | ZodInvalidLiteralIssue
    | ZodUnrecognizedKeysIssue
    | ZodInvalidUnionIssue
    | ZodInvalidUnionDiscriminatorIssue
    | ZodInvalidEnumValueIssue
    | ZodInvalidArgumentsIssue
    | ZodInvalidReturnTypeIssue
    | ZodInvalidDateIssue
    | ZodInvalidStringIssue
    | ZodTooSmallIssue
    | ZodTooBigIssue
    | ZodInvalidIntersectionTypesIssue
    | ZodNotMultipleOfIssue
    | ZodNotFiniteIssue
    | ZodCustomIssue;
  export type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean;
    message: string;
  };
  export declare const quotelessJson: (obj: any) => string;
  type recursiveZodFormattedError<T> = T extends [any, ...Array<any>]
    ? {
        [K in keyof T]?: ZodFormattedError<T[K]>;
      }
    : T extends Array<any>
      ? {
          [k: number]: ZodFormattedError<T[number]>;
        }
      : T extends object
        ? {
            [K in keyof T]?: ZodFormattedError<T[K]>;
          }
        : unknown;
  export type ZodFormattedError<T, U = string> = {
    _errors: Array<U>;
  } & recursiveZodFormattedError<NonNullable<T>>;
  export type inferFormattedError<
    T extends ZodType<any, any, any>,
    U = string,
  > = ZodFormattedError<TypeOf<T>, U>;
  export declare class ZodError<T = any> {
    issues: Array<ZodIssue>;
    get errors(): Array<ZodIssue>;
    constructor(issues: Array<ZodIssue>);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: Array<ZodIssue>) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: Array<ZodIssue>) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
  }
  type stripPath<T extends object> = T extends any
    ? util.OmitKeys<T, "path">
    : never;
  export type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: Array<string | number>;
    fatal?: boolean;
  };
  export type ErrorMapCtx = {
    defaultError: string;
    data: any;
  };
  export type ZodErrorMap = (
    issue: ZodIssueOptionalMessage,
    _ctx: ErrorMapCtx,
  ) => {
    message: string;
  };
  export {};
  type allKeys<T> = T extends any ? keyof T : never;
  export type inferFlattenedErrors<
    T extends ZodType<any, any, any>,
    U = string,
  > = typeToFlattenedError<TypeOf<T>, U>;
  export type typeToFlattenedError<T, U = string> = {
    formErrors: Array<U>;
    fieldErrors: {
      [P in allKeys<T>]?: Array<U>;
    };
  };
  export declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
  };
  export type ZodIssueCode = keyof typeof ZodIssueCode;
  export type ZodIssueBase = {
    path: Array<string | number>;
    message?: string;
  };
  export interface ZodInvalidTypeIssue {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
  }
  export interface ZodInvalidLiteralIssue {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
  }
  export interface ZodUnrecognizedKeysIssue {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: Array<string>;
  }
  export interface ZodInvalidUnionIssue {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: Array<ZodError>;
  }
  export interface ZodInvalidUnionDiscriminatorIssue {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Array<Primitive>;
  }
  export interface ZodInvalidEnumValueIssue {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: Array<string | number>;
  }
  export interface ZodInvalidArgumentsIssue {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
  }
  export interface ZodInvalidReturnTypeIssue {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
  }
  export interface ZodInvalidDateIssue {
    code: typeof ZodIssueCode.invalid_date;
  }
  export type StringValidation =
    | "email"
    | "url"
    | "emoji"
    | "uuid"
    | "nanoid"
    | "regex"
    | "cuid"
    | "cuid2"
    | "ulid"
    | "datetime"
    | "date"
    | "time"
    | "duration"
    | "ip"
    | "cidr"
    | "base64"
    | "jwt"
    | "base64url"
    | {
        includes: string;
        position?: number;
      }
    | {
        startsWith: string;
      }
    | {
        endsWith: string;
      };
  export interface ZodInvalidStringIssue {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
  }
  export interface ZodTooSmallIssue {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodTooBigIssue {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodInvalidIntersectionTypesIssue {
    code: typeof ZodIssueCode.invalid_intersection_types;
  }
  export interface ZodNotMultipleOfIssue {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
  }
  export interface ZodNotFiniteIssue {
    code: typeof ZodIssueCode.not_finite;
  }
  export interface ZodCustomIssue {
    code: typeof ZodIssueCode.custom;
    params?: {
      [k: string]: any;
    };
  }
  export type DenormalizedError = {
    [k: string]: DenormalizedError | Array<string>;
  };
  export type ZodIssueOptionalMessage =
    | ZodInvalidTypeIssue
    | ZodInvalidLiteralIssue
    | ZodUnrecognizedKeysIssue
    | ZodInvalidUnionIssue
    | ZodInvalidUnionDiscriminatorIssue
    | ZodInvalidEnumValueIssue
    | ZodInvalidArgumentsIssue
    | ZodInvalidReturnTypeIssue
    | ZodInvalidDateIssue
    | ZodInvalidStringIssue
    | ZodTooSmallIssue
    | ZodTooBigIssue
    | ZodInvalidIntersectionTypesIssue
    | ZodNotMultipleOfIssue
    | ZodNotFiniteIssue
    | ZodCustomIssue;
  export type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean;
    message: string;
  };
  export declare const quotelessJson: (obj: any) => string;
  type recursiveZodFormattedError<T> = T extends [any, ...Array<any>]
    ? {
        [K in keyof T]?: ZodFormattedError<T[K]>;
      }
    : T extends Array<any>
      ? {
          [k: number]: ZodFormattedError<T[number]>;
        }
      : T extends object
        ? {
            [K in keyof T]?: ZodFormattedError<T[K]>;
          }
        : unknown;
  export type ZodFormattedError<T, U = string> = {
    _errors: Array<U>;
  } & recursiveZodFormattedError<NonNullable<T>>;
  export type inferFormattedError<
    T extends ZodType<any, any, any>,
    U = string,
  > = ZodFormattedError<TypeOf<T>, U>;
  export declare class ZodError<T = any> {
    issues: Array<ZodIssue>;
    get errors(): Array<ZodIssue>;
    constructor(issues: Array<ZodIssue>);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: Array<ZodIssue>) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: Array<ZodIssue>) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
  }
  type stripPath<T extends object> = T extends any
    ? util.OmitKeys<T, "path">
    : never;
  export type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: Array<string | number>;
    fatal?: boolean;
  };
  export type ErrorMapCtx = {
    defaultError: string;
    data: any;
  };
  export type ZodErrorMap = (
    issue: ZodIssueOptionalMessage,
    _ctx: ErrorMapCtx,
  ) => {
    message: string;
  };
  export {};
  type allKeys<T> = T extends any ? keyof T : never;
  export type inferFlattenedErrors<
    T extends ZodType<any, any, any>,
    U = string,
  > = typeToFlattenedError<TypeOf<T>, U>;
  export type typeToFlattenedError<T, U = string> = {
    formErrors: Array<U>;
    fieldErrors: {
      [P in allKeys<T>]?: Array<U>;
    };
  };
  export declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
  };
  export type ZodIssueCode = keyof typeof ZodIssueCode;
  export type ZodIssueBase = {
    path: Array<string | number>;
    message?: string;
  };
  export interface ZodInvalidTypeIssue {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
  }
  export interface ZodInvalidLiteralIssue {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
  }
  export interface ZodUnrecognizedKeysIssue {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: Array<string>;
  }
  export interface ZodInvalidUnionIssue {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: Array<ZodError>;
  }
  export interface ZodInvalidUnionDiscriminatorIssue {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Array<Primitive>;
  }
  export interface ZodInvalidEnumValueIssue {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: Array<string | number>;
  }
  export interface ZodInvalidArgumentsIssue {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
  }
  export interface ZodInvalidReturnTypeIssue {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
  }
  export interface ZodInvalidDateIssue {
    code: typeof ZodIssueCode.invalid_date;
  }
  export type StringValidation =
    | "email"
    | "url"
    | "emoji"
    | "uuid"
    | "nanoid"
    | "regex"
    | "cuid"
    | "cuid2"
    | "ulid"
    | "datetime"
    | "date"
    | "time"
    | "duration"
    | "ip"
    | "cidr"
    | "base64"
    | "jwt"
    | "base64url"
    | {
        includes: string;
        position?: number;
      }
    | {
        startsWith: string;
      }
    | {
        endsWith: string;
      };
  export interface ZodInvalidStringIssue {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
  }
  export interface ZodTooSmallIssue {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodTooBigIssue {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodInvalidIntersectionTypesIssue {
    code: typeof ZodIssueCode.invalid_intersection_types;
  }
  export interface ZodNotMultipleOfIssue {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
  }
  export interface ZodNotFiniteIssue {
    code: typeof ZodIssueCode.not_finite;
  }
  export interface ZodCustomIssue {
    code: typeof ZodIssueCode.custom;
    params?: {
      [k: string]: any;
    };
  }
  export type DenormalizedError = {
    [k: string]: DenormalizedError | Array<string>;
  };
  export type ZodIssueOptionalMessage =
    | ZodInvalidTypeIssue
    | ZodInvalidLiteralIssue
    | ZodUnrecognizedKeysIssue
    | ZodInvalidUnionIssue
    | ZodInvalidUnionDiscriminatorIssue
    | ZodInvalidEnumValueIssue
    | ZodInvalidArgumentsIssue
    | ZodInvalidReturnTypeIssue
    | ZodInvalidDateIssue
    | ZodInvalidStringIssue
    | ZodTooSmallIssue
    | ZodTooBigIssue
    | ZodInvalidIntersectionTypesIssue
    | ZodNotMultipleOfIssue
    | ZodNotFiniteIssue
    | ZodCustomIssue;
  export type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean;
    message: string;
  };
  export declare const quotelessJson: (obj: any) => string;
  type recursiveZodFormattedError<T> = T extends [any, ...Array<any>]
    ? {
        [K in keyof T]?: ZodFormattedError<T[K]>;
      }
    : T extends Array<any>
      ? {
          [k: number]: ZodFormattedError<T[number]>;
        }
      : T extends object
        ? {
            [K in keyof T]?: ZodFormattedError<T[K]>;
          }
        : unknown;
  export type ZodFormattedError<T, U = string> = {
    _errors: Array<U>;
  } & recursiveZodFormattedError<NonNullable<T>>;
  export type inferFormattedError<
    T extends ZodType<any, any, any>,
    U = string,
  > = ZodFormattedError<TypeOf<T>, U>;
  export declare class ZodError<T = any> {
    issues: Array<ZodIssue>;
    get errors(): Array<ZodIssue>;
    constructor(issues: Array<ZodIssue>);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: Array<ZodIssue>) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: Array<ZodIssue>) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
  }
  type stripPath<T extends object> = T extends any
    ? util.OmitKeys<T, "path">
    : never;
  export type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: Array<string | number>;
    fatal?: boolean;
  };
  export type ErrorMapCtx = {
    defaultError: string;
    data: any;
  };
  export type ZodErrorMap = (
    issue: ZodIssueOptionalMessage,
    _ctx: ErrorMapCtx,
  ) => {
    message: string;
  };
  export {};
  type allKeys<T> = T extends any ? keyof T : never;
  export type inferFlattenedErrors<
    T extends ZodType<any, any, any>,
    U = string,
  > = typeToFlattenedError<TypeOf<T>, U>;
  export type typeToFlattenedError<T, U = string> = {
    formErrors: Array<U>;
    fieldErrors: {
      [P in allKeys<T>]?: Array<U>;
    };
  };
  export declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
  };
  export type ZodIssueCode = keyof typeof ZodIssueCode;
  export type ZodIssueBase = {
    path: Array<string | number>;
    message?: string;
  };
  export interface ZodInvalidTypeIssue {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
  }
  export interface ZodInvalidLiteralIssue {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
  }
  export interface ZodUnrecognizedKeysIssue {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: Array<string>;
  }
  export interface ZodInvalidUnionIssue {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: Array<ZodError>;
  }
  export interface ZodInvalidUnionDiscriminatorIssue {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Array<Primitive>;
  }
  export interface ZodInvalidEnumValueIssue {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: Array<string | number>;
  }
  export interface ZodInvalidArgumentsIssue {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
  }
  export interface ZodInvalidReturnTypeIssue {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
  }
  export interface ZodInvalidDateIssue {
    code: typeof ZodIssueCode.invalid_date;
  }
  export type StringValidation =
    | "email"
    | "url"
    | "emoji"
    | "uuid"
    | "nanoid"
    | "regex"
    | "cuid"
    | "cuid2"
    | "ulid"
    | "datetime"
    | "date"
    | "time"
    | "duration"
    | "ip"
    | "cidr"
    | "base64"
    | "jwt"
    | "base64url"
    | {
        includes: string;
        position?: number;
      }
    | {
        startsWith: string;
      }
    | {
        endsWith: string;
      };
  export interface ZodInvalidStringIssue {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
  }
  export interface ZodTooSmallIssue {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodTooBigIssue {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
  }
  export interface ZodInvalidIntersectionTypesIssue {
    code: typeof ZodIssueCode.invalid_intersection_types;
  }
  export interface ZodNotMultipleOfIssue {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
  }
  export interface ZodNotFiniteIssue {
    code: typeof ZodIssueCode.not_finite;
  }
  export interface ZodCustomIssue {
    code: typeof ZodIssueCode.custom;
    params?: {
      [k: string]: any;
    };
  }
  export type DenormalizedError = {
    [k: string]: DenormalizedError | Array<string>;
  };
  export type ZodIssueOptionalMessage =
    | ZodInvalidTypeIssue
    | ZodInvalidLiteralIssue
    | ZodUnrecognizedKeysIssue
    | ZodInvalidUnionIssue
    | ZodInvalidUnionDiscriminatorIssue
    | ZodInvalidEnumValueIssue
    | ZodInvalidArgumentsIssue
    | ZodInvalidReturnTypeIssue
    | ZodInvalidDateIssue
    | ZodInvalidStringIssue
    | ZodTooSmallIssue
    | ZodTooBigIssue
    | ZodInvalidIntersectionTypesIssue
    | ZodNotMultipleOfIssue
    | ZodNotFiniteIssue
    | ZodCustomIssue;
  export type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean;
    message: string;
  };
  export declare const quotelessJson: (obj: any) => string;
  type recursiveZodFormattedError<T> = T extends [any, ...Array<any>]
    ? {
        [K in keyof T]?: ZodFormattedError<T[K]>;
      }
    : T extends Array<any>
      ? {
          [k: number]: ZodFormattedError<T[number]>;
        }
      : T extends object
        ? {
            [K in keyof T]?: ZodFormattedError<T[K]>;
          }
        : unknown;
  export type ZodFormattedError<T, U = string> = {
    _errors: Array<U>;
  } & recursiveZodFormattedError<NonNullable<T>>;
  export type inferFormattedError<
    T extends ZodType<any, any, any>,
    U = string,
  > = ZodFormattedError<TypeOf<T>, U>;
  export declare class ZodError<T = any> {
    issues: Array<ZodIssue>;
    get errors(): Array<ZodIssue>;
    constructor(issues: Array<ZodIssue>);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: Array<ZodIssue>) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: Array<ZodIssue>) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
  }
  type stripPath<T extends object> = T extends any
    ? util.OmitKeys<T, "path">
    : never;
  export type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: Array<string | number>;
    fatal?: boolean;
  };
  export type ErrorMapCtx = {
    defaultError: string;
    data: any;
  };
  export type ZodErrorMap = (
    issue: ZodIssueOptionalMessage,
    _ctx: ErrorMapCtx,
  ) => {
    message: string;
  };
  export {};
}
interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any,
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}
interface MapConstructor {
  new (): Map<any, any>;
  new <K, V>(entries?: readonly Array<readonly [K, V]> | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}
declare var Map;
interface ReadonlyMap<K, V> {
  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any,
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly size: number;
}
interface WeakMap<K extends WeakKey, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}
interface WeakMapConstructor {
  new <K extends WeakKey = WeakKey, V = any>(
    entries?: readonly Array<readonly [K, V]> | null,
  ): WeakMap<K, V>;
  readonly prototype: WeakMap<WeakKey, any>;
}
declare var WeakMap: WeakMapConstructor;
interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any,
  ): void;
  has(value: T): boolean;
  readonly size: number;
}
interface SetConstructor {
  new <T = any>(values?: readonly Array<T> | null): Set<T>;
  readonly prototype: Set<any>;
}
declare var Set: SetConstructor;
interface ReadonlySet<T> {
  forEach(
    callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: any,
  ): void;
  has(value: T): boolean;
  readonly size: number;
}
interface WeakSet<T extends WeakKey> {
  add(value: T): this;
  delete(value: T): boolean;
  has(value: T): boolean;
}
interface WeakSetConstructor {
  new <T extends WeakKey = WeakKey>(
    values?: readonly Array<T> | null,
  ): WeakSet<T>;
  readonly prototype: WeakSet<WeakKey>;
}
declare var WeakSet: WeakSetConstructor;
interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any,
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}
interface MapConstructor {
  new (): Map<any, any>;
  new <K, V>(entries?: readonly Array<readonly [K, V]> | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;
interface ReadonlyMap<K, V> {
  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any,
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly size: number;
}
interface WeakMap<K extends WeakKey, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}
interface WeakMapConstructor {
  new <K extends WeakKey = WeakKey, V = any>(
    entries?: readonly Array<readonly [K, V]> | null,
  ): WeakMap<K, V>;
  readonly prototype: WeakMap<WeakKey, any>;
}
declare var WeakMap: WeakMapConstructor;
interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any,
  ): void;
  has(value: T): boolean;
  readonly size: number;
}
interface SetConstructor {
  new <T = any>(values?: readonly Array<T> | null): Set<T>;
  readonly prototype: Set<any>;
}
declare var Set;
interface ReadonlySet<T> {
  forEach(
    callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: any,
  ): void;
  has(value: T): boolean;
  readonly size: number;
}
interface WeakSet<T extends WeakKey> {
  add(value: T): this;
  delete(value: T): boolean;
  has(value: T): boolean;
}
interface WeakSetConstructor {
  new <T extends WeakKey = WeakKey>(
    values?: readonly Array<T> | null,
  ): WeakSet<T>;
  readonly prototype: WeakSet<WeakKey>;
}
declare var WeakSet: WeakSetConstructor;
