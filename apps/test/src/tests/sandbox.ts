 type main = ref_ae3812600c9390b8b1434cc6d16ac6244a443e086be8980f7ca940cd1d1a3ae0;
type ref_ae3812600c9390b8b1434cc6d16ac6244a443e086be8980f7ca940cd1d1a3ae0 = z.infer<typeof ref_d83327e90a48f6201b0ab97aa5a59a1c60a8d925aa6db6facfbfbbd77ad2bbc2>;
namespace z {
    export declare const makeIssue: (params: {
        data: any;
        path: (string | number)[];
        errorMaps: ZodErrorMap[];
        issueData: IssueData;
    }) => ZodIssue;
    export type ParseParams = {
        path: (string | number)[];
        errorMap: ZodErrorMap;
        async: boolean;
    };
    export type ParsePathComponent = string | number;
    export type ParsePath = ParsePathComponent[];
    export declare const EMPTY_PATH: ParsePath;
    export interface ParseContext {
        readonly common: {
            readonly issues: ZodIssue[];
            readonly contextualErrorMap?: ZodErrorMap;
            readonly async: boolean;
        };
        readonly path: ParsePath;
        readonly schemaErrorMap?: ZodErrorMap;
        readonly parent: ParseContext | null;
        readonly data: any;
        readonly parsedType: ZodParsedType;
    }
    export type ParseInput = {
        data: any;
        path: (string | number)[];
        parent: ParseContext;
    };
    export declare function addIssueToContext(ctx: ParseContext, issueData: IssueData): void;
    export type ObjectPair = {
        key: SyncParseReturnType<any>;
        value: SyncParseReturnType<any>;
    };
    export declare class ParseStatus {
        value: "aborted" | "dirty" | "valid";
        dirty(): void;
        abort(): void;
        static mergeArray(status: ParseStatus, results: SyncParseReturnType<any>[]): SyncParseReturnType;
        static mergeObjectAsync(status: ParseStatus, pairs: {
            key: ParseReturnType<any>;
            value: ParseReturnType<any>;
        }[]): Promise<SyncParseReturnType<any>>;
        static mergeObjectSync(status: ParseStatus, pairs: {
            key: SyncParseReturnType<any>;
            value: SyncParseReturnType<any>;
            alwaysSet?: boolean;
        }[]): SyncParseReturnType;
    }
    export interface ParseResult {
        status: "aborted" | "dirty" | "valid";
        data: any;
    }
    export type INVALID = {
        status: "aborted";
    };
    export declare const INVALID: INVALID;
    export type DIRTY<T> = {
        status: "dirty";
        value: T;
    };
    export declare const DIRTY: <T>(value: T) => DIRTY<T>;
    export type OK<T> = {
        status: "valid";
        value: T;
    };
    export declare const OK: <T>(value: T) => OK<T>;
    export type SyncParseReturnType<T = any> = OK<T> | DIRTY<T> | INVALID;
    export type AsyncParseReturnType<T> = Promise<SyncParseReturnType<T>>;
    export type ParseReturnType<T> = SyncParseReturnType<T> | AsyncParseReturnType<T>;
    export declare const isAborted: (x: ParseReturnType<any>) => x is INVALID;
    export declare const isDirty: <T>(x: ParseReturnType<T>) => x is OK<T> | DIRTY<T>;
    export declare const isValid: <T>(x: ParseReturnType<T>) => x is OK<T>;
    export declare const isAsync: <T>(x: ParseReturnType<T>) => x is AsyncParseReturnType<T>;
    export type Primitive = string | number | symbol | bigint | boolean | null | undefined;
    export type Scalars = Primitive | Primitive[];
    export declare namespace util {
        type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
        export type isAny<T> = 0 extends 1 & T ? true : false;
        export const assertEqual: <A, B>(val: AssertEqual<A, B>) => AssertEqual<A, B>;
        export function assertIs<T>(_arg: T): void;
        export function assertNever(_x: never): never;
        export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
        export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
        export type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
        export type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;
        export const arrayToEnum: <T extends string, U extends [
            T,
            ...T[]
        ]>(items: U) => {
            [k in U[number]]: k;
        };
        export const getValidEnumValues: (obj: any) => any[];
        export const objectValues: (obj: any) => any[];
        export const objectKeys: ObjectConstructor["keys"];
        export const find: <T>(arr: T[], checker: (arg: T) => any) => T | undefined;
        export type identity<T> = objectUtil.identity<T>;
        export type flatten<T> = objectUtil.flatten<T>;
        export type noUndefined<T> = T extends undefined ? never : T;
        export const isInteger: NumberConstructor["isInteger"];
        export function joinValues<T extends Array<any>>(array: T, separator?: string): string;
        export const jsonStringifyReplacer: (_: string, value: any) => any;
        export {};
    }
    export declare namespace objectUtil {
        export type MergeShapes<U, V> = {
            [k in Exclude<keyof U, keyof V>]: U[k];
        } & V;
        type optionalKeys<T extends object> = {
            [k in keyof T]: undefined extends T[k] ? k : never;
        }[keyof T];
        type requiredKeys<T extends object> = {
            [k in keyof T]: undefined extends T[k] ? never : k;
        }[keyof T];
        export type addQuestionMarks<T extends object, _O = any> = {
            [K in requiredKeys<T>]: T[K];
        } & {
            [K in optionalKeys<T>]?: T[K];
        } & {
            [k in keyof T]?: unknown;
        };
        export type identity<T> = T;
        export type flatten<T> = identity<{
            [k in keyof T]: T[k];
        }>;
        export type noNeverKeys<T> = {
            [k in keyof T]: [
                T[k]
            ] extends [
                never
            ] ? never : k;
        }[keyof T];
        export type noNever<T> = identity<{
            [k in noNeverKeys<T>]: k extends keyof T ? T[k] : never;
        }>;
        export const mergeShapes: <U, T>(first: U, second: T) => T & U;
        export type extendShape<A extends object, B extends object> = {
            [K in keyof A as K extends keyof B ? never : K]: A[K];
        } & {
            [K in keyof B]: B[K];
        };
        export {};
    }
    export declare const ZodParsedType: {
        string: "string";
        number: "number";
        bigint: "bigint";
        boolean: "boolean";
        symbol: "symbol";
        undefined: "undefined";
        object: "object";
        function: "function";
        map: "map";
        nan: "nan";
        integer: "integer";
        float: "float";
        date: "date";
        null: "null";
        array: "array";
        unknown: "unknown";
        promise: "promise";
        void: "void";
        never: "never";
        set: "set";
    };
    export type ZodParsedType = keyof typeof ZodParsedType;
    export declare const getParsedType: (data: any) => ZodParsedType;
    export interface RefinementCtx {
        addIssue: (arg: IssueData) => void;
        path: (string | number)[];
    }
    export type ZodRawShape = {
        [k: string]: ZodTypeAny;
    };
    export type ZodTypeAny = ZodType<any, any, any>;
    export type TypeOf<T extends ZodType<any, any, any>> = T["_output"];
    export type input<T extends ZodType<any, any, any>> = T["_input"];
    export type output<T extends ZodType<any, any, any>> = T["_output"];
    export type { TypeOf as infer };
    export type CustomErrorParams = Partial<util.Omit<ZodCustomIssue, "code">>;
    export interface ZodTypeDef {
        errorMap?: ZodErrorMap;
        description?: string;
    }
    export type RawCreateParams = {
        errorMap?: ZodErrorMap;
        invalid_type_error?: string;
        required_error?: string;
        message?: string;
        description?: string;
    } | undefined;
    export type ProcessedCreateParams = {
        errorMap?: ZodErrorMap;
        description?: string;
    };
    export type SafeParseSuccess<Output> = {
        success: true;
        data: Output;
        error?: never;
    };
    export type SafeParseError<Input> = {
        success: false;
        error: ZodError<Input>;
        data?: never;
    };
    export type SafeParseReturnType<Input, Output> = SafeParseSuccess<Output> | SafeParseError<Input>;
    export declare abstract class ZodType<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> {
        readonly _type: Output;
        readonly _output: Output;
        readonly _input: Input;
        readonly _def: Def;
        get description(): string | undefined;
        "~standard": StandardSchemaV1.Props<Input, Output>;
        abstract _parse(input: ParseInput): ParseReturnType<Output>;
        _getType(input: ParseInput): string;
        _getOrReturnCtx(input: ParseInput, ctx?: ParseContext | undefined): ParseContext;
        _processInputParams(input: ParseInput): {
            status: ParseStatus;
            ctx: ParseContext;
        };
        _parseSync(input: ParseInput): SyncParseReturnType<Output>;
        _parseAsync(input: ParseInput): AsyncParseReturnType<Output>;
        parse(data: unknown, params?: Partial<ParseParams>): Output;
        safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<Input, Output>;
        "~validate"(data: unknown): StandardSchemaV1.Result<Output> | Promise<StandardSchemaV1.Result<Output>>;
        parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<Output>;
        safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<Input, Output>>;
        spa: (data: unknown, params?: Partial<ParseParams>) => Promise<SafeParseReturnType<Input, Output>>;
        refine<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)): ZodEffects<this, RefinedOutput, Input>;
        refine(check: (arg: Output) => unknown | Promise<unknown>, message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)): ZodEffects<this, Output, Input>;
        refinement<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)): ZodEffects<this, RefinedOutput, Input>;
        refinement(check: (arg: Output) => boolean, refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)): ZodEffects<this, Output, Input>;
        _refinement(refinement: RefinementEffect<Output>["refinement"]): ZodEffects<this, Output, Input>;
        superRefine<RefinedOutput extends Output>(refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput): ZodEffects<this, RefinedOutput, Input>;
        superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<this, Output, Input>;
        superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<this, Output, Input>;
        constructor(def: Def);
        optional(): ZodOptional<this>;
        nullable(): ZodNullable<this>;
        nullish(): ZodOptional<ZodNullable<this>>;
        array(): ZodArray<this>;
        promise(): ZodPromise<this>;
        or<T extends ZodTypeAny>(option: T): ZodUnion<[
            this,
            T
        ]>;
        and<T extends ZodTypeAny>(incoming: T): ZodIntersection<this, T>;
        transform<NewOut>(transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<this, NewOut>;
        default(def: util.noUndefined<Input>): ZodDefault<this>;
        default(def: () => util.noUndefined<Input>): ZodDefault<this>;
        brand<B extends string | number | symbol>(brand?: B): ZodBranded<this, B>;
        catch(def: Output): ZodCatch<this>;
        catch(def: (ctx: {
            error: ZodError;
            input: Input;
        }) => Output): ZodCatch<this>;
        describe(description: string): this;
        pipe<T extends ZodTypeAny>(target: T): ZodPipeline<this, T>;
        readonly(): ZodReadonly<this>;
        isOptional(): boolean;
        isNullable(): boolean;
    }
    export type IpVersion = "v4" | "v6";
    export type ZodStringCheck = {
        kind: "min";
        value: number;
        message?: string;
    } | {
        kind: "max";
        value: number;
        message?: string;
    } | {
        kind: "length";
        value: number;
        message?: string;
    } | {
        kind: "email";
        message?: string;
    } | {
        kind: "url";
        message?: string;
    } | {
        kind: "emoji";
        message?: string;
    } | {
        kind: "uuid";
        message?: string;
    } | {
        kind: "nanoid";
        message?: string;
    } | {
        kind: "cuid";
        message?: string;
    } | {
        kind: "includes";
        value: string;
        position?: number;
        message?: string;
    } | {
        kind: "cuid2";
        message?: string;
    } | {
        kind: "ulid";
        message?: string;
    } | {
        kind: "startsWith";
        value: string;
        message?: string;
    } | {
        kind: "endsWith";
        value: string;
        message?: string;
    } | {
        kind: "regex";
        regex: RegExp;
        message?: string;
    } | {
        kind: "trim";
        message?: string;
    } | {
        kind: "toLowerCase";
        message?: string;
    } | {
        kind: "toUpperCase";
        message?: string;
    } | {
        kind: "jwt";
        alg?: string;
        message?: string;
    } | {
        kind: "datetime";
        offset: boolean;
        local: boolean;
        precision: number | null;
        message?: string;
    } | {
        kind: "date";
        message?: string;
    } | {
        kind: "time";
        precision: number | null;
        message?: string;
    } | {
        kind: "duration";
        message?: string;
    } | {
        kind: "ip";
        version?: IpVersion;
        message?: string;
    } | {
        kind: "cidr";
        version?: IpVersion;
        message?: string;
    } | {
        kind: "base64";
        message?: string;
    } | {
        kind: "base64url";
        message?: string;
    };
    export interface ZodStringDef extends ZodTypeDef {
        checks: ZodStringCheck[];
        typeName: ZodFirstPartyTypeKind.ZodString;
        coerce: boolean;
    }
    export declare function datetimeRegex(args: {
        precision?: number | null;
        offset?: boolean;
        local?: boolean;
    }): RegExp;
    export declare class ZodString extends ZodType<string, ZodStringDef, string> {
        _parse(input: ParseInput): ParseReturnType<string>;
        protected _regex(regex: RegExp, validation: StringValidation, message?: errorUtil.ErrMessage): ZodEffects<this, string, string>;
        _addCheck(check: ZodStringCheck): ZodString;
        email(message?: errorUtil.ErrMessage): ZodString;
        url(message?: errorUtil.ErrMessage): ZodString;
        emoji(message?: errorUtil.ErrMessage): ZodString;
        uuid(message?: errorUtil.ErrMessage): ZodString;
    kind: "finite";
    message?: string;
};
declare class ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<number>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    gte(value: number, message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    min: (value: number, message?: errorUtil.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    gt(value: number, message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    lte(value: number, message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    max: (value: number, message?: errorUtil.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    lt(value: number, message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    _addCheck(check: ref_0bcedc16a1fc82b0af43aea87dec9b0e716dbb33a814706c25e0399910fd89b0): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    int(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    positive(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    negative(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    nonpositive(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    nonnegative(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    multipleOf(value: number, message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    step: (value: number, message?: errorUtil.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    finite(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    safe(message?: errorUtil.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    get minValue(): number | null;
    get maxValue(): number | null;
    get isInt(): boolean;
    get isFinite(): boolean;
}
type ref_a75ef1e0eef2a54e2b99d9074207a8657a8641b0436a7a32f9bb975043014d79 = {
    kind: "min";
    value: bigint;
    inclusive: boolean;
    message?: string;
} | {
    kind: "max";
    value: bigint;
    inclusive: boolean;
    message?: string;
} | {
    kind: "multipleOf";
    value: bigint;
    message?: string;
};
declare class ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<bigint>;
    _getInvalidInput(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    gte(value: bigint, message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    min: (value: bigint, message?: errorUtil.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    gt(value: bigint, message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    lte(value: bigint, message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    max: (value: bigint, message?: errorUtil.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    lt(value: bigint, message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    _addCheck(check: ref_a75ef1e0eef2a54e2b99d9074207a8657a8641b0436a7a32f9bb975043014d79): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    positive(message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    negative(message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    nonpositive(message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    nonnegative(message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    multipleOf(value: bigint, message?: errorUtil.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    get minValue(): bigint | null;
    get maxValue(): bigint | null;
}
declare class ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<boolean>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a;
}
type ref_cb14d407bd64e524d5cdde05bfbcbd1016a527cf070f3c753730d408486f440d = {
    kind: "min";
    value: number;
    message?: string;
} | {
    kind: "max";
    value: number;
    message?: string;
};
declare class ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    _addCheck(check: ref_cb14d407bd64e524d5cdde05bfbcbd1016a527cf070f3c753730d408486f440d): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
    min(minDate: ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1, message?: errorUtil.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
    max(maxDate: ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1, message?: errorUtil.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
    get minDate(): ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | null;
    get maxDate(): ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | null;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
}
interface ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 {
    toLocaleString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
    toLocaleDateString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
    toLocaleTimeString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
}
interface ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 {
    toLocaleString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
    toLocaleDateString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
    toLocaleTimeString(locales?: string | Array<string>, options?: Intl.DateTimeFormatOptions): string;
}
declare class ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49;
}
declare class ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973;
}
declare class ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377;
}
declare class ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5 {
    _any: true;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5;
}
declare class ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525 {
    _unknown: true;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525;
}
declare class ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22;
}
declare class ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad;
}
type ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66 = {
    [k: string]: ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd;
};
type ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = "passthrough" | "strict" | "strip";
type ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = {
    [k in keyof Shape]: Shape[k]["_output"];
};
type ref_c8f051f713c3c8666195504baf97a1f7a2890203f713266b3f4fe5cc243b27da<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
    [k: string]: T["_output"];
};
type ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<T extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = T extends "passthrough" ? {
    [k: string]: unknown;
} : unknown;
type ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = objectUtil.addQuestionMarks<{
    [k in keyof Shape]: Shape[k]["_input"];
}>;
type ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
    [k: string]: T["_input"];
};
type ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> = {
    type: "transform";
    transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
};
type ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T> = {
    type: "preprocess";
    transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
};
type ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = T extends ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<infer U> ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U> : T extends ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<infer U> ? ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U>> : T;
declare class ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<T, Catchall, UnknownKeys>, Input = ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<T, Catchall, UnknownKeys>> {
    private _cached;
    _getCached(): {
        shape: T;
        keys: Array<string>;
    };
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get shape(): T;
    strict(message?: errorUtil.ErrMessage): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strict", Catchall>;
    strip(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strip", Catchall>;
    passthrough(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
    nonstrict: () => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
    extend<Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    augment: <Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    merge<Incoming extends ref_3d77202f37cbfdb0bee02a9f0024f2b10f4ea08d1aac799712423725ba9b375c, Augmentation extends Incoming["shape"]>(merging: Incoming): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<objectUtil.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
    setKey<Key extends string, Schema extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(key: Key, schema: Schema): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T & {
        [k in Key]: Schema;
    }, UnknownKeys, Catchall>;
    catchall<Index extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(index: Index): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, UnknownKeys, Index>;
    pick<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
    omit<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, keyof Mask>, UnknownKeys, Catchall>;
    deepPartial(): partialUtil.DeepPartial<this>;
    partial(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
        [k in keyof T]: ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]>;
    }, UnknownKeys, Catchall>;
    partial<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    required(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
        [k in keyof T]: ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]>;
    }, UnknownKeys, Catchall>;
    required<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    keyof(): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<enumUtil.UnionToTupleString<keyof T>>;
    static create: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strip", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
    static strictCreate: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strict", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
    static lazycreate: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strip", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
}
type ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = objectUtil.flatten<objectUtil.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<Shape>>> & ref_c8f051f713c3c8666195504baf97a1f7a2890203f713266b3f4fe5cc243b27da<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
type ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = objectUtil.flatten<ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape>> & ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
type ref_3d77202f37cbfdb0bee02a9f0024f2b10f4ea08d1aac799712423725ba9b375c = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<any, any, any>;
type ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<T, U> = T extends U ? T : never;
type ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K extends keyof any> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
type ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<T, U> = T extends U ? never : T;
declare class ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<T extends [
    string,
    ...Array<string>
]> {
    #private;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get options(): T;
    get enum(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    get Values(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    get Enum(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    extract<ToExtract extends readonly [
        T[number],
        ...Array<T[number]>
    ]>(values: ToExtract, newDef?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<ref_1ad0ea276b311b9a105b264f2777250963fe341af2943c25cab4f0ea5f27714b<ToExtract>>;
    exclude<ToExclude extends readonly [
        T[number],
        ...Array<T[number]>
    ]>(values: ToExclude, newDef?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<ref_400c10fc98fc71c3c94e958538113b5569d024f5719365780c9f9aba3cd6bbc3<ref_1ad0ea276b311b9a105b264f2777250963fe341af2943c25cab4f0ea5f27714b<ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<T, ToExclude[number]>>, [
        string,
        ...Array<string>
    ]>>;
    static create: typeof createZodEnum;
}
type ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T extends ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5> = {
    [k in T[number]]: k;
};
type ref_1ad0ea276b311b9a105b264f2777250963fe341af2943c25cab4f0ea5f27714b<T> = {
    -readonly [P in keyof T]: T[P];
};
type ref_400c10fc98fc71c3c94e958538113b5569d024f5719365780c9f9aba3cd6bbc3<A, T> = A extends T ? A : never;
type ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Values, ToExclude> = Values extends [
] ? [
] : Values extends [
    infer Head,
    ...infer Rest
] ? Head extends ToExclude ? ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude> : [
    Head,
    ...ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude>
] : never;
type ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4 = ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
]>;
type ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator extends string> = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
    [key in Discriminator]: ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd;
} & ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>;
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<K, V> {
    [Symbol.iterator](): IterableIterator<[
        K,
        V
    ]>;
    entries(): IterableIterator<[
        K,
        V
    ]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
}
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}
interface ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T> {
    [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
}
declare class ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<Discriminator extends string, Options extends readonly Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>> {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get discriminator(): Discriminator;
    get options(): Options;
    get optionsMap(): ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8, ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<any>>;
    static create<Discriminator extends string, Types extends readonly [
        ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>,
        ...Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>
    ]>(discriminator: Discriminator, options: Types, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<Discriminator, Types>;
}
type ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 = [
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
];
type ref_c5329264db9e5e1e5351919298992738e54e4d660dcfdd5c7bcbee5ee4b401f8<T> = T extends Array<any> ? T : never;
type ref_629218eb781896e9965c89354e5933cf9a2eb38a6486a1bfac1b6417e13ed637<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
]> = ref_c5329264db9e5e1e5351919298992738e54e4d660dcfdd5c7bcbee5ee4b401f8<{
    [k in keyof T]: T[k] extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any> ? T[k]["_output"] : never;
}>;
type ref_79f8e908a2eebd1a7133355a99e5f2d51f2271ca1f5671c421b6b51e67893cdf<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
]> = ref_c5329264db9e5e1e5351919298992738e54e4d660dcfdd5c7bcbee5ee4b401f8<{
    [k in keyof T]: T[k] extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any> ? T[k]["_input"] : never;
}>;
declare class ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T extends [
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
] | [
] = [
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
], Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get items(): T;
    rest<Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(rest: Rest): ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T, Rest>;
    static create: <T_1 extends [
    ] | [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>(schemas: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T_1, null>;
}
type ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<string | number | symbol, any, any>;
type ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K extends keyof any, T> = {
    [P in K]: T;
};
type ref_d556e538c490b9db3e5347ed57a98084d58c95713eea870a81ed006c7396da45<T extends string | number | symbol> = {
    [BRAND]: {
        [k in T]: true;
    };
};
declare class ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Key extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get keySchema(): Key;
    get valueSchema(): Value;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get element(): Value;
    static create<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value>;
    static create<Keys extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keySchema: Keys, valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Keys, Value>;
}
declare class ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get keySchema(): Key;
    get valueSchema(): Value;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: <Key_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keyType: Key_1, valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key_1, Value_1>;
}
declare class ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    min(minSize: number, message?: errorUtil.ErrMessage): this;
    max(maxSize: number, message?: errorUtil.ErrMessage): this;
    size(size: number, message?: errorUtil.ErrMessage): this;
    nonempty(message?: errorUtil.ErrMessage): ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value>;
    static create: <Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value_1>;
}
type ref_96e80e0d4b90dfee05051a6511a8021b83bf4b95eeb61441a31636df9ccac78f<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
declare class ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
    parameters(): Args;
    returnType(): Returns;
    args<Items extends ref_96e80e0d4b90dfee05051a6511a8021b83bf4b95eeb61441a31636df9ccac78f<(typeof ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14)["create"]>[0]>(...items: Items): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<Items, ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>, Returns>;
    returns<NewReturnType extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>>(returnType: NewReturnType): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<Args, NewReturnType>;
    implement<F extends ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args, Returns>>(func: F): ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> extends Returns["_output"] ? (...args: Args["_input"]) => ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> : ref_573b3112058e957a327ec2d95ea68de2ace2d010a1375eec895d2a60f2c52ea4<Args, Returns>;
    strictImplement(func: ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args, Returns>): ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args, Returns>;
    validate: <F extends ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args, Returns>>(func: F) => ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> extends Returns["_output"] ? (...args: Args["_input"]) => ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> : ref_573b3112058e957a327ec2d95ea68de2ace2d010a1375eec895d2a60f2c52ea4<Args, Returns>;
    static create(): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<[
    ], ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>, ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>;
    static create<T extends ref_ebde2625056face6b83d477122422384d007be01e3a47c1ebcccdcaa91789fc5 = ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<[
    ], ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>>(args: T): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<T, ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>;
    static create<T extends ref_ebde2625056face6b83d477122422384d007be01e3a47c1ebcccdcaa91789fc5, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(args: T, returns: U): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<T, U>;
    static create<T extends ref_ebde2625056face6b83d477122422384d007be01e3a47c1ebcccdcaa91789fc5 = ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<[
    ], ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525>(args: T, returns: U, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<T, U>;
}
type ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_output"] extends Array<any> ? (...args: Args["_output"]) => Returns["_input"] : never;
type ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ref_573b3112058e957a327ec2d95ea68de2ace2d010a1375eec895d2a60f2c52ea4<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_input"] extends Array<any> ? (...args: Args["_input"]) => Returns["_output"] : never;
type ref_ebde2625056face6b83d477122422384d007be01e3a47c1ebcccdcaa91789fc5 = ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<[
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
] | [
], ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null>;
declare class ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get schema(): T;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(getter: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T_1>;
}
declare class ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T> {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
    get value(): T;
    static create: <T_1 extends ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>(value: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T_1>;
}
type ref_3ea6c28a52bea762b63dc91839431c59e5e90891a28b766ad3cbddab5d7d122f = keyof Array<any>;
type ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5<T extends string = string> = readonly [
    T,
    ...Array<T>
];
type ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814 = {
    [k: string]: string | number;
    [nu: number]: string;
};
declare class ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814> {
    #private;
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<T[keyof T]>;
    get enum(): T;
    static create: <T_1 extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814>(values: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T_1>;
}
declare class ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5 {
    _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5;
}
interface ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 {
    name: string;
    message: string;
    stack?: string;
}
interface ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6<T = unknown, TReturn = any, TNext = unknown> {
    next(...args: [
    ] | [
        TNext
    ]): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
    return(value: TReturn): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
    throw(e: any): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
    [Symbol.iterator](): ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6<T, TReturn, TNext>;
}
type ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn = any> = ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<T> | ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn>;
interface ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<TYield> {
    done?: false;
    value: TYield;
}
interface ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn> {
    done: true;
    value: TReturn;
}
interface ref_7a4c0ad0b4516899fcc33578a4ffd7ee83499cd4ac74fa1d03a4ab7672eaf373<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}
interface ref_7a4c0ad0b4516899fcc33578a4ffd7ee83499cd4ac74fa1d03a4ab7672eaf373<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<T> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[
        T,
        T
    ]>;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
}
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<T> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface ref_6a264d8a1db8ebde4db3a36debe2e589966c9e6472f13f813e29f0e5f89ca487<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface ref_6a264d8a1db8ebde4db3a36debe2e589966c9e6472f13f813e29f0e5f89ca487<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface ref_5ce51502cad7fff9ab78a5391efba89ed673d60a0ae13c2cb01f520d0b2ae1d8<T> {
    readonly length: number;
    toString(): string;
    toLocaleString(): string;
    concat(...items: Array<ref_1148e30e7bb7c75259f2b3c672e21c7e8c7c52104e5a7bcdd10157fb2b728840<T>>): Array<T>;
    concat(...items: Array<(T | ref_1148e30e7bb7c75259f2b3c672e21c7e8c7c52104e5a7bcdd10157fb2b728840<T>)>): Array<T>;
    join(separator?: string): string;
    slice(start?: number, end?: number): Array<T>;
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every<S extends T>(predicate: (value: T, index: number, array: readonly Array<T>) => value is S, thisArg?: any): this is readonly Array<S>;
    every(predicate: (value: T, index: number, array: readonly Array<T>) => unknown, thisArg?: any): boolean;
    some(predicate: (value: T, index: number, array: readonly Array<T>) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: readonly Array<T>) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: readonly Array<T>) => U, thisArg?: any): Array<U>;
    filter<S extends T>(predicate: (value: T, index: number, array: readonly Array<T>) => value is S, thisArg?: any): Array<S>;
    filter(predicate: (value: T, index: number, array: readonly Array<T>) => unknown, thisArg?: any): Array<T>;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly Array<T>) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly Array<T>) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly Array<T>) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly Array<T>) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly Array<T>) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly Array<T>) => U, initialValue: U): U;
    readonly [n: number]: T;
}
interface ref_1148e30e7bb7c75259f2b3c672e21c7e8c7c52104e5a7bcdd10157fb2b728840<T> {
    readonly length: number;
    readonly [n: number]: T;
    join(separator?: string): string;
    slice(start?: number, end?: number): Array<T>;
}
type ref_8fde223775e1a45ad88ef5b65e127a300ad70a4a09b2936cf0349e3c4042aabe = (((...args: Array<any>) => any) | (new (...args: Array<any>) => any)) | {
    readonly [Symbol.toStringTag]: string;
} | ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 | ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6 | Promise<unknown> | ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
type ref_72cd1895ff89253dd689ba70b3eb1265a8a79f8803b0eaa814a53515927a2e12<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
type ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 = {
    [k: string]: ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 | Array<string>;
};
const ref_d83327e90a48f6201b0ab97aa5a59a1c60a8d925aa6db6facfbfbbd77ad2bbc2 = z.array(z.object({
    id: extendApi(z.number().min(1), {
        description: "ID",
        example: 123,
        format: "int64"
    }),
    name: extendApi(z.string().max(64).nullable(), {
        description: "Name",
        example: "HeyShohei"
    }),
    URL: extendApi(z.string().nullable(), {
        description: "image Url",
        example: "https://example.com/images/main.jpg"
    })
}));
✓ C type main = ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<typeof ref_7c6196b98f1e6842d9864c3d1bb3f248192ed34eae34d56af665816b14088a6c>;
type ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
declare function extendApi<T extends ref_bec682b3783fbc355ebd9771ccab03f682b67ff0bf006f6f8a5f1891ce00aec5>(schema: T, schemaObject?: ref_44ecebf5b8566d19dd0ef074565dd3b50f786ee3598a3129b8d423c5c05e2915): T;
interface ref_bec682b3783fbc355ebd9771ccab03f682b67ff0bf006f6f8a5f1891ce00aec5 {
    metaOpenApi?: ref_44ecebf5b8566d19dd0ef074565dd3b50f786ee3598a3129b8d423c5c05e2915 | Array<ref_44ecebf5b8566d19dd0ef074565dd3b50f786ee3598a3129b8d423c5c05e2915>;
}
type ref_44ecebf5b8566d19dd0ef074565dd3b50f786ee3598a3129b8d423c5c05e2915 = ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f & {
    hideDefinitions?: Array<string>;
};
interface ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f {
    discriminator?: ref_07d495b36bd1ef30705ea2e98a9e3d9476ddca83e3a14c55bebbb3a2bf87f7bb;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: ref_005d3bc16d97ae63ce5c5dadcd9b73f5f7fee9f19ea2191ab2181ff8a2c8d880;
    externalDocs?: ref_f6a5389c868a45bc22d655594d24399ef590d3bdc968ab9086467eb7d28ffaaa;
    example?: any;
    examples?: Array<any>;
    deprecated?: boolean;
    type?: ref_7319cfc02c847513644ad59f4897bf91c072bacc57a54e3192203225d53eb9dd | Array<ref_7319cfc02c847513644ad59f4897bf91c072bacc57a54e3192203225d53eb9dd>;
    format?: "int32" | "int64" | "float" | "double" | "byte" | "binary" | "date" | "date-time" | "password" | string;
    allOf?: Array<(ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4)>;
    oneOf?: Array<(ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4)>;
    anyOf?: Array<(ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4)>;
    not?: ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4;
    items?: ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4;
    properties?: {
        [propertyName: string]: ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4;
    };
    additionalProperties?: ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4 | boolean;
    propertyNames?: ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4;
    description?: string;
    default?: any;
    title?: string;
    multipleOf?: number;
    maximum?: number;
    const?: any;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: Array<string>;
    enum?: Array<any>;
    prefixItems?: Array<(ref_2185e26e43428e28bb3dc83b0ae564f50d9a7af801b1ecaeb404bafb96a1272f | ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4)>;
    contentMediaType?: string;
    contentEncoding?: string;
}
interface ref_07d495b36bd1ef30705ea2e98a9e3d9476ddca83e3a14c55bebbb3a2bf87f7bb {
    propertyName: string;
    mapping?: {
        [key: string]: string;
    };
}
interface ref_005d3bc16d97ae63ce5c5dadcd9b73f5f7fee9f19ea2191ab2181ff8a2c8d880 {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
}
interface ref_f6a5389c868a45bc22d655594d24399ef590d3bdc968ab9086467eb7d28ffaaa {
    description?: string;
    url: string;
}
type ref_7319cfc02c847513644ad59f4897bf91c072bacc57a54e3192203225d53eb9dd = "integer" | "number" | "string" | "boolean" | "object" | "null" | "array";
interface ref_64396ed1aeab41663868c4fc9abfb711262df121f4525d0a329f733f9ebdebb4 {
    $ref: string;
    summary?: string;
    description?: string;
}reation Complete
