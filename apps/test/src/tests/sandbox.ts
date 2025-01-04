
module内部の参照をhashにする
できておらず参照できていない



 🎉🎉🎉 type main_output_target = { username: string; location: { latitude: number; longitude: number }; strings: {  } }; // Extracted from typeAlias

type main = ref_67caf8dc3f4af06574259e3fa1ea9fc5ec87d5ab7ba7b10b9f6bd216405cfaf6;
type ref_67caf8dc3f4af06574259e3fa1ea9fc5ec87d5ab7ba7b10b9f6bd216405cfaf6 = z.infer<typeof ref_3604bc6bf0c41459126b08507bf25d93059e854107810406a08f922ca3a8352a>;
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
        export function joinValues<T extends any[]>(array: T, separator?: string): string;
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
        nanoid(message?: errorUtil.ErrMessage): ZodString;
        cuid(message?: errorUtil.ErrMessage): ZodString;
        cuid2(message?: errorUtil.ErrMessage): ZodString;
        ulid(message?: errorUtil.ErrMessage): ZodString;
        base64(message?: errorUtil.ErrMessage): ZodString;
        base64url(message?: errorUtil.ErrMessage): ZodString;
        jwt(options?: {
            alg?: string;
            message?: string;
        }): ZodString;
        ip(options?: string | {
            version?: IpVersion;
            message?: string;
        }): ZodString;
        cidr(options?: string | {
            version?: IpVersion;
            message?: string;
        }): ZodString;
        datetime(options?: string | {
            message?: string | undefined;
            precision?: number | null;
            offset?: boolean;
            local?: boolean;
        }): ZodString;
        date(message?: string): ZodString;
        time(options?: string | {
            message?: string | undefined;
            precision?: number | null;
        }): ZodString;
        duration(message?: errorUtil.ErrMessage): ZodString;
        regex(regex: RegExp, message?: errorUtil.ErrMessage): ZodString;
        includes(value: string, options?: {
            message?: string;
            position?: number;
        }): ZodString;
        startsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
        endsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
        min(minLength: number, message?: errorUtil.ErrMessage): ZodString;
        max(maxLength: number, message?: errorUtil.ErrMessage): ZodString;
        length(len: number, message?: errorUtil.ErrMessage): ZodString;
        nonempty(message?: errorUtil.ErrMessage): ZodString;
        trim(): ZodString;
        toLowerCase(): ZodString;
        toUpperCase(): ZodString;
        get isDatetime(): boolean;
        get isDate(): boolean;
        get isTime(): boolean;
        get isDuration(): boolean;
        get isEmail(): boolean;
        get isURL(): boolean;
        get isEmoji(): boolean;
        get isUUID(): boolean;
        get isNANOID(): boolean;
        get isCUID(): boolean;
        get isCUID2(): boolean;
        get isULID(): boolean;
        get isIP(): boolean;
        get isCIDR(): boolean;
        get isBase64(): boolean;
        get isBase64url(): boolean;
        get minLength(): number | null;
        get maxLength(): number | null;
        static create: (params?: RawCreateParams & {
            coerce?: true;
        }) => ZodString;
    }
    export type ZodNumberCheck = {
        kind: "min";
        value: number;
        inclusive: boolean;
        message?: string;
    } | {
        kind: "max";
        value: number;
        inclusive: boolean;
        message?: string;
    } | {
        kind: "int";
        message?: string;
    } | {
        kind: "multipleOf";
        value: number;
        message?: string;
    } | {
        kind: "finite";
        message?: string;
    };
    export interface ZodNumberDef extends ZodTypeDef {
        checks: ZodNumberCheck[];
        typeName: ZodFirstPartyTypeKind.ZodNumber;
        coerce: boolean;
    }
    export declare class ZodNumber extends ZodType<number, ZodNumberDef, number> {
        _parse(input: ParseInput): ParseReturnType<number>;
        static create: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodNumber;
        gte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
        min: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
        gt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
        lte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
        max: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
        lt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
        protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ZodNumber;
        _addCheck(check: ZodNumberCheck): ZodNumber;
        int(message?: errorUtil.ErrMessage): ZodNumber;
        positive(message?: errorUtil.ErrMessage): ZodNumber;
        negative(message?: errorUtil.ErrMessage): ZodNumber;
        nonpositive(message?: errorUtil.ErrMessage): ZodNumber;
        nonnegative(message?: errorUtil.ErrMessage): ZodNumber;
        multipleOf(value: number, message?: errorUtil.ErrMessage): ZodNumber;
        step: (value: number, message?: errorUtil.ErrMessage) => ZodNumber;
        finite(message?: errorUtil.ErrMessage): ZodNumber;
        safe(message?: errorUtil.ErrMessage): ZodNumber;
        get minValue(): number | null;
        get maxValue(): number | null;
        get isInt(): boolean;
        get isFinite(): boolean;
    }
    export type ZodBigIntCheck = {
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
    export interface ZodBigIntDef extends ZodTypeDef {
        checks: ZodBigIntCheck[];
        typeName: ZodFirstPartyTypeKind.ZodBigInt;
        coerce: boolean;
    }
    export declare class ZodBigInt extends ZodType<bigint, ZodBigIntDef, bigint> {
        _parse(input: ParseInput): ParseReturnType<bigint>;
        _getInvalidInput(input: ParseInput): INVALID;
        static create: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodBigInt;
        gte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
        min: (value: bigint, message?: errorUtil.ErrMessage) => ZodBigInt;
        gt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
        lte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
        max: (value: bigint, message?: errorUtil.ErrMessage) => ZodBigInt;
        lt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
        protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string): ZodBigInt;
        _addCheck(check: ZodBigIntCheck): ZodBigInt;
        positive(message?: errorUtil.ErrMessage): ZodBigInt;
        negative(message?: errorUtil.ErrMessage): ZodBigInt;
        nonpositive(message?: errorUtil.ErrMessage): ZodBigInt;
        nonnegative(message?: errorUtil.ErrMessage): ZodBigInt;
        multipleOf(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
        get minValue(): bigint | null;
        get maxValue(): bigint | null;
    }
    export interface ZodBooleanDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodBoolean;
        coerce: boolean;
    }
    export declare class ZodBoolean extends ZodType<boolean, ZodBooleanDef, boolean> {
        _parse(input: ParseInput): ParseReturnType<boolean>;
        static create: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodBoolean;
    }
    export type ZodDateCheck = {
        kind: "min";
        value: number;
        message?: string;
    } | {
        kind: "max";
        value: number;
        message?: string;
    };
    export interface ZodDateDef extends ZodTypeDef {
        checks: ZodDateCheck[];
        coerce: boolean;
        typeName: ZodFirstPartyTypeKind.ZodDate;
    }
    export declare class ZodDate extends ZodType<Date, ZodDateDef, Date> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        _addCheck(check: ZodDateCheck): ZodDate;
        min(minDate: Date, message?: errorUtil.ErrMessage): ZodDate;
        max(maxDate: Date, message?: errorUtil.ErrMessage): ZodDate;
        get minDate(): Date | null;
        get maxDate(): Date | null;
        static create: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodDate;
    }
    export interface ZodSymbolDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodSymbol;
    }
    export declare class ZodSymbol extends ZodType<symbol, ZodSymbolDef, symbol> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodSymbol;
    }
    export interface ZodUndefinedDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodUndefined;
    }
    export declare class ZodUndefined extends ZodType<undefined, ZodUndefinedDef, undefined> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        params?: RawCreateParams;
        static create: (params?: RawCreateParams) => ZodUndefined;
    }
    export interface ZodNullDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNull;
    }
    export declare class ZodNull extends ZodType<null, ZodNullDef, null> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodNull;
    }
    export interface ZodAnyDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodAny;
    }
    export declare class ZodAny extends ZodType<any, ZodAnyDef, any> {
        _any: true;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodAny;
    }
    export interface ZodUnknownDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodUnknown;
    }
    export declare class ZodUnknown extends ZodType<unknown, ZodUnknownDef, unknown> {
        _unknown: true;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodUnknown;
    }
    export interface ZodNeverDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNever;
    }
    export declare class ZodNever extends ZodType<never, ZodNeverDef, never> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodNever;
    }
    export interface ZodVoidDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodVoid;
    }
    export declare class ZodVoid extends ZodType<void, ZodVoidDef, void> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: (params?: RawCreateParams) => ZodVoid;
    }
    export interface ZodArrayDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        type: T;
        typeName: ZodFirstPartyTypeKind.ZodArray;
        exactLength: {
            value: number;
            message?: string;
        } | null;
        minLength: {
            value: number;
            message?: string;
        } | null;
        maxLength: {
            value: number;
            message?: string;
        } | null;
    }
    export type ArrayCardinality = "many" | "atleastone";
    export type arrayOutputType<T extends ZodTypeAny, Cardinality extends ArrayCardinality = "many"> = Cardinality extends "atleastone" ? [
        T["_output"],
        ...T["_output"][]
    ] : T["_output"][];
    export declare class ZodArray<T extends ZodTypeAny, Cardinality extends ArrayCardinality = "many"> extends ZodType<arrayOutputType<T, Cardinality>, ZodArrayDef<T>, Cardinality extends "atleastone" ? [
        T["_input"],
        ...T["_input"][]
    ] : T["_input"][]> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get element(): T;
        min(minLength: number, message?: errorUtil.ErrMessage): this;
        max(maxLength: number, message?: errorUtil.ErrMessage): this;
        length(len: number, message?: errorUtil.ErrMessage): this;
        nonempty(message?: errorUtil.ErrMessage): ZodArray<T, "atleastone">;
        static create: <T_1 extends ZodTypeAny>(schema: T_1, params?: RawCreateParams) => ZodArray<T_1, "many">;
    }
    export type ZodNonEmptyArray<T extends ZodTypeAny> = ZodArray<T, "atleastone">;
    export type UnknownKeysParam = "passthrough" | "strict" | "strip";
    export interface ZodObjectDef<T extends ZodRawShape = ZodRawShape, UnknownKeys extends UnknownKeysParam = UnknownKeysParam, Catchall extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodObject;
        shape: () => T;
        catchall: Catchall;
        unknownKeys: UnknownKeys;
    }
    export type mergeTypes<A, B> = {
        [k in keyof A | keyof B]: k extends keyof B ? B[k] : k extends keyof A ? A[k] : never;
    };
    export type objectOutputType<Shape extends ZodRawShape, Catchall extends ZodTypeAny, UnknownKeys extends UnknownKeysParam = UnknownKeysParam> = objectUtil.flatten<objectUtil.addQuestionMarks<baseObjectOutputType<Shape>>> & CatchallOutput<Catchall> & PassthroughType<UnknownKeys>;
    export type baseObjectOutputType<Shape extends ZodRawShape> = {
        [k in keyof Shape]: Shape[k]["_output"];
    };
    export type objectInputType<Shape extends ZodRawShape, Catchall extends ZodTypeAny, UnknownKeys extends UnknownKeysParam = UnknownKeysParam> = objectUtil.flatten<baseObjectInputType<Shape>> & CatchallInput<Catchall> & PassthroughType<UnknownKeys>;
    export type baseObjectInputType<Shape extends ZodRawShape> = objectUtil.addQuestionMarks<{
        [k in keyof Shape]: Shape[k]["_input"];
    }>;
    export type CatchallOutput<T extends ZodType> = ZodType extends T ? unknown : {
        [k: string]: T["_output"];
    };
    export type CatchallInput<T extends ZodType> = ZodType extends T ? unknown : {
        [k: string]: T["_input"];
    };
    export type PassthroughType<T extends UnknownKeysParam> = T extends "passthrough" ? {
        [k: string]: unknown;
    } : unknown;
    export type deoptional<T extends ZodTypeAny> = T extends ZodOptional<infer U> ? deoptional<U> : T extends ZodNullable<infer U> ? ZodNullable<deoptional<U>> : T;
    export type SomeZodObject = ZodObject<ZodRawShape, UnknownKeysParam, ZodTypeAny>;
    export type noUnrecognized<Obj extends object, Shape extends object> = {
        [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never;
    };
    export declare class ZodObject<T extends ZodRawShape, UnknownKeys extends UnknownKeysParam = UnknownKeysParam, Catchall extends ZodTypeAny = ZodTypeAny, Output = objectOutputType<T, Catchall, UnknownKeys>, Input = objectInputType<T, Catchall, UnknownKeys>> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
        private _cached;
        _getCached(): {
            shape: T;
            keys: string[];
        };
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get shape(): T;
        strict(message?: errorUtil.ErrMessage): ZodObject<T, "strict", Catchall>;
        strip(): ZodObject<T, "strip", Catchall>;
        passthrough(): ZodObject<T, "passthrough", Catchall>;
        nonstrict: () => ZodObject<T, "passthrough", Catchall>;
        extend<Augmentation extends ZodRawShape>(augmentation: Augmentation): ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        augment: <Augmentation extends ZodRawShape>(augmentation: Augmentation) => ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        merge<Incoming extends AnyZodObject, Augmentation extends Incoming["shape"]>(merging: Incoming): ZodObject<objectUtil.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
        setKey<Key extends string, Schema extends ZodTypeAny>(key: Key, schema: Schema): ZodObject<T & {
            [k in Key]: Schema;
        }, UnknownKeys, Catchall>;
        catchall<Index extends ZodTypeAny>(index: Index): ZodObject<T, UnknownKeys, Index>;
        pick<Mask extends util.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
        omit<Mask extends util.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall>;
        deepPartial(): partialUtil.DeepPartial<this>;
        partial(): ZodObject<{
            [k in keyof T]: ZodOptional<T[k]>;
        }, UnknownKeys, Catchall>;
        partial<Mask extends util.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
            [k in keyof T]: k extends keyof Mask ? ZodOptional<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        required(): ZodObject<{
            [k in keyof T]: deoptional<T[k]>;
        }, UnknownKeys, Catchall>;
        required<Mask extends util.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
            [k in keyof T]: k extends keyof Mask ? deoptional<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        keyof(): ZodEnum<enumUtil.UnionToTupleString<keyof T>>;
        static create: <T_1 extends ZodRawShape>(shape: T_1, params?: RawCreateParams) => ZodObject<T_1, "strip", ZodTypeAny, objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any> extends infer T_2 ? {
            [k in keyof T_2]: objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>[k];
        } : never, baseObjectInputType<T_1> extends infer T_3 ? {
            [k_1 in keyof T_3]: baseObjectInputType<T_1>[k_1];
        } : never>;
        static strictCreate: <T_1 extends ZodRawShape>(shape: T_1, params?: RawCreateParams) => ZodObject<T_1, "strict", ZodTypeAny, objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any> extends infer T_2 ? {
            [k in keyof T_2]: objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>[k];
        } : never, baseObjectInputType<T_1> extends infer T_3 ? {
            [k_1 in keyof T_3]: baseObjectInputType<T_1>[k_1];
        } : never>;
        static lazycreate: <T_1 extends ZodRawShape>(shape: () => T_1, params?: RawCreateParams) => ZodObject<T_1, "strip", ZodTypeAny, objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any> extends infer T_2 ? {
            [k in keyof T_2]: objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>[k];
        } : never, baseObjectInputType<T_1> extends infer T_3 ? {
            [k_1 in keyof T_3]: baseObjectInputType<T_1>[k_1];
        } : never>;
    }
    export type AnyZodObject = ZodObject<any, any, any>;
    export type ZodUnionOptions = Readonly<[
        ZodTypeAny,
        ...ZodTypeAny[]
    ]>;
    export interface ZodUnionDef<T extends ZodUnionOptions = Readonly<[
        ZodTypeAny,
        ZodTypeAny,
        ...ZodTypeAny[]
    ]>> extends ZodTypeDef {
        options: T;
        typeName: ZodFirstPartyTypeKind.ZodUnion;
    }
    export declare class ZodUnion<T extends ZodUnionOptions> extends ZodType<T[number]["_output"], ZodUnionDef<T>, T[number]["_input"]> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get options(): T;
        static create: <T_1 extends readonly [
            ZodTypeAny,
            ZodTypeAny,
            ...ZodTypeAny[]
        ]>(types: T_1, params?: RawCreateParams) => ZodUnion<T_1>;
    }
    export type ZodDiscriminatedUnionOption<Discriminator extends string> = ZodObject<{
        [key in Discriminator]: ZodTypeAny;
    } & ZodRawShape, UnknownKeysParam, ZodTypeAny>;
    export interface ZodDiscriminatedUnionDef<Discriminator extends string, Options extends readonly ZodDiscriminatedUnionOption<string>[] = ZodDiscriminatedUnionOption<string>[]> extends ZodTypeDef {
        discriminator: Discriminator;
        options: Options;
        optionsMap: Map<Primitive, ZodDiscriminatedUnionOption<any>>;
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion;
    }
    export declare class ZodDiscriminatedUnion<Discriminator extends string, Options extends readonly ZodDiscriminatedUnionOption<Discriminator>[]> extends ZodType<output<Options[number]>, ZodDiscriminatedUnionDef<Discriminator, Options>, input<Options[number]>> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get discriminator(): Discriminator;
        get options(): Options;
        get optionsMap(): Map<Primitive, ZodDiscriminatedUnionOption<any>>;
        static create<Discriminator extends string, Types extends readonly [
            ZodDiscriminatedUnionOption<Discriminator>,
            ...ZodDiscriminatedUnionOption<Discriminator>[]
        ]>(discriminator: Discriminator, options: Types, params?: RawCreateParams): ZodDiscriminatedUnion<Discriminator, Types>;
    }
    export interface ZodIntersectionDef<T extends ZodTypeAny = ZodTypeAny, U extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        left: T;
        right: U;
        typeName: ZodFirstPartyTypeKind.ZodIntersection;
    }
    export declare class ZodIntersection<T extends ZodTypeAny, U extends ZodTypeAny> extends ZodType<T["_output"] & U["_output"], ZodIntersectionDef<T, U>, T["_input"] & U["_input"]> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <T_1 extends ZodTypeAny, U_1 extends ZodTypeAny>(left: T_1, right: U_1, params?: RawCreateParams) => ZodIntersection<T_1, U_1>;
    }
    export type ZodTupleItems = [
        ZodTypeAny,
        ...ZodTypeAny[]
    ];
    export type AssertArray<T> = T extends any[] ? T : never;
    export type OutputTypeOfTuple<T extends ZodTupleItems | [
    ]> = AssertArray<{
        [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never;
    }>;
    export type OutputTypeOfTupleWithRest<T extends ZodTupleItems | [
    ], Rest extends ZodTypeAny | null = null> = Rest extends ZodTypeAny ? [
        ...OutputTypeOfTuple<T>,
        ...Rest["_output"][]
    ] : OutputTypeOfTuple<T>;
    export type InputTypeOfTuple<T extends ZodTupleItems | [
    ]> = AssertArray<{
        [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never;
    }>;
    export type InputTypeOfTupleWithRest<T extends ZodTupleItems | [
    ], Rest extends ZodTypeAny | null = null> = Rest extends ZodTypeAny ? [
        ...InputTypeOfTuple<T>,
        ...Rest["_input"][]
    ] : InputTypeOfTuple<T>;
    export interface ZodTupleDef<T extends ZodTupleItems | [
    ] = ZodTupleItems, Rest extends ZodTypeAny | null = null> extends ZodTypeDef {
        items: T;
        rest: Rest;
        typeName: ZodFirstPartyTypeKind.ZodTuple;
    }
    export type AnyZodTuple = ZodTuple<[
        ZodTypeAny,
        ...ZodTypeAny[]
    ] | [
    ], ZodTypeAny | null>;
    export declare class ZodTuple<T extends [
        ZodTypeAny,
        ...ZodTypeAny[]
    ] | [
    ] = [
        ZodTypeAny,
        ...ZodTypeAny[]
    ], Rest extends ZodTypeAny | null = null> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get items(): T;
        rest<Rest extends ZodTypeAny>(rest: Rest): ZodTuple<T, Rest>;
        static create: <T_1 extends [
        ] | [
            ZodTypeAny,
            ...ZodTypeAny[]
        ]>(schemas: T_1, params?: RawCreateParams) => ZodTuple<T_1, null>;
    }
    export interface ZodRecordDef<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        valueType: Value;
        keyType: Key;
        typeName: ZodFirstPartyTypeKind.ZodRecord;
    }
    export type KeySchema = ZodType<string | number | symbol, any, any>;
    export type RecordType<K extends string | number | symbol, V> = [
        string
    ] extends [
        K
    ] ? Record<K, V> : [
        number
    ] extends [
        K
    ] ? Record<K, V> : [
        symbol
    ] extends [
        K
    ] ? Record<K, V> : [
        BRAND<string | number | symbol>
    ] extends [
        K
    ] ? Record<K, V> : Partial<Record<K, V>>;
    export declare class ZodRecord<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<RecordType<Key["_output"], Value["_output"]>, ZodRecordDef<Key, Value>, RecordType<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get element(): Value;
        static create<Value extends ZodTypeAny>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>;
        static create<Keys extends KeySchema, Value extends ZodTypeAny>(keySchema: Keys, valueType: Value, params?: RawCreateParams): ZodRecord<Keys, Value>;
    }
    export interface ZodMapDef<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        valueType: Value;
        keyType: Key;
        typeName: ZodFirstPartyTypeKind.ZodMap;
    }
    export declare class ZodMap<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<Map<Key["_output"], Value["_output"]>, ZodMapDef<Key, Value>, Map<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <Key_1 extends ZodTypeAny = ZodTypeAny, Value_1 extends ZodTypeAny = ZodTypeAny>(keyType: Key_1, valueType: Value_1, params?: RawCreateParams) => ZodMap<Key_1, Value_1>;
    }
    export interface ZodSetDef<Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        valueType: Value;
        typeName: ZodFirstPartyTypeKind.ZodSet;
        minSize: {
            value: number;
            message?: string;
        } | null;
        maxSize: {
            value: number;
            message?: string;
        } | null;
    }
    export declare class ZodSet<Value extends ZodTypeAny = ZodTypeAny> extends ZodType<Set<Value["_output"]>, ZodSetDef<Value>, Set<Value["_input"]>> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        min(minSize: number, message?: errorUtil.ErrMessage): this;
        max(maxSize: number, message?: errorUtil.ErrMessage): this;
        size(size: number, message?: errorUtil.ErrMessage): this;
        nonempty(message?: errorUtil.ErrMessage): ZodSet<Value>;
        static create: <Value_1 extends ZodTypeAny = ZodTypeAny>(valueType: Value_1, params?: RawCreateParams) => ZodSet<Value_1>;
    }
    export interface ZodFunctionDef<Args extends ZodTuple<any, any> = ZodTuple<any, any>, Returns extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        args: Args;
        returns: Returns;
        typeName: ZodFirstPartyTypeKind.ZodFunction;
    }
    export type OuterTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> = Args["_input"] extends Array<any> ? (...args: Args["_input"]) => Returns["_output"] : never;
    export type InnerTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> = Args["_output"] extends Array<any> ? (...args: Args["_output"]) => Returns["_input"] : never;
    export declare class ZodFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> extends ZodType<OuterTypeOfFunction<Args, Returns>, ZodFunctionDef<Args, Returns>, InnerTypeOfFunction<Args, Returns>> {
        _parse(input: ParseInput): ParseReturnType<any>;
        parameters(): Args;
        returnType(): Returns;
        args<Items extends Parameters<(typeof ZodTuple)["create"]>[0]>(...items: Items): ZodFunction<ZodTuple<Items, ZodUnknown>, Returns>;
        returns<NewReturnType extends ZodType<any, any, any>>(returnType: NewReturnType): ZodFunction<Args, NewReturnType>;
        implement<F extends InnerTypeOfFunction<Args, Returns>>(func: F): ReturnType<F> extends Returns["_output"] ? (...args: Args["_input"]) => ReturnType<F> : OuterTypeOfFunction<Args, Returns>;
        strictImplement(func: InnerTypeOfFunction<Args, Returns>): InnerTypeOfFunction<Args, Returns>;
        validate: <F extends InnerTypeOfFunction<Args, Returns>>(func: F) => ReturnType<F> extends Returns["_output"] ? (...args: Args["_input"]) => ReturnType<F> : OuterTypeOfFunction<Args, Returns>;
        static create(): ZodFunction<ZodTuple<[
        ], ZodUnknown>, ZodUnknown>;
        static create<T extends AnyZodTuple = ZodTuple<[
        ], ZodUnknown>>(args: T): ZodFunction<T, ZodUnknown>;
        static create<T extends AnyZodTuple, U extends ZodTypeAny>(args: T, returns: U): ZodFunction<T, U>;
        static create<T extends AnyZodTuple = ZodTuple<[
        ], ZodUnknown>, U extends ZodTypeAny = ZodUnknown>(args: T, returns: U, params?: RawCreateParams): ZodFunction<T, U>;
    }
    export interface ZodLazyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        getter: () => T;
        typeName: ZodFirstPartyTypeKind.ZodLazy;
    }
    export declare class ZodLazy<T extends ZodTypeAny> extends ZodType<output<T>, ZodLazyDef<T>, input<T>> {
        get schema(): T;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <T_1 extends ZodTypeAny>(getter: () => T_1, params?: RawCreateParams) => ZodLazy<T_1>;
    }
    export interface ZodLiteralDef<T = any> extends ZodTypeDef {
        value: T;
        typeName: ZodFirstPartyTypeKind.ZodLiteral;
    }
    export declare class ZodLiteral<T> extends ZodType<T, ZodLiteralDef<T>, T> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get value(): T;
        static create: <T_1 extends Primitive>(value: T_1, params?: RawCreateParams) => ZodLiteral<T_1>;
    }
    export type ArrayKeys = keyof any[];
    export type Indices<T> = Exclude<keyof T, ArrayKeys>;
    export type EnumValues<T extends string = string> = readonly [
        T,
        ...T[]
    ];
    export type Values<T extends EnumValues> = {
        [k in T[number]]: k;
    };
    export interface ZodEnumDef<T extends EnumValues = EnumValues> extends ZodTypeDef {
        values: T;
        typeName: ZodFirstPartyTypeKind.ZodEnum;
    }
    export type Writeable<T> = {
        -readonly [P in keyof T]: T[P];
    };
    export type FilterEnum<Values, ToExclude> = Values extends [
    ] ? [
    ] : Values extends [
        infer Head,
        ...infer Rest
    ] ? Head extends ToExclude ? FilterEnum<Rest, ToExclude> : [
        Head,
        ...FilterEnum<Rest, ToExclude>
    ] : never;
    export type typecast<A, T> = A extends T ? A : never;
    declare function createZodEnum<U extends string, T extends Readonly<[
        U,
        ...U[]
    ]>>(values: T, params?: RawCreateParams): ZodEnum<Writeable<T>>;
    declare function createZodEnum<U extends string, T extends [
        U,
        ...U[]
    ]>(values: T, params?: RawCreateParams): ZodEnum<T>;
    export declare class ZodEnum<T extends [
        string,
        ...string[]
    ]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
        #private;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        get options(): T;
        get enum(): Values<T>;
        get Values(): Values<T>;
        get Enum(): Values<T>;
        extract<ToExtract extends readonly [
            T[number],
            ...T[number][]
        ]>(values: ToExtract, newDef?: RawCreateParams): ZodEnum<Writeable<ToExtract>>;
        exclude<ToExclude extends readonly [
            T[number],
            ...T[number][]
        ]>(values: ToExclude, newDef?: RawCreateParams): ZodEnum<typecast<Writeable<FilterEnum<T, ToExclude[number]>>, [
            string,
            ...string[]
        ]>>;
        static create: typeof createZodEnum;
    }
    export interface ZodNativeEnumDef<T extends EnumLike = EnumLike> extends ZodTypeDef {
        values: T;
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum;
    }
    export type EnumLike = {
        [k: string]: string | number;
        [nu: number]: string;
    };
    export declare class ZodNativeEnum<T extends EnumLike> extends ZodType<T[keyof T], ZodNativeEnumDef<T>, T[keyof T]> {
        #private;
        _parse(input: ParseInput): ParseReturnType<T[keyof T]>;
        get enum(): T;
        static create: <T_1 extends EnumLike>(values: T_1, params?: RawCreateParams) => ZodNativeEnum<T_1>;
    }
    export interface ZodPromiseDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        type: T;
        typeName: ZodFirstPartyTypeKind.ZodPromise;
    }
    export declare class ZodPromise<T extends ZodTypeAny> extends ZodType<Promise<T["_output"]>, ZodPromiseDef<T>, Promise<T["_input"]>> {
        unwrap(): T;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <T_1 extends ZodTypeAny>(schema: T_1, params?: RawCreateParams) => ZodPromise<T_1>;
    }
    export type Refinement<T> = (arg: T, ctx: RefinementCtx) => any;
    export type SuperRefinement<T> = (arg: T, ctx: RefinementCtx) => void | Promise<void>;
    export type RefinementEffect<T> = {
        type: "refinement";
        refinement: (arg: T, ctx: RefinementCtx) => any;
    };
    export type TransformEffect<T> = {
        type: "transform";
        transform: (arg: T, ctx: RefinementCtx) => any;
    };
    export type PreprocessEffect<T> = {
        type: "preprocess";
        transform: (arg: T, ctx: RefinementCtx) => any;
    };
    export type Effect<T> = RefinementEffect<T> | TransformEffect<T> | PreprocessEffect<T>;
    export interface ZodEffectsDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        schema: T;
        typeName: ZodFirstPartyTypeKind.ZodEffects;
        effect: Effect<any>;
    }
    export declare class ZodEffects<T extends ZodTypeAny, Output = output<T>, Input = input<T>> extends ZodType<Output, ZodEffectsDef<T>, Input> {
        innerType(): T;
        sourceType(): T;
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <I extends ZodTypeAny>(schema: I, effect: Effect<I["_output"]>, params?: RawCreateParams) => ZodEffects<I, I["_output"]>;
        static createWithPreprocess: <I extends ZodTypeAny>(preprocess: (arg: unknown, ctx: RefinementCtx) => unknown, schema: I, params?: RawCreateParams) => ZodEffects<I, I["_output"], unknown>;
    }
    export { ZodEffects as ZodTransformer };
    export interface ZodOptionalDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodOptional;
    }
    export type ZodOptionalType<T extends ZodTypeAny> = ZodOptional<T>;
    export declare class ZodOptional<T extends ZodTypeAny> extends ZodType<T["_output"] | undefined, ZodOptionalDef<T>, T["_input"] | undefined> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodOptional<T_1>;
    }
    export interface ZodNullableDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodNullable;
    }
    export type ZodNullableType<T extends ZodTypeAny> = ZodNullable<T>;
    export declare class ZodNullable<T extends ZodTypeAny> extends ZodType<T["_output"] | null, ZodNullableDef<T>, T["_input"] | null> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodNullable<T_1>;
    }
    export interface ZodDefaultDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        innerType: T;
        defaultValue: () => util.noUndefined<T["_input"]>;
        typeName: ZodFirstPartyTypeKind.ZodDefault;
    }
    export declare class ZodDefault<T extends ZodTypeAny> extends ZodType<util.noUndefined<T["_output"]>, ZodDefaultDef<T>, T["_input"] | undefined> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        removeDefault(): T;
        static create: <T_1 extends ZodTypeAny>(type: T_1, params: {
            errorMap?: ZodErrorMap | undefined;
            invalid_type_error?: string | undefined;
            required_error?: string | undefined;
            message?: string | undefined;
            description?: string | undefined;
        } & {
            default: T_1["_input"] | (() => util.noUndefined<T_1["_input"]>);
        }) => ZodDefault<T_1>;
    }
    export interface ZodCatchDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        innerType: T;
        catchValue: (ctx: {
            error: ZodError;
            input: unknown;
        }) => T["_input"];
        typeName: ZodFirstPartyTypeKind.ZodCatch;
    }
    export declare class ZodCatch<T extends ZodTypeAny> extends ZodType<T["_output"], ZodCatchDef<T>, unknown> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        removeCatch(): T;
        static create: <T_1 extends ZodTypeAny>(type: T_1, params: {
            errorMap?: ZodErrorMap | undefined;
            invalid_type_error?: string | undefined;
            required_error?: string | undefined;
            message?: string | undefined;
            description?: string | undefined;
        } & {
            catch: T_1["_output"] | (() => T_1["_output"]);
        }) => ZodCatch<T_1>;
    }
    export interface ZodNaNDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNaN;
    }
    export declare class ZodNaN extends ZodType<number, ZodNaNDef, number> {
        _parse(input: ParseInput): ParseReturnType<any>;
        static create: (params?: RawCreateParams) => ZodNaN;
    }
    export interface ZodBrandedDef<T extends ZodTypeAny> extends ZodTypeDef {
        type: T;
        typeName: ZodFirstPartyTypeKind.ZodBranded;
    }
    export declare const BRAND: unique symbol;
    export type BRAND<T extends string | number | symbol> = {
        [BRAND]: {
            [k in T]: true;
        };
    };
    export declare class ZodBranded<T extends ZodTypeAny, B extends string | number | symbol> extends ZodType<T["_output"] & BRAND<B>, ZodBrandedDef<T>, T["_input"]> {
        _parse(input: ParseInput): ParseReturnType<any>;
        unwrap(): T;
    }
    export interface ZodPipelineDef<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodTypeDef {
        in: A;
        out: B;
        typeName: ZodFirstPartyTypeKind.ZodPipeline;
    }
    export declare class ZodPipeline<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodType<B["_output"], ZodPipelineDef<A, B>, A["_input"]> {
        _parse(input: ParseInput): ParseReturnType<any>;
        static create<A extends ZodTypeAny, B extends ZodTypeAny>(a: A, b: B): ZodPipeline<A, B>;
    }
    type BuiltIn = (((...args: any[]) => any) | (new (...args: any[]) => any)) | {
        readonly [Symbol.toStringTag]: string;
    } | Date | Error | Generator | Promise<unknown> | RegExp;
    type MakeReadonly<T> = T extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T extends Set<infer V> ? ReadonlySet<V> : T extends [
        infer Head,
        ...infer Tail
    ] ? readonly [
        Head,
        ...Tail
    ] : T extends Array<infer V> ? ReadonlyArray<V> : T extends BuiltIn ? T : Readonly<T>;
    export interface ZodReadonlyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodReadonly;
    }
    export declare class ZodReadonly<T extends ZodTypeAny> extends ZodType<MakeReadonly<T["_output"]>, ZodReadonlyDef<T>, MakeReadonly<T["_input"]>> {
        _parse(input: ParseInput): ParseReturnType<this["_output"]>;
        static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodReadonly<T_1>;
        unwrap(): T;
    }
    type CustomParams = CustomErrorParams & {
        fatal?: boolean;
    };
    export declare function custom<T>(check?: (data: any) => any, params?: string | CustomParams | ((input: any) => CustomParams), fatal?: boolean): ZodType<T, ZodTypeDef, T>;
    export { ZodType as Schema, ZodType as ZodSchema };
    export declare const late: {
        object: <T extends ZodRawShape>(shape: () => T, params?: RawCreateParams) => ZodObject<T, "strip">;
    };
    export declare enum ZodFirstPartyTypeKind {
        ZodString = "ZodString",
        ZodNumber = "ZodNumber",
        ZodNaN = "ZodNaN",
        ZodBigInt = "ZodBigInt",
        ZodBoolean = "ZodBoolean",
        ZodDate = "ZodDate",
        ZodSymbol = "ZodSymbol",
        ZodUndefined = "ZodUndefined",
        ZodNull = "ZodNull",
        ZodAny = "ZodAny",
        ZodUnknown = "ZodUnknown",
        ZodNever = "ZodNever",
        ZodVoid = "ZodVoid",
        ZodArray = "ZodArray",
        ZodObject = "ZodObject",
        ZodUnion = "ZodUnion",
        ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
        ZodIntersection = "ZodIntersection",
        ZodTuple = "ZodTuple",
        ZodRecord = "ZodRecord",
        ZodMap = "ZodMap",
        ZodSet = "ZodSet",
        ZodFunction = "ZodFunction",
        ZodLazy = "ZodLazy",
        ZodLiteral = "ZodLiteral",
        ZodEnum = "ZodEnum",
        ZodEffects = "ZodEffects",
        ZodNativeEnum = "ZodNativeEnum",
        ZodOptional = "ZodOptional",
        ZodNullable = "ZodNullable",
        ZodDefault = "ZodDefault",
        ZodCatch = "ZodCatch",
        ZodPromise = "ZodPromise",
        ZodBranded = "ZodBranded",
        ZodPipeline = "ZodPipeline",
        ZodReadonly = "ZodReadonly"
    }
    export type ZodFirstPartySchemaTypes = ZodString | ZodNumber | ZodNaN | ZodBigInt | ZodBoolean | ZodDate | ZodUndefined | ZodNull | ZodAny | ZodUnknown | ZodNever | ZodVoid | ZodArray<any, any> | ZodObject<any, any, any> | ZodUnion<any> | ZodDiscriminatedUnion<any, any> | ZodIntersection<any, any> | ZodTuple<any, any> | ZodRecord<any, any> | ZodMap<any> | ZodSet<any> | ZodFunction<any, any> | ZodLazy<any> | ZodLiteral<any> | ZodEnum<any> | ZodEffects<any, any, any> | ZodNativeEnum<any> | ZodOptional<any> | ZodNullable<any> | ZodDefault<any> | ZodCatch<any> | ZodPromise<any> | ZodBranded<any, any> | ZodPipeline<any, any> | ZodReadonly<any> | ZodSymbol;
    declare abstract class Class {
        constructor(..._: any[]);
    }
    declare const instanceOfType: <T extends typeof Class>(cls: T, params?: CustomParams) => ZodType<InstanceType<T>, ZodTypeDef, InstanceType<T>>;
    declare const stringType: (params?: RawCreateParams & {
        coerce?: true;
    }) => ZodString;
    declare const numberType: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodNumber;
    declare const nanType: (params?: RawCreateParams) => ZodNaN;
    declare const bigIntType: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodBigInt;
    declare const booleanType: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodBoolean;
    declare const dateType: (params?: RawCreateParams & {
        coerce?: boolean;
    }) => ZodDate;
    declare const symbolType: (params?: RawCreateParams) => ZodSymbol;
    declare const undefinedType: (params?: RawCreateParams) => ZodUndefined;
    declare const nullType: (params?: RawCreateParams) => ZodNull;
    declare const anyType: (params?: RawCreateParams) => ZodAny;
    declare const unknownType: (params?: RawCreateParams) => ZodUnknown;
    declare const neverType: (params?: RawCreateParams) => ZodNever;
    declare const voidType: (params?: RawCreateParams) => ZodVoid;
    declare const arrayType: <T extends ZodTypeAny>(schema: T, params?: RawCreateParams) => ZodArray<T>;
    declare const objectType: <T extends ZodRawShape>(shape: T, params?: RawCreateParams) => ZodObject<T, "strip", ZodTypeAny, objectOutputType<T, ZodTypeAny, "strip">, objectInputType<T, ZodTypeAny, "strip">>;
    declare const strictObjectType: <T extends ZodRawShape>(shape: T, params?: RawCreateParams) => ZodObject<T, "strict">;
    declare const unionType: <T extends readonly [
        ZodTypeAny,
        ZodTypeAny,
        ...ZodTypeAny[]
    ]>(types: T, params?: RawCreateParams) => ZodUnion<T>;
    declare const discriminatedUnionType: typeof ZodDiscriminatedUnion.create;
    declare const intersectionType: <T extends ZodTypeAny, U extends ZodTypeAny>(left: T, right: U, params?: RawCreateParams) => ZodIntersection<T, U>;
    declare const tupleType: <T extends [
    ] | [
        ZodTypeAny,
        ...ZodTypeAny[]
    ]>(schemas: T, params?: RawCreateParams) => ZodTuple<T, null>;
    declare const recordType: typeof ZodRecord.create;
    declare const mapType: <Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny>(keyType: Key, valueType: Value, params?: RawCreateParams) => ZodMap<Key, Value>;
    declare const setType: <Value extends ZodTypeAny = ZodTypeAny>(valueType: Value, params?: RawCreateParams) => ZodSet<Value>;
    declare const functionType: typeof ZodFunction.create;
    declare const lazyType: <T extends ZodTypeAny>(getter: () => T, params?: RawCreateParams) => ZodLazy<T>;
    declare const literalType: <T extends Primitive>(value: T, params?: RawCreateParams) => ZodLiteral<T>;
    declare const enumType: typeof createZodEnum;
    declare const nativeEnumType: <T extends EnumLike>(values: T, params?: RawCreateParams) => ZodNativeEnum<T>;
    declare const promiseType: <T extends ZodTypeAny>(schema: T, params?: RawCreateParams) => ZodPromise<T>;
    declare const effectsType: <I extends ZodTypeAny>(schema: I, effect: Effect<I["_output"]>, params?: RawCreateParams) => ZodEffects<I, I["_output"]>;
    declare const optionalType: <T extends ZodTypeAny>(type: T, params?: RawCreateParams) => ZodOptional<T>;
    declare const nullableType: <T extends ZodTypeAny>(type: T, params?: RawCreateParams) => ZodNullable<T>;
    declare const preprocessType: <I extends ZodTypeAny>(preprocess: (arg: unknown, ctx: RefinementCtx) => unknown, schema: I, params?: RawCreateParams) => ZodEffects<I, I["_output"], unknown>;
    declare const pipelineType: typeof ZodPipeline.create;
    declare const ostring: () => ZodOptional<ZodString>;
    declare const onumber: () => ZodOptional<ZodNumber>;
    declare const oboolean: () => ZodOptional<ZodBoolean>;
    export declare const coerce: {
        string: (params?: RawCreateParams & {
            coerce?: true;
        }) => ZodString;
        number: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodNumber;
        boolean: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodBoolean;
        bigint: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodBigInt;
        date: (params?: RawCreateParams & {
            coerce?: boolean;
        }) => ZodDate;
    };
    export { anyType as any, arrayType as array, bigIntType as bigint, booleanType as boolean, dateType as date, discriminatedUnionType as discriminatedUnion, effectsType as effect, enumType as enum, functionType as function, instanceOfType as instanceof, intersectionType as intersection, lazyType as lazy, literalType as literal, mapType as map, nanType as nan, nativeEnumType as nativeEnum, neverType as never, nullType as null, nullableType as nullable, numberType as number, objectType as object, oboolean, onumber, optionalType as optional, ostring, pipelineType as pipeline, preprocessType as preprocess, promiseType as promise, recordType as record, setType as set, strictObjectType as strictObject, stringType as string, symbolType as symbol, effectsType as transformer, tupleType as tuple, undefinedType as undefined, unionType as union, unknownType as unknown, voidType as void };
    export declare const NEVER: never;
}
type ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c = (issue: ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873, _ctx: ref_12d5f6a376d0bdcad49ecd1d52c89b2f4fe74044e6bba7aa3196b54824ee14f1) => {
    message: string;
};
type ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873 = ref_8430246721e6eae162abae5a9529efd4ee25be4ea1ed70c0a2b4ec701c7a776b | ref_7dce7767bbc991531554b0d095276c9b7dbc3ff1ac7b52ee9e4a6e8d1ff3fcf5 | ref_833615b97b66cb385bede5bcb1b809761793025c58ed9d236bdf908ef04be550 | ref_ce1bc06e245eac1c075b85ad5aff98dceec653ac33175f6fe970c0b77296aa5f | ref_5abe883a8df181651dfb94170a2823bf0dad9ed900f261186b88ea40ca6cfa8d | ref_10cb1ee91e16ecedf030fe1702708cabc372a68050943ff2b6dc7b88efbe5d9b | ref_5dbfe285d931f4c8992798502a06ec6bec5b7ee12c4b77ebed3cb22c750a5e28 | ref_5af8719d748a917b28ecc2de7ab349e0764c75a1454c92181e62cee36bcd9f3d | ref_234ab241eb54bb07486a81973889ef269f7803e835d163009e4705ecd769f7fd | ref_2d7c7c6dcb10552173175b5883593d7b8af4d984082b7c74d7154ffe7ce1381e | ref_b531cfb9a4aea92c88e71d7bb7e3ae0c146bfc4c6ba82559d136676da04cfc0c | ref_fe5178baa4070592ffc97bf99afd85f0f11e6ed7f02b9e5979bdc9f975f0b404 | ref_29234c6142bfd60078b43f07d37647c7e0562df4ec61ba0b4a90d570d2feba2f | ref_b3d2f716235ca27fe740ed584c7d13a5c0096a6c9c107bd9c3e0b14c8e7f31a2 | ref_3b8776f870239652afb11dadb261c212a3c820199878fcdfa1171510f8f2a210 | ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444;
type ref_12d5f6a376d0bdcad49ecd1d52c89b2f4fe74044e6bba7aa3196b54824ee14f1 = {
    defaultError: string;
    data: any;
};
type ref_1d41e0e58b6c4a8beba04a153547b505dfe542ca8db4b93201b14d082ba10767 = string | number;
type ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526 = ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873 & {
    fatal?: boolean;
    message: string;
};
type ref_2c2cfff6cf40291f217ce1456cddcf0d64161c60b38142d7e4f7667e3453203f = Array<ref_1d41e0e58b6c4a8beba04a153547b505dfe542ca8db4b93201b14d082ba10767>;
interface ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad {
    readonly common: {
        readonly issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
        readonly contextualErrorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        readonly async: boolean;
    };
    readonly path: ref_2c2cfff6cf40291f217ce1456cddcf0d64161c60b38142d7e4f7667e3453203f;
    readonly schemaErrorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
    readonly parent: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad | null;
    readonly data: any;
    readonly parsedType: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
}
type ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5 = keyof typeof ref_4fc8d82b0f5c977081b67f3a5380e38d40154e030e78b2f7a0b0c9d3842d65ae;
type ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2 = ref_0060061abe91d3b3eabf571b9119f8bbfb5692307a179d3da303c3d41592253d<ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873> & {
    path?: Array<(string | number)>;
    fatal?: boolean;
};
type ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T = any> = ref_3e59388539b8f93e418583bf3dcccf251da3235ca0de112c3684d17efb90c6d4<T> | ref_7316917a105bac158960471133463d46dc0bba0d4499f168d22c76f4fd349231<T> | ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f;
type ref_3e59388539b8f93e418583bf3dcccf251da3235ca0de112c3684d17efb90c6d4<T> = {
    status: "valid";
    value: T;
};
type ref_7316917a105bac158960471133463d46dc0bba0d4499f168d22c76f4fd349231<T> = {
    status: "dirty";
    value: T;
};
type ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f = {
    status: "aborted";
};
type ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<T> = Promise<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T>>;
type ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8 = string | number | symbol | bigint | boolean | null | undefined;
type ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<T, U> = T extends U ? never : T;
type ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K extends keyof any> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
type ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<T> = {
    [P in keyof T]?: T[P];
};
type ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K extends keyof any, T> = {
    [P in K]: T;
};
declare namespace objectUtil {
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
declare const ref_4fc8d82b0f5c977081b67f3a5380e38d40154e030e78b2f7a0b0c9d3842d65ae;
type ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>;
declare abstract class ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<Output = any, Def extends ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318 = ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318, Input = Output> {
    readonly _type: Output;
    readonly _output: Output;
    readonly _input: Input;
    readonly _def: Def;
    get description(): string | undefined;
    "~standard": ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Props<Input, Output>;
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
    spa: (data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>) => Promise<ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>>;
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
declare namespace util {
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
    export function joinValues<T extends any[]>(array: T, separator?: string): string;
    export const jsonStringifyReplacer: (_: string, value: any) => any;
    export {};
}
interface ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.custom;
    params?: {
        [k: string]: any;
    };
}
declare class ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<T = any> {
    issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
    get errors(): Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
    constructor(issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => void;
    addIssues: (subs?: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, string>;
}
type ref_f766c4e238036e6454dc9857683d8608e23bac36680b0a918714985601b91c08<Output> = {
    success: true;
    data: Output;
    error?: never;
};
type ref_b25c08a97ba53a5f06e295ddd217d9e76c9df21feb9836b728e892de95e41828<Input> = {
    success: false;
    error: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<Input>;
    data?: never;
};
interface ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318 {
    errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
    description?: string;
}
type ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336<Input = unknown, Output = Input> = {
    readonly "~standard": ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Props<Input, Output>;
};
type ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380 = {
    path: Array<(string | number)>;
    errorMap: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
    async: boolean;
};
type ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output> = ref_f766c4e238036e6454dc9857683d8608e23bac36680b0a918714985601b91c08<Output> | ref_b25c08a97ba53a5f06e295ddd217d9e76c9df21feb9836b728e892de95e41828<Input>;
interface ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e {
    exec(string: string): ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 | null;
    test(string: string): boolean;
    readonly source: string;
    readonly global: boolean;
    readonly ignoreCase: boolean;
    readonly multiline: boolean;
    lastIndex: number;
    compile(pattern: string, flags?: string): this;
}
interface ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 {
    index: number;
    input: string;
    0: string;
}
type ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504 = "v4" | "v6";
type ref_be511f821377c99039b04813891688a3860d28272980b7c58943901acd476c69 = {
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
    regex: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
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
    version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
    message?: string;
} | {
    kind: "cidr";
    version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
    message?: string;
} | {
    kind: "base64";
    message?: string;
} | {
    kind: "base64url";
    message?: string;
};
type ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 = {
    errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
    invalid_type_error?: string;
    required_error?: string;
    message?: string;
    description?: string;
} | undefined;
declare class ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9 {
    _parse(input: ParseInput): ParseReturnType<string>;
    protected _regex(regex: RegExp, validation: StringValidation, message?: errorUtil.ErrMessage): ZodEffects<this, string, string>;
    _addCheck(check: ZodStringCheck): ZodString;
    email(message?: errorUtil.ErrMessage): ZodString;
    url(message?: errorUtil.ErrMessage): ZodString;
    emoji(message?: errorUtil.ErrMessage): ZodString;
    uuid(message?: errorUtil.ErrMessage): ZodString;
    nanoid(message?: errorUtil.ErrMessage): ZodString;
    cuid(message?: errorUtil.ErrMessage): ZodString;
    cuid2(message?: errorUtil.ErrMessage): ZodString;
    ulid(message?: errorUtil.ErrMessage): ZodString;
    base64(message?: errorUtil.ErrMessage): ZodString;
    base64url(message?: errorUtil.ErrMessage): ZodString;
    jwt(options?: {
        alg?: string;
        message?: string;
    }): ZodString;
    ip(options?: string | {
        version?: IpVersion;
        message?: string;
    }): ZodString;
    cidr(options?: string | {
        version?: IpVersion;
        message?: string;
    }): ZodString;
    datetime(options?: string | {
        message?: string | undefined;
        precision?: number | null;
        offset?: boolean;
        local?: boolean;
    }): ZodString;
    date(message?: string): ZodString;
    time(options?: string | {
        message?: string | undefined;
        precision?: number | null;
    }): ZodString;
    duration(message?: errorUtil.ErrMessage): ZodString;
    regex(regex: RegExp, message?: errorUtil.ErrMessage): ZodString;
    includes(value: string, options?: {
        message?: string;
        position?: number;
    }): ZodString;
    startsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
    endsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
    min(minLength: number, message?: errorUtil.ErrMessage): ZodString;
    max(maxLength: number, message?: errorUtil.ErrMessage): ZodString;
    length(len: number, message?: errorUtil.ErrMessage): ZodString;
    nonempty(message?: errorUtil.ErrMessage): ZodString;
    trim(): ZodString;
    toLowerCase(): ZodString;
    toUpperCase(): ZodString;
    get isDatetime(): boolean;
    get isDate(): boolean;
    get isTime(): boolean;
    get isDuration(): boolean;
    get isEmail(): boolean;
    get isURL(): boolean;
    get isEmoji(): boolean;
    get isUUID(): boolean;
    get isNANOID(): boolean;
    get isCUID(): boolean;
    get isCUID2(): boolean;
    get isULID(): boolean;
    get isIP(): boolean;
    get isCIDR(): boolean;
    get isBase64(): boolean;
    get isBase64url(): boolean;
    get minLength(): number | null;
    get maxLength(): number | null;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: true;
    }) => ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
}
type ref_0bcedc16a1fc82b0af43aea87dec9b0e716dbb33a814706c25e0399910fd89b0 = {
    kind: "min";
    value: number;
    inclusive: boolean;
    message?: string;
} | {
    kind: "max";
    value: number;
    inclusive: boolean;
    message?: string;
} | {
    kind: "int";
    message?: string;
} | {
    kind: "multipleOf";
    value: number;
    message?: string;
} | {
    kind: "finite";
    message?: string;
};
declare class ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3 {
    _parse(input: ParseInput): ParseReturnType<number>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    gte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    min: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    gt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    lte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    max: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    lt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ZodNumber;
    _addCheck(check: ZodNumberCheck): ZodNumber;
    int(message?: errorUtil.ErrMessage): ZodNumber;
    positive(message?: errorUtil.ErrMessage): ZodNumber;
    negative(message?: errorUtil.ErrMessage): ZodNumber;
    nonpositive(message?: errorUtil.ErrMessage): ZodNumber;
    nonnegative(message?: errorUtil.ErrMessage): ZodNumber;
    multipleOf(value: number, message?: errorUtil.ErrMessage): ZodNumber;
    step: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
    finite(message?: errorUtil.ErrMessage): ZodNumber;
    safe(message?: errorUtil.ErrMessage): ZodNumber;
    get minValue(): number | null;
    get maxValue(): number | null;
    get isInt(): boolean;
    get isFinite(): boolean;
}
declare namespace errorUtil {
    type ErrMessage = string | {
        message?: string;
    };
    const errToObj: (message?: ErrMessage) => {
        message?: string | undefined;
    };
    const toString: (message?: ErrMessage) => string | undefined;
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
    _parse(input: ParseInput): ParseReturnType<bigint>;
    _getInvalidInput(input: ParseInput): INVALID;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    gte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
    min: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    gt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
    lte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
    max: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
    lt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
    protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string): ZodBigInt;
    _addCheck(check: ZodBigIntCheck): ZodBigInt;
    positive(message?: errorUtil.ErrMessage): ZodBigInt;
    negative(message?: errorUtil.ErrMessage): ZodBigInt;
    nonpositive(message?: errorUtil.ErrMessage): ZodBigInt;
    nonnegative(message?: errorUtil.ErrMessage): ZodBigInt;
    multipleOf(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
    get minValue(): bigint | null;
    get maxValue(): bigint | null;
}
declare class ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a {
    _parse(input: ParseInput): ParseReturnType<boolean>;
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
declare class ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0 {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    _addCheck(check: ZodDateCheck): ZodDate;
    min(minDate: Date, message?: errorUtil.ErrMessage): ZodDate;
    max(maxDate: Date, message?: errorUtil.ErrMessage): ZodDate;
    get minDate(): ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | null;
    get maxDate(): ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | null;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
        coerce?: boolean;
    }) => ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
}
declare class ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49 {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49;
}
declare class ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973 {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973;
}
declare class ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377 {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377;
}
declare class ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5 {
    _any: true;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5;
}
declare class ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525 {
    _unknown: true;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525;
}
declare class ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22 {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22;
}
declare class ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad;
}
type ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many" | "atleastone";
declare class ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Cardinality extends ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many"> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get element(): T;
    min(minLength: number, message?: errorUtil.ErrMessage): this;
    max(maxLength: number, message?: errorUtil.ErrMessage): this;
    length(len: number, message?: errorUtil.ErrMessage): this;
    nonempty(message?: errorUtil.ErrMessage): ZodArray<T, "atleastone">;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T_1, "many">;
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
type ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<{
    [k in keyof Shape]: Shape[k]["_input"];
}>;
type ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
    [k: string]: T["_input"];
};
declare class ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    unwrap(): T;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T_1>;
}
type ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = T extends ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<infer U> ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U> : T extends ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<infer U> ? ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U>> : T;
declare class ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    unwrap(): T;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T_1>;
}
declare class ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<T, Catchall, UnknownKeys>, Input = ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<T, Catchall, UnknownKeys>> {
    private _cached;
    _getCached(): {
        shape: T;
        keys: string[];
    };
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get shape(): T;
    strict(message?: errorUtil.ErrMessage): ZodObject<T, "strict", Catchall>;
    strip(): ZodObject<T, "strip", Catchall>;
    passthrough(): ZodObject<T, "passthrough", Catchall>;
    nonstrict: () => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
    extend<Augmentation extends ZodRawShape>(augmentation: Augmentation): ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    augment: <Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
    merge<Incoming extends AnyZodObject, Augmentation extends Incoming["shape"]>(merging: Incoming): ZodObject<objectUtil.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
    setKey<Key extends string, Schema extends ZodTypeAny>(key: Key, schema: Schema): ZodObject<T & {
        [k in Key]: Schema;
    }, UnknownKeys, Catchall>;
    catchall<Index extends ZodTypeAny>(index: Index): ZodObject<T, UnknownKeys, Index>;
    pick<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
    omit<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall>;
    deepPartial(): partialUtil.DeepPartial<this>;
    partial(): ZodObject<{
        [k in keyof T]: ZodOptional<T[k]>;
    }, UnknownKeys, Catchall>;
    partial<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? ZodOptional<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    required(): ZodObject<{
        [k in keyof T]: deoptional<T[k]>;
    }, UnknownKeys, Catchall>;
    required<Mask extends util.Exactly<{
        [k in keyof T]?: true;
    }, Mask>>(mask: Mask): ZodObject<objectUtil.noNever<{
        [k in keyof T]: k extends keyof Mask ? deoptional<T[k]> : T[k];
    }>, UnknownKeys, Catchall>;
    keyof(): ZodEnum<enumUtil.UnionToTupleString<keyof T>>;
    static create: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strip", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
    static strictCreate: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strict", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
    static lazycreate: <T_1 extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(shape: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T_1, "strip", ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any> extends infer T_2 ? {
        [k in keyof T_2]: ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<T_1>, any>[k];
    } : never, ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1> extends infer T_3 ? {
        [k_1 in keyof T_3]: ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<T_1>[k_1];
    } : never>;
}
type ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<Shape>>> & ref_c8f051f713c3c8666195504baf97a1f7a2890203f713266b3f4fe5cc243b27da<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
type ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape>> & ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
type ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4 = ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
    ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
    ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
]>;
declare class ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<T extends ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get options(): T;
    static create: <T_1 extends readonly [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>(types: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<T_1>;
}
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
declare class ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(left: T_1, right: U_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<T_1, U_1>;
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
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get items(): T;
    rest<Rest extends ZodTypeAny>(rest: Rest): ZodTuple<T, Rest>;
    static create: <T_1 extends [
    ] | [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>(schemas: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T_1, null>;
}
type ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<string | number | symbol, any, any>;
type ref_d556e538c490b9db3e5347ed57a98084d58c95713eea870a81ed006c7396da45<T extends string | number | symbol> = {
    [BRAND]: {
        [k in T]: true;
    };
};
declare class ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get keySchema(): Key;
    get valueSchema(): Value;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <Key_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keyType: Key_1, valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key_1, Value_1>;
}
declare class ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    min(minSize: number, message?: errorUtil.ErrMessage): this;
    max(maxSize: number, message?: errorUtil.ErrMessage): this;
    size(size: number, message?: errorUtil.ErrMessage): this;
    nonempty(message?: errorUtil.ErrMessage): ZodSet<Value>;
    static create: <Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value_1>;
}
type ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_output"] extends Array<any> ? (...args: Args["_output"]) => Returns["_input"] : never;
type ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ref_573b3112058e957a327ec2d95ea68de2ace2d010a1375eec895d2a60f2c52ea4<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_input"] extends Array<any> ? (...args: Args["_input"]) => Returns["_output"] : never;
declare class ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get schema(): T;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(getter: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T_1>;
}
declare class ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get value(): T;
    static create: <T_1 extends ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>(value: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T_1>;
}
type ref_3ea6c28a52bea762b63dc91839431c59e5e90891a28b766ad3cbddab5d7d122f = keyof Array<any>;
type ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5<T extends string = string> = readonly [
    T,
    ...Array<T>
];
type ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Values, ToExclude> = Values extends [
] ? [
] : Values extends [
    infer Head,
    ...infer Rest
] ? Head extends ToExclude ? ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude> : [
    Head,
    ...ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude>
] : never;
declare class ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<T extends [
    string,
    ...Array<string>
]> {
    #private;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get options(): T;
    get enum(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    get Values(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    get Enum(): ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T>;
    extract<ToExtract extends readonly [
        T[number],
        ...T[number][]
    ]>(values: ToExtract, newDef?: RawCreateParams): ZodEnum<Writeable<ToExtract>>;
    exclude<ToExclude extends readonly [
        T[number],
        ...T[number][]
    ]>(values: ToExclude, newDef?: RawCreateParams): ZodEnum<typecast<Writeable<FilterEnum<T, ToExclude[number]>>, [
        string,
        ...string[]
    ]>>;
    static create: typeof ref_8906bdb1def8a5b2d3e944895c676ef72897356aade8d484bc0b4d9094c551ef;
}
type ref_1ad0ea276b311b9a105b264f2777250963fe341af2943c25cab4f0ea5f27714b<T> = {
    -readonly [P in keyof T]: T[P];
};
declare function ref_8906bdb1def8a5b2d3e944895c676ef72897356aade8d484bc0b4d9094c551ef<U extends string, T extends [
    U,
    ...Array<U>
]>(values: T, params?: RawCreateParams): ZodEnum<T>;
type ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814 = {
    [k: string]: string | number;
    [nu: number]: string;
};
declare class ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814> {
    #private;
    _parse(input: ParseInput): ParseReturnType<T[keyof T]>;
    get enum(): T;
    static create: <T_1 extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814>(values: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T_1>;
}
declare class ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    unwrap(): T;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<T_1>;
}
interface ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027 {
    addIssue: (arg: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2) => void;
    path: Array<(string | number)>;
}
type ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<T> = {
    type: "refinement";
    refinement: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
};
type ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> = {
    type: "transform";
    transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
};
type ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T> = {
    type: "preprocess";
    transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
};
type ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<T> = ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<T> | ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> | ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T>;
type ref_b7af839dbb798a07fa86ad4cf6f1d995d08780a8e6457755a28775018a167a2a<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
type ref_53cafa2a017da41ca29135448bbcd038a6b22ed3bd81218f74ea26ea9df0cf1b<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_input"];
declare class ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_b7af839dbb798a07fa86ad4cf6f1d995d08780a8e6457755a28775018a167a2a<T>, Input = ref_53cafa2a017da41ca29135448bbcd038a6b22ed3bd81218f74ea26ea9df0cf1b<T>> {
    innerType(): T;
    sourceType(): T;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: I, effect: ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<I["_output"]>, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"]>;
    static createWithPreprocess: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(preprocess: (arg: unknown, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => unknown, schema: I, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"], unknown>;
}
declare class ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    removeDefault(): T;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params: {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
    } & {
        default: T_1["_input"] | (() => ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<T_1["_input"]>);
    }) => ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<T_1>;
}
declare class ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    removeCatch(): T;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params: {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
    } & {
        catch: T_1["_output"] | (() => T_1["_output"]);
    }) => ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<T_1>;
}
declare class ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5 {
    _parse(input: ParseInput): ParseReturnType<any>;
    static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5;
}
declare namespace Intl {
    interface CollatorOptions {
        usage?: "sort" | "search" | undefined;
        localeMatcher?: "lookup" | "best fit" | undefined;
        numeric?: boolean | undefined;
        caseFirst?: "upper" | "lower" | "false" | undefined;
        sensitivity?: "base" | "accent" | "case" | "variant" | undefined;
        collation?: "big5han" | "compat" | "dict" | "direct" | "ducet" | "emoji" | "eor" | "gb2312" | "phonebk" | "phonetic" | "pinyin" | "reformed" | "searchjl" | "stroke" | "trad" | "unihan" | "zhuyin" | undefined;
        ignorePunctuation?: boolean | undefined;
    }
    interface ResolvedCollatorOptions {
        locale: string;
        usage: string;
        sensitivity: string;
        ignorePunctuation: boolean;
        collation: string;
        caseFirst: string;
        numeric: boolean;
    }
    interface Collator {
        compare(x: string, y: string): number;
        resolvedOptions(): ResolvedCollatorOptions;
    }
    interface CollatorConstructor {
        new (locales?: string | string[], options?: CollatorOptions): Collator;
        (locales?: string | string[], options?: CollatorOptions): Collator;
        supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];
    }
    var Collator: CollatorConstructor;
    interface NumberFormatOptions {
        localeMatcher?: string | undefined;
        style?: string | undefined;
        currency?: string | undefined;
        currencySign?: string | undefined;
        useGrouping?: boolean | undefined;
        minimumIntegerDigits?: number | undefined;
        minimumFractionDigits?: number | undefined;
        maximumFractionDigits?: number | undefined;
        minimumSignificantDigits?: number | undefined;
        maximumSignificantDigits?: number | undefined;
    }
    interface ResolvedNumberFormatOptions {
        locale: string;
        numberingSystem: string;
        style: string;
        currency?: string;
        minimumIntegerDigits: number;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
        useGrouping: boolean;
    }
    interface NumberFormat {
        format(value: number): string;
        resolvedOptions(): ResolvedNumberFormatOptions;
    }
    interface NumberFormatConstructor {
        new (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
        (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
        supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];
        readonly prototype: NumberFormat;
    }
    var NumberFormat: NumberFormatConstructor;
    interface DateTimeFormatOptions {
        localeMatcher?: "best fit" | "lookup" | undefined;
        weekday?: "long" | "short" | "narrow" | undefined;
        era?: "long" | "short" | "narrow" | undefined;
        year?: "numeric" | "2-digit" | undefined;
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
        day?: "numeric" | "2-digit" | undefined;
        hour?: "numeric" | "2-digit" | undefined;
        minute?: "numeric" | "2-digit" | undefined;
        second?: "numeric" | "2-digit" | undefined;
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
        formatMatcher?: "best fit" | "basic" | undefined;
        hour12?: boolean | undefined;
        timeZone?: string | undefined;
    }
    interface ResolvedDateTimeFormatOptions {
        locale: string;
        calendar: string;
        numberingSystem: string;
        timeZone: string;
        hour12?: boolean;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
    }
    interface DateTimeFormat {
        format(date?: Date | number): string;
        resolvedOptions(): ResolvedDateTimeFormatOptions;
    }
    interface DateTimeFormatConstructor {
        new (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
        (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
        supportedLocalesOf(locales: string | string[], options?: DateTimeFormatOptions): string[];
        readonly prototype: DateTimeFormat;
    }
    var DateTimeFormat: DateTimeFormatConstructor;
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
interface ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T> {
    [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
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
type ref_8fde223775e1a45ad88ef5b65e127a300ad70a4a09b2936cf0349e3c4042aabe = (((...args: Array<any>) => any) | (new (...args: Array<any>) => any)) | {
    readonly [Symbol.toStringTag]: string;
} | ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 | ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 | ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6 | Promise<unknown> | ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
declare class ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<T_1>;
    unwrap(): T;
}
type ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 = ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Omit<ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444, "code">>;
type ref_383f4db34312f7c245d452c77aa35f249cb120639e2e219cbc7e7b323cceefb8 = ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 & {
    fatal?: boolean;
};
declare class ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<Discriminator extends string, Options extends readonly Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>> {
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get discriminator(): Discriminator;
    get options(): Options;
    get optionsMap(): ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8, ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<any>>;
    static create<Discriminator extends string, Types extends readonly [
        ZodDiscriminatedUnionOption<Discriminator>,
        ...ZodDiscriminatedUnionOption<Discriminator>[]
    ]>(discriminator: Discriminator, options: Types, params?: RawCreateParams): ZodDiscriminatedUnion<Discriminator, Types>;
}
declare class ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Key extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    get keySchema(): Key;
    get valueSchema(): Value;
    _parse(input: ParseInput): ParseReturnType<this["_output"]>;
    get element(): Value;
    static create<Value extends ZodTypeAny>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>;
    static create<Keys extends KeySchema, Value extends ZodTypeAny>(keySchema: Keys, valueType: Value, params?: RawCreateParams): ZodRecord<Keys, Value>;
}
declare class ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<any>;
    parameters(): Args;
    returnType(): Returns;
    args<Items extends Parameters<(typeof ZodTuple)["create"]>[0]>(...items: Items): ZodFunction<ZodTuple<Items, ZodUnknown>, Returns>;
    returns<NewReturnType extends ZodType<any, any, any>>(returnType: NewReturnType): ZodFunction<Args, NewReturnType>;
    implement<F extends InnerTypeOfFunction<Args, Returns>>(func: F): ReturnType<F> extends Returns["_output"] ? (...args: Args["_input"]) => ReturnType<F> : OuterTypeOfFunction<Args, Returns>;
    strictImplement(func: InnerTypeOfFunction<Args, Returns>): InnerTypeOfFunction<Args, Returns>;
    validate: <F extends ref_57b8a596cd81e471c2d89dd9d6b239cb518bc12b4c76b5b14578126b3293b4a2<Args, Returns>>(func: F) => ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> extends Returns["_output"] ? (...args: Args["_input"]) => ref_6a847708ec21af98cee72abe58cb39c2dca918feafcb0ed7d006b817546be60f<F> : ref_573b3112058e957a327ec2d95ea68de2ace2d010a1375eec895d2a60f2c52ea4<Args, Returns>;
    static create(): ZodFunction<ZodTuple<[
    ], ZodUnknown>, ZodUnknown>;
    static create<T extends AnyZodTuple = ZodTuple<[
    ], ZodUnknown>>(args: T): ZodFunction<T, ZodUnknown>;
    static create<T extends AnyZodTuple, U extends ZodTypeAny>(args: T, returns: U): ZodFunction<T, U>;
    static create<T extends AnyZodTuple = ZodTuple<[
    ], ZodUnknown>, U extends ZodTypeAny = ZodUnknown>(args: T, returns: U, params?: RawCreateParams): ZodFunction<T, U>;
}
declare class ref_3d3d369d4321690bd1e45fb6d995bd841f36c7af2bd8e7b7cdb4124964332972<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends string | number | symbol> {
    _parse(input: ParseInput): ParseReturnType<any>;
    unwrap(): T;
}
declare class ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> {
    _parse(input: ParseInput): ParseReturnType<any>;
    static create<A extends ZodTypeAny, B extends ZodTypeAny>(a: A, b: B): ZodPipeline<A, B>;
}
type ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, U = string> = {
    formErrors: Array<U>;
    fieldErrors: {
        [P in ref_48ce6fd54da2422189d2c246f56a672fba482fb151535034b152f2e492449e46<T>]?: Array<U>;
    };
};
type ref_72cd1895ff89253dd689ba70b3eb1265a8a79f8803b0eaa814a53515927a2e12<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
type ref_48ce6fd54da2422189d2c246f56a672fba482fb151535034b152f2e492449e46<T> = T extends any ? keyof T : never;
declare const ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39;
type ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce = "email" | "url" | "emoji" | "uuid" | "nanoid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "date" | "time" | "duration" | "ip" | "cidr" | "base64" | "jwt" | "base64url" | {
    includes: string;
    position?: number;
} | {
    startsWith: string;
} | {
    endsWith: string;
};
type ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 = {
    [k: string]: ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 | Array<string>;
};
interface ref_8430246721e6eae162abae5a9529efd4ee25be4ea1ed70c0a2b4ec701c7a776b {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_type;
    expected: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
    received: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
}
interface ref_7dce7767bbc991531554b0d095276c9b7dbc3ff1ac7b52ee9e4a6e8d1ff3fcf5 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_literal;
    expected: unknown;
    received: unknown;
}
interface ref_833615b97b66cb385bede5bcb1b809761793025c58ed9d236bdf908ef04be550 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.unrecognized_keys;
    keys: Array<string>;
}
interface ref_ce1bc06e245eac1c075b85ad5aff98dceec653ac33175f6fe970c0b77296aa5f {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union;
    unionErrors: Array<ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5>;
}
interface ref_5abe883a8df181651dfb94170a2823bf0dad9ed900f261186b88ea40ca6cfa8d {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union_discriminator;
    options: Array<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>;
}
interface ref_10cb1ee91e16ecedf030fe1702708cabc372a68050943ff2b6dc7b88efbe5d9b {
    received: string | number;
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_enum_value;
    options: Array<(string | number)>;
}
interface ref_5dbfe285d931f4c8992798502a06ec6bec5b7ee12c4b77ebed3cb22c750a5e28 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_arguments;
    argumentsError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
}
interface ref_5af8719d748a917b28ecc2de7ab349e0764c75a1454c92181e62cee36bcd9f3d {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_return_type;
    returnTypeError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
}
interface ref_234ab241eb54bb07486a81973889ef269f7803e835d163009e4705ecd769f7fd {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_date;
}
interface ref_2d7c7c6dcb10552173175b5883593d7b8af4d984082b7c74d7154ffe7ce1381e {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_string;
    validation: ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce;
}
interface ref_b531cfb9a4aea92c88e71d7bb7e3ae0c146bfc4c6ba82559d136676da04cfc0c {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
interface ref_fe5178baa4070592ffc97bf99afd85f0f11e6ed7f02b9e5979bdc9f975f0b404 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
interface ref_29234c6142bfd60078b43f07d37647c7e0562df4ec61ba0b4a90d570d2feba2f {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_intersection_types;
}
interface ref_b3d2f716235ca27fe740ed584c7d13a5c0096a6c9c107bd9c3e0b14c8e7f31a2 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_multiple_of;
    multipleOf: number | bigint;
}
interface ref_3b8776f870239652afb11dadb261c212a3c820199878fcdfa1171510f8f2a210 {
    code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_finite;
}
type ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T, U = string> = {
    _errors: Array<U>;
} & ref_a31b33a89c63cb3b2be7b8a1ccf2de61f7601fec7d4d2421ec355b712ff3f755<ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T>>;
type ref_a31b33a89c63cb3b2be7b8a1ccf2de61f7601fec7d4d2421ec355b712ff3f755<T> = T extends [
    any,
    ...Array<any>
] ? {
    [K in keyof T]?: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[K]>;
} : T extends Array<any> ? {
    [k: number]: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[number]>;
} : T extends object ? {
    [K in keyof T]?: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[K]>;
} : unknown;
type ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T> = T & {};
type ref_0060061abe91d3b3eabf571b9119f8bbfb5692307a179d3da303c3d41592253d<T extends object> = T extends any ? ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.OmitKeys<T, "path"> : never;
const ref_3604bc6bf0c41459126b08507bf25d93059e854107810406a08f922ca3a8352a = z.object({
    username: z.string(),
    location: z.object({
        latitude: z.number(),
        longitude: z.number()
    }),
    strings: z.array(z.object({ value: z.string() }))
});
interface ref_1148e30e7bb7c75259f2b3c672e21c7e8c7c52104e5a7bcdd10157fb2b728840<T> {
    readonly length: number;
    readonly [n: number]: T;
    join(separator?: string): string;
    slice(start?: number, end?: number): Array<T>;
}
type ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T extends ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5> = {
    [k in T[number]]: k;
};
type ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn = any> = ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<T> | ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn>;
interface ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<TYield> {
    done?: false;
    value: TYield;
}
interface ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn> {
    done: true;
    value: TReturn;
}
