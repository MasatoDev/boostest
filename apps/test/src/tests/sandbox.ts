🎉🎉🎉 type main_output_target = { [key: string]: any }; // Extracted from typeAlias

type main = ref_3d17bed87d0d9244d7d22c5e3f58ee2057594c02495116bb6db4512b7164b199;
type ref_3d17bed87d0d9244d7d22c5e3f58ee2057594c02495116bb6db4512b7164b199 = z.infer<typeof ref_a3b927c8efff12928b03a3c881c01889267a188a6a5c691c7d6435ae7deb6a19>;
function ref_798c9d21bdfed657e9db94acaf4a41a77afa75e9feb3f5e8469a72d2e5d81093<T>(args?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<T>): T {
    return {
        key: "any",
        ...args
    } as T;
}
type ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<T> = {
    [P in keyof T]?: T[P];
};
namespace z {
    export { defaultErrorMap };
    export declare function setErrorMap(map: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c): void;
    export declare function getErrorMap(): ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
    export declare const makeIssue: (params: {
        data: any;
        path: Array<(string | number)>;
        errorMaps: Array<ZodErrorMap>;
        issueData: IssueData;
    }) => ZodIssue;
    export type ParseParams = {
        path: Array<(string | number)>;
        errorMap: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        async: boolean;
    };
    export type ParsePathComponent = string | number;
    export type ParsePath = Array<ref_1d41e0e58b6c4a8beba04a153547b505dfe542ca8db4b93201b14d082ba10767>;
    export declare const EMPTY_PATH: ParsePath;
    export interface ParseContext {
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
    export type ParseInput = {
        data: any;
        path: Array<(string | number)>;
        parent: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
    };
    export declare function addIssueToContext(ctx: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad, issueData: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2): void;
    export type ObjectPair = {
        key: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
        value: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
    };
    export declare class ParseStatus {
        value: "aborted" | "dirty" | "valid";
        dirty(): void;
        abort(): void;
        static mergeArray(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, results: Array<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>>): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff;
        static mergeObjectAsync(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, pairs: Array<{
            key: ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
            value: ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        }>): Promise<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>>;
        static mergeObjectSync(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, pairs: Array<{
            key: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
            value: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
            alwaysSet?: boolean;
        }>): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff;
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
    export type SyncParseReturnType<T = any> = ref_3e59388539b8f93e418583bf3dcccf251da3235ca0de112c3684d17efb90c6d4<T> | ref_7316917a105bac158960471133463d46dc0bba0d4499f168d22c76f4fd349231<T> | ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f;
    export type AsyncParseReturnType<T> = Promise<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T>>;
    export type ParseReturnType<T> = ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T> | ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<T>;
    export declare const isAborted: (x: ParseReturnType<any>) => x is INVALID;
    export declare const isDirty: <T>(x: ParseReturnType<T>) => x is OK<T> | DIRTY<T>;
    export declare const isValid: <T>(x: ParseReturnType<T>) => x is OK<T>;
    export declare const isAsync: <T>(x: ParseReturnType<T>) => x is AsyncParseReturnType<T>;
    export type Primitive = string | number | symbol | bigint | boolean | null | undefined;
    export type Scalars = ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8 | Array<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>;
    export declare namespace util {
        type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
        export type isAny<T> = 0 extends 1 & T ? true : false;
        export const assertEqual: <A, B>(val: AssertEqual<A, B>) => AssertEqual<A, B>;
        export function assertIs<T>(_arg: T): void;
        export function assertNever(_x: never): never;
        export type Omit<T, K extends keyof T> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
        export type OmitKeys<T, K extends string> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
        export type MakePartial<T, K extends keyof T> = ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K> & ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K>>;
        export type Exactly<T, X> = T & ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof X, keyof T>, never>;
        export const arrayToEnum: <T extends string, U extends [
            T,
            ...Array<T>
        ]>(items: U) => {
            [k in U[number]]: k;
        };
        export const getValidEnumValues: (obj: any) => Array<any>;
        export const objectValues: (obj: any) => Array<any>;
        export const objectKeys: ObjectConstructor["keys"];
        export const find: <T>(arr: Array<T>, checker: (arg: T) => any) => T | undefined;
        export type identity<T> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.identity<T>;
        export type flatten<T> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<T>;
        export type noUndefined<T> = T extends undefined ? never : T;
        export const isInteger: NumberConstructor["isInteger"];
        export function joinValues<T extends Array<any>>(array: T, separator?: string): string;
        export const jsonStringifyReplacer: (_: string, value: any) => any;
        export {};
    }
    export declare namespace objectUtil {
        export type MergeShapes<U, V> = {
            [k in ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof U, keyof V>]: U[k];
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
    export type ZodParsedType = keyof typeof ref_4fc8d82b0f5c977081b67f3a5380e38d40154e030e78b2f7a0b0c9d3842d65ae;
    export declare const getParsedType: (data: any) => ZodParsedType;
    export interface RefinementCtx {
        addIssue: (arg: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2) => void;
        path: Array<(string | number)>;
    }
    export type ZodRawShape = {
        [k: string]: ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd;
    };
    export type ZodTypeAny = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>;
    export type TypeOf<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
    export type input<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_input"];
    export type output<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
    export type { TypeOf as infer };
    export type CustomErrorParams = ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Omit<ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444, "code">>;
    export interface ZodTypeDef {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        description?: string;
    }
    export type RawCreateParams = {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        invalid_type_error?: string;
        required_error?: string;
        message?: string;
        description?: string;
    } | undefined;
    export type ProcessedCreateParams = {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        description?: string;
    };
    export type SafeParseSuccess<Output> = {
        success: true;
        data: Output;
        error?: never;
    };
    export type SafeParseError<Input> = {
        success: false;
        error: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<Input>;
        data?: never;
    };
    export type SafeParseReturnType<Input, Output> = ref_f766c4e238036e6454dc9857683d8608e23bac36680b0a918714985601b91c08<Output> | ref_b25c08a97ba53a5f06e295ddd217d9e76c9df21feb9836b728e892de95e41828<Input>;
    export declare abstract class ZodType<Output = any, Def extends ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318 = ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318, Input = Output> {
        readonly _type: Output;
        readonly _output: Output;
        readonly _input: Input;
        readonly _def: Def;
        get description(): string | undefined;
        "~standard": ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Props<Input, Output>;
        abstract _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<Output>;
        _getType(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): string;
        _getOrReturnCtx(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5, ctx?: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad | undefined): ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
        _processInputParams(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): {
            status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630;
            ctx: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
        };
        _parseSync(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<Output>;
        _parseAsync(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<Output>;
        parse(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Output;
        safeParse(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>;
        "~validate"(data: unknown): ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Result<Output> | Promise<ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Result<Output>>;
        parseAsync(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Promise<Output>;
        safeParseAsync(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Promise<ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>>;
        spa: (data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>) => Promise<ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>>;
        refine<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, message?: string | ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 | ((arg: Output) => ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        refine(check: (arg: Output) => unknown | Promise<unknown>, message?: string | ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 | ((arg: Output) => ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        refinement<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, refinementData: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2 | ((arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        refinement(check: (arg: Output) => boolean, refinementData: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2 | ((arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        _refinement(refinement: ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<Output>["refinement"]): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        superRefine<RefinedOutput extends Output>(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => arg is RefinedOutput): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        superRefine(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => void): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        superRefine(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => Promise<void>): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        constructor(def: Def);
        optional(): ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<this>;
        nullable(): ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<this>;
        nullish(): ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<this>>;
        array(): ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<this>;
        promise(): ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<this>;
        or<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(option: T): ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<[
            this,
            T
        ]>;
        and<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(incoming: T): ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<this, T>;
        transform<NewOut>(transform: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => NewOut | Promise<NewOut>): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, NewOut>;
        default(def: ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<Input>): ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<this>;
        default(def: () => ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<Input>): ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<this>;
        brand<B extends string | number | symbol>(brand?: B): ref_3d3d369d4321690bd1e45fb6d995bd841f36c7af2bd8e7b7cdb4124964332972<this, B>;
        catch(def: Output): ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<this>;
        catch(def: (ctx: {
            error: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
            input: Input;
        }) => Output): ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<this>;
        describe(description: string): this;
        pipe<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(target: T): ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<this, T>;
        readonly(): ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<this>;
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
    export interface ZodStringDef extends ZodTypeDef {
        checks: Array<ref_be511f821377c99039b04813891688a3860d28272980b7c58943901acd476c69>;
        typeName: ZodFirstPartyTypeKind.ZodString;
        coerce: boolean;
    }
    export declare function datetimeRegex(args: {
        precision?: number | null;
        offset?: boolean;
        local?: boolean;
    }): ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
    export declare class ZodString extends ZodType<string, ZodStringDef, string> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<string>;
        protected _regex(regex: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e, validation: ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, string, string>;
        _addCheck(check: ref_be511f821377c99039b04813891688a3860d28272980b7c58943901acd476c69): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        email(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        url(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        emoji(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        uuid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        nanoid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cuid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cuid2(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        ulid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        base64(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        base64url(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        jwt(options?: {
            alg?: string;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        ip(options?: string | {
            version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cidr(options?: string | {
            version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        datetime(options?: string | {
            message?: string | undefined;
            precision?: number | null;
            offset?: boolean;
            local?: boolean;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        date(message?: string): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        time(options?: string | {
            message?: string | undefined;
            precision?: number | null;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        duration(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        regex(regex: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        includes(value: string, options?: {
            message?: string;
            position?: number;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        startsWith(value: string, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        endsWith(value: string, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        min(minLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        max(maxLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        length(len: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        trim(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        toLowerCase(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        toUpperCase(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
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
        checks: Array<ref_0bcedc16a1fc82b0af43aea87dec9b0e716dbb33a814706c25e0399910fd89b0>;
        typeName: ZodFirstPartyTypeKind.ZodNumber;
        coerce: boolean;
    }
    export declare class ZodNumber extends ZodType<number, ZodNumberDef, number> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<number>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        gte(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        min: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        gt(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        lte(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        max: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        lt(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        _addCheck(check: ref_0bcedc16a1fc82b0af43aea87dec9b0e716dbb33a814706c25e0399910fd89b0): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        int(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        positive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        negative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        nonpositive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        nonnegative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        multipleOf(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        step: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        finite(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        safe(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
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
        checks: Array<ref_a75ef1e0eef2a54e2b99d9074207a8657a8641b0436a7a32f9bb975043014d79>;
        typeName: ZodFirstPartyTypeKind.ZodBigInt;
        coerce: boolean;
    }
    export declare class ZodBigInt extends ZodType<bigint, ZodBigIntDef, bigint> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<bigint>;
        _getInvalidInput(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        gte(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        min: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        gt(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        lte(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        max: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        lt(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        _addCheck(check: ref_a75ef1e0eef2a54e2b99d9074207a8657a8641b0436a7a32f9bb975043014d79): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        positive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        negative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        nonpositive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        nonnegative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        multipleOf(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        get minValue(): bigint | null;
        get maxValue(): bigint | null;
    }
    export interface ZodBooleanDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodBoolean;
        coerce: boolean;
    }
    export declare class ZodBoolean extends ZodType<boolean, ZodBooleanDef, boolean> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<boolean>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a;
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
        checks: Array<ref_cb14d407bd64e524d5cdde05bfbcbd1016a527cf070f3c753730d408486f440d>;
        coerce: boolean;
        typeName: ZodFirstPartyTypeKind.ZodDate;
    }
    export declare class ZodDate extends ZodType<Date, ZodDateDef, Date> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        _addCheck(check: ref_cb14d407bd64e524d5cdde05bfbcbd1016a527cf070f3c753730d408486f440d): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        min(minDate: ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        max(maxDate: ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        get minDate(): ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | null;
        get maxDate(): ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | null;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
    }
    export interface ZodSymbolDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodSymbol;
    }
    export declare class ZodSymbol extends ZodType<symbol, ZodSymbolDef, symbol> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49;
    }
    export interface ZodUndefinedDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodUndefined;
    }
    export declare class ZodUndefined extends ZodType<undefined, ZodUndefinedDef, undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973;
    }
    export interface ZodNullDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNull;
    }
    export declare class ZodNull extends ZodType<null, ZodNullDef, null> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377;
    }
    export interface ZodAnyDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodAny;
    }
    export declare class ZodAny extends ZodType<any, ZodAnyDef, any> {
        _any: true;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5;
    }
    export interface ZodUnknownDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodUnknown;
    }
    export declare class ZodUnknown extends ZodType<unknown, ZodUnknownDef, unknown> {
        _unknown: true;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525;
    }
    export interface ZodNeverDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNever;
    }
    export declare class ZodNever extends ZodType<never, ZodNeverDef, never> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22;
    }
    export interface ZodVoidDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodVoid;
    }
    export declare class ZodVoid extends ZodType<void, ZodVoidDef, void> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad;
    }
    export interface ZodArrayDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
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
    export type arrayOutputType<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Cardinality extends ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many"> = Cardinality extends "atleastone" ? [
        T["_output"],
        ...Array<T["_output"]>
    ] : Array<T["_output"]>;
    export declare class ZodArray<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Cardinality extends ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many"> extends ZodType<arrayOutputType<T, Cardinality>, ZodArrayDef<T>, Cardinality extends "atleastone" ? [
        T["_input"],
        ...Array<T["_input"]>
    ] : Array<T["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get element(): T;
        min(minLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        max(maxLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        length(len: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T, "atleastone">;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T_1, "many">;
    }
    export type ZodNonEmptyArray<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T, "atleastone">;
    export type UnknownKeysParam = "passthrough" | "strict" | "strip";
    export interface ZodObjectDef<T extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66 = ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodObject;
        shape: () => T;
        catchall: Catchall;
        unknownKeys: UnknownKeys;
    }
    export type mergeTypes<A, B> = {
        [k in keyof A | keyof B]: k extends keyof B ? B[k] : k extends keyof A ? A[k] : never;
    };
    export type objectOutputType<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<ref_6329874d2643f140570790d172d640a6f26740a77df496d99865657fe9f48421<Shape>>> & ref_c8f051f713c3c8666195504baf97a1f7a2890203f713266b3f4fe5cc243b27da<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
    export type baseObjectOutputType<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = {
        [k in keyof Shape]: Shape[k]["_output"];
    };
    export type objectInputType<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape>> & ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<Catchall> & ref_4df44c5c2bb1ecd9585ace5e6385cf9686fe8fe300910162059a1728ff51aa16<UnknownKeys>;
    export type baseObjectInputType<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<{
        [k in keyof Shape]: Shape[k]["_input"];
    }>;
    export type CatchallOutput<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
        [k: string]: T["_output"];
    };
    export type CatchallInput<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
        [k: string]: T["_input"];
    };
    export type PassthroughType<T extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef> = T extends "passthrough" ? {
        [k: string]: unknown;
    } : unknown;
    export type deoptional<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = T extends ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<infer U> ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U> : T extends ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<infer U> ? ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U>> : T;
    export type SomeZodObject = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>;
    export type noUnrecognized<Obj extends object, Shape extends object> = {
        [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never;
    };
    export declare class ZodObject<T extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<T, Catchall, UnknownKeys>, Input = ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<T, Catchall, UnknownKeys>> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
        private _cached;
        _getCached(): {
            shape: T;
            keys: Array<string>;
        };
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get shape(): T;
        strict(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strict", Catchall>;
        strip(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strip", Catchall>;
        passthrough(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
        nonstrict: () => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
        extend<Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        augment: <Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        merge<Incoming extends ref_3d77202f37cbfdb0bee02a9f0024f2b10f4ea08d1aac799712423725ba9b375c, Augmentation extends Incoming["shape"]>(merging: Incoming): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
        setKey<Key extends string, Schema extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(key: Key, schema: Schema): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T & {
            [k in Key]: Schema;
        }, UnknownKeys, Catchall>;
        catchall<Index extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(index: Index): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, UnknownKeys, Index>;
        pick<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
        omit<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, keyof Mask>, UnknownKeys, Catchall>;
        deepPartial(): ref_4e9f9ade8442e8a5a8cb5d3ca1e729fda301f711c050864534a90e1b13f61f93.DeepPartial<this>;
        partial(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
            [k in keyof T]: ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]>;
        }, UnknownKeys, Catchall>;
        partial<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.noNever<{
            [k in keyof T]: k extends keyof Mask ? ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        required(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
            [k in keyof T]: ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]>;
        }, UnknownKeys, Catchall>;
        required<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.noNever<{
            [k in keyof T]: k extends keyof Mask ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        keyof(): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<ref_db72c11dd07aea97cac561f519e2df578d891de5ba43e4f155e1a8d7cde8c03e.UnionToTupleString<keyof T>>;
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
    export type AnyZodObject = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<any, any, any>;
    export type ZodUnionOptions = ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>;
    export interface ZodUnionDef<T extends ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4 = ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>> extends ZodTypeDef {
        options: T;
        typeName: ZodFirstPartyTypeKind.ZodUnion;
    }
    export declare class ZodUnion<T extends ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4> extends ZodType<T[number]["_output"], ZodUnionDef<T>, T[number]["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get options(): T;
        static create: <T_1 extends readonly [
            ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
            ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
            ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
        ]>(types: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<T_1>;
    }
    export type ZodDiscriminatedUnionOption<Discriminator extends string> = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
        [key in Discriminator]: ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd;
    } & ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>;
    export interface ZodDiscriminatedUnionDef<Discriminator extends string, Options extends readonly Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<string>> = Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<string>>> extends ZodTypeDef {
        discriminator: Discriminator;
        options: Options;
        optionsMap: ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8, ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<any>>;
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion;
    }
    export declare class ZodDiscriminatedUnion<Discriminator extends string, Options extends readonly Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>> extends ZodType<output<Options[number]>, ZodDiscriminatedUnionDef<Discriminator, Options>, input<Options[number]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get discriminator(): Discriminator;
        get options(): Options;
        get optionsMap(): ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8, ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<any>>;
        static create<Discriminator extends string, Types extends readonly [
            ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>,
            ...Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>
        ]>(discriminator: Discriminator, options: Types, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<Discriminator, Types>;
    }
    export interface ZodIntersectionDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        left: T;
        right: U;
        typeName: ZodFirstPartyTypeKind.ZodIntersection;
    }
    export declare class ZodIntersection<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] & U["_output"], ZodIntersectionDef<T, U>, T["_input"] & U["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(left: T_1, right: U_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<T_1, U_1>;
    }
    export type ZodTupleItems = [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ];
    export type AssertArray<T> = T extends Array<any> ? T : never;
    export type OutputTypeOfTuple<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
    ]> = ref_c5329264db9e5e1e5351919298992738e54e4d660dcfdd5c7bcbee5ee4b401f8<{
        [k in keyof T]: T[k] extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any> ? T[k]["_output"] : never;
    }>;
    export type OutputTypeOfTupleWithRest<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
    ], Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> = Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd ? [
        ...ref_629218eb781896e9965c89354e5933cf9a2eb38a6486a1bfac1b6417e13ed637<T>,
        ...Array<Rest["_output"]>
    ] : ref_629218eb781896e9965c89354e5933cf9a2eb38a6486a1bfac1b6417e13ed637<T>;
    export type InputTypeOfTuple<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
    ]> = ref_c5329264db9e5e1e5351919298992738e54e4d660dcfdd5c7bcbee5ee4b401f8<{
        [k in keyof T]: T[k] extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any> ? T[k]["_input"] : never;
    }>;
    export type InputTypeOfTupleWithRest<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
    ], Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> = Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd ? [
        ...ref_79f8e908a2eebd1a7133355a99e5f2d51f2271ca1f5671c421b6b51e67893cdf<T>,
        ...Array<Rest["_input"]>
    ] : ref_79f8e908a2eebd1a7133355a99e5f2d51f2271ca1f5671c421b6b51e67893cdf<T>;
    export interface ZodTupleDef<T extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 | [
    ] = ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278, Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> extends ZodTypeDef {
        items: T;
        rest: Rest;
        typeName: ZodFirstPartyTypeKind.ZodTuple;
    }
    export type AnyZodTuple = ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<[
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ] | [
    ], ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null>;
    export declare class ZodTuple<T extends [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ] | [
    ] = [
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ], Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get items(): T;
        rest<Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(rest: Rest): ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T, Rest>;
        static create: <T_1 extends [
        ] | [
            ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
            ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
        ]>(schemas: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<T_1, null>;
    }
    export interface ZodRecordDef<Key extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        valueType: Value;
        keyType: Key;
        typeName: ZodFirstPartyTypeKind.ZodRecord;
    }
    export type KeySchema = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<string | number | symbol, any, any>;
    export type RecordType<K extends string | number | symbol, V> = [
        string
    ] extends [
        K
    ] ? ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K, V> : [
        number
    ] extends [
        K
    ] ? ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K, V> : [
        symbol
    ] extends [
        K
    ] ? ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K, V> : [
        ref_d556e538c490b9db3e5347ed57a98084d58c95713eea870a81ed006c7396da45<string | number | symbol>
    ] extends [
        K
    ] ? ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K, V> : ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K, V>>;
    export declare class ZodRecord<Key extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<RecordType<Key["_output"], Value["_output"]>, ZodRecordDef<Key, Value>, RecordType<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get element(): Value;
        static create<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value>;
        static create<Keys extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keySchema: Keys, valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Keys, Value>;
    }
    export interface ZodMapDef<Key extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        valueType: Value;
        keyType: Key;
        typeName: ZodFirstPartyTypeKind.ZodMap;
    }
    export declare class ZodMap<Key extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Map<Key["_output"], Value["_output"]>, ZodMapDef<Key, Value>, Map<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <Key_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keyType: Key_1, valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key_1, Value_1>;
    }
    export interface ZodSetDef<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
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
    export declare class ZodSet<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Set<Value["_output"]>, ZodSetDef<Value>, Set<Value["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        min(minSize: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        max(maxSize: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        size(size: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value>;
        static create: <Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value_1>;
    }
    export interface ZodFunctionDef<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any> = ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        args: Args;
        returns: Returns;
        typeName: ZodFirstPartyTypeKind.ZodFunction;
    }
    export type OuterTypeOfFunction<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_input"] extends Array<any> ? (...args: Args["_input"]) => Returns["_output"] : never;
    export type InnerTypeOfFunction<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = Args["_output"] extends Array<any> ? (...args: Args["_output"]) => Returns["_input"] : never;
    export declare class ZodFunction<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<OuterTypeOfFunction<Args, Returns>, ZodFunctionDef<Args, Returns>, InnerTypeOfFunction<Args, Returns>> {
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
    export interface ZodLazyDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        getter: () => T;
        typeName: ZodFirstPartyTypeKind.ZodLazy;
    }
    export declare class ZodLazy<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<output<T>, ZodLazyDef<T>, input<T>> {
        get schema(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(getter: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T_1>;
    }
    export interface ZodLiteralDef<T = any> extends ZodTypeDef {
        value: T;
        typeName: ZodFirstPartyTypeKind.ZodLiteral;
    }
    export declare class ZodLiteral<T> extends ZodType<T, ZodLiteralDef<T>, T> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get value(): T;
        static create: <T_1 extends ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>(value: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T_1>;
    }
    export type ArrayKeys = keyof Array<any>;
    export type Indices<T> = ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, ref_3ea6c28a52bea762b63dc91839431c59e5e90891a28b766ad3cbddab5d7d122f>;
    export type EnumValues<T extends string = string> = readonly [
        T,
        ...Array<T>
    ];
    export type Values<T extends ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5> = {
        [k in T[number]]: k;
    };
    export interface ZodEnumDef<T extends ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5 = ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5> extends ZodTypeDef {
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
    ] ? Head extends ToExclude ? ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude> : [
        Head,
        ...ref_5ac11b2f5eefa7f7c2742d6602f68c5354463b548bb64053ff40c8d4e5ce443d<Rest, ToExclude>
    ] : never;
    export type typecast<A, T> = A extends T ? A : never;
    declare function createZodEnum<U extends string, T extends ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
        U,
        ...Array<U>
    ]>>(values: T, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<ref_1ad0ea276b311b9a105b264f2777250963fe341af2943c25cab4f0ea5f27714b<T>>;
    declare function createZodEnum<U extends string, T extends [
        U,
        ...Array<U>
    ]>(values: T, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<T>;
    export declare class ZodEnum<T extends [
        string,
        ...Array<string>
    ]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
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
        static create: typeof ref_f61d5ecb8a60ce7ce1c461bc8f22c60dba00cdfc0e554166f7136d7dda853446;
    }
    export interface ZodNativeEnumDef<T extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814 = ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814> extends ZodTypeDef {
        values: T;
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum;
    }
    export type EnumLike = {
        [k: string]: string | number;
        [nu: number]: string;
    };
    export declare class ZodNativeEnum<T extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814> extends ZodType<T[keyof T], ZodNativeEnumDef<T>, T[keyof T]> {
        #private;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<T[keyof T]>;
        get enum(): T;
        static create: <T_1 extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814>(values: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T_1>;
    }
    export interface ZodPromiseDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        type: T;
        typeName: ZodFirstPartyTypeKind.ZodPromise;
    }
    export declare class ZodPromise<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Promise<T["_output"]>, ZodPromiseDef<T>, Promise<T["_input"]>> {
        unwrap(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<T_1>;
    }
    export type Refinement<T> = (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    export type SuperRefinement<T> = (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => void | Promise<void>;
    export type RefinementEffect<T> = {
        type: "refinement";
        refinement: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    export type TransformEffect<T> = {
        type: "transform";
        transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    export type PreprocessEffect<T> = {
        type: "preprocess";
        transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    export type Effect<T> = ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<T> | ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> | ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T>;
    export interface ZodEffectsDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        schema: T;
        typeName: ZodFirstPartyTypeKind.ZodEffects;
        effect: ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<any>;
    }
    export declare class ZodEffects<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_b7af839dbb798a07fa86ad4cf6f1d995d08780a8e6457755a28775018a167a2a<T>, Input = ref_53cafa2a017da41ca29135448bbcd038a6b22ed3bd81218f74ea26ea9df0cf1b<T>> extends ZodType<Output, ZodEffectsDef<T>, Input> {
        innerType(): T;
        sourceType(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: I, effect: ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<I["_output"]>, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"]>;
        static createWithPreprocess: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(preprocess: (arg: unknown, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => unknown, schema: I, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"], unknown>;
    }
    export { ZodEffects as ZodTransformer };
    export interface ZodOptionalDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodOptional;
    }
    export type ZodOptionalType<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T>;
    export declare class ZodOptional<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] | undefined, ZodOptionalDef<T>, T["_input"] | undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T_1>;
    }
    export interface ZodNullableDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodNullable;
    }
    export type ZodNullableType<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T>;
    export declare class ZodNullable<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] | null, ZodNullableDef<T>, T["_input"] | null> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T_1>;
    }
    export interface ZodDefaultDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        innerType: T;
        defaultValue: () => ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<T["_input"]>;
        typeName: ZodFirstPartyTypeKind.ZodDefault;
    }
    export declare class ZodDefault<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<util.noUndefined<T["_output"]>, ZodDefaultDef<T>, T["_input"] | undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
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
    export interface ZodCatchDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        innerType: T;
        catchValue: (ctx: {
            error: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
            input: unknown;
        }) => T["_input"];
        typeName: ZodFirstPartyTypeKind.ZodCatch;
    }
    export declare class ZodCatch<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"], ZodCatchDef<T>, unknown> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
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
    export interface ZodNaNDef extends ZodTypeDef {
        typeName: ZodFirstPartyTypeKind.ZodNaN;
    }
    export declare class ZodNaN extends ZodType<number, ZodNaNDef, number> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5;
    }
    export interface ZodBrandedDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        type: T;
        typeName: ZodFirstPartyTypeKind.ZodBranded;
    }
    export declare const BRAND: unique symbol;
    export type BRAND<T extends string | number | symbol> = {
        [BRAND]: {
            [k in T]: true;
        };
    };
    export declare class ZodBranded<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends string | number | symbol> extends ZodType<T["_output"] & BRAND<B>, ZodBrandedDef<T>, T["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        unwrap(): T;
    }
    export interface ZodPipelineDef<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        in: A;
        out: B;
        typeName: ZodFirstPartyTypeKind.ZodPipeline;
    }
    export declare class ZodPipeline<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<B["_output"], ZodPipelineDef<A, B>, A["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        static create<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(a: A, b: B): ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<A, B>;
    }
    type BuiltIn = (((...args: Array<any>) => any) | (new (...args: Array<any>) => any)) | {
        readonly [Symbol.toStringTag]: string;
    } | ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 | ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6 | Promise<unknown> | ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
    type MakeReadonly<T> = T extends ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<infer K, infer V> ? ref_4bcf8aa9b27b15947c915bcf464dbb9858c79507841c512e85e8d0fc8a2fc164<K, V> : T extends ref_223498899e2fea7907c1f27aff3b8a6036883d7d35d741f183078edb4b9cca0e<infer V> ? ref_7aba4271f6e73e5e1b2f800bce86ba026d0da7f122230e4ef87ef655be1660e7<V> : T extends [
        infer Head,
        ...infer Tail
    ] ? readonly [
        Head,
        ...Tail
    ] : T extends Array<infer V> ? ref_5ce51502cad7fff9ab78a5391efba89ed673d60a0ae13c2cb01f520d0b2ae1d8<V> : T extends ref_8fde223775e1a45ad88ef5b65e127a300ad70a4a09b2936cf0349e3c4042aabe ? T : ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<T>;
    export interface ZodReadonlyDef<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodTypeDef {
        innerType: T;
        typeName: ZodFirstPartyTypeKind.ZodReadonly;
    }
    export declare class ZodReadonly<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<MakeReadonly<T["_output"]>, ZodReadonlyDef<T>, MakeReadonly<T["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<T_1>;
        unwrap(): T;
    }
    type CustomParams = ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 & {
        fatal?: boolean;
    };
    export declare function custom<T>(check?: (data: any) => any, params?: string | ref_383f4db34312f7c245d452c77aa35f249cb120639e2e219cbc7e7b323cceefb8 | ((input: any) => ref_383f4db34312f7c245d452c77aa35f249cb120639e2e219cbc7e7b323cceefb8), fatal?: boolean): ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<T, ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318, T>;
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
    export type ZodFirstPartySchemaTypes = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9 | ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3 | ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5 | ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9 | ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a | ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0 | ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973 | ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377 | ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5 | ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525 | ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22 | ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad | ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<any, any> | ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<any, any, any> | ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<any> | ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<any, any> | ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<any, any> | ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any> | ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<any, any> | ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<any> | ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<any> | ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<any, any> | ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<any> | ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<any> | ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<any> | ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<any, any, any> | ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<any> | ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<any> | ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<any> | ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<any> | ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<any> | ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<any> | ref_3d3d369d4321690bd1e45fb6d995bd841f36c7af2bd8e7b7cdb4124964332972<any, any> | ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<any, any> | ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<any> | ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49;
    declare abstract class Class {
        constructor(..._: Array<any>);
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
        ...Array<ZodTypeAny>
    ]>(types: T, params?: RawCreateParams) => ZodUnion<T>;
    declare const discriminatedUnionType: typeof ZodDiscriminatedUnion.create;
    declare const intersectionType: <T extends ZodTypeAny, U extends ZodTypeAny>(left: T, right: U, params?: RawCreateParams) => ZodIntersection<T, U>;
    declare const tupleType: <T extends [
    ] | [
        ZodTypeAny,
        ...Array<ZodTypeAny>
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
    type allKeys<T> = T extends any ? keyof T : never;
    export type inferFlattenedErrors<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>, U = string> = ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<ref_72cd1895ff89253dd689ba70b3eb1265a8a79f8803b0eaa814a53515927a2e12<T>, U>;
    export type typeToFlattenedError<T, U = string> = {
        formErrors: Array<U>;
        fieldErrors: {
            [P in ref_48ce6fd54da2422189d2c246f56a672fba482fb151535034b152f2e492449e46<T>]?: Array<U>;
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
    export type ZodIssueCode = keyof typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39;
    export type ZodIssueBase = {
        path: Array<(string | number)>;
        message?: string;
    };
    export interface ZodInvalidTypeIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_type;
        expected: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
        received: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
    }
    export interface ZodInvalidLiteralIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_literal;
        expected: unknown;
        received: unknown;
    }
    export interface ZodUnrecognizedKeysIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.unrecognized_keys;
        keys: Array<string>;
    }
    export interface ZodInvalidUnionIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union;
        unionErrors: Array<ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5>;
    }
    export interface ZodInvalidUnionDiscriminatorIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union_discriminator;
        options: Array<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>;
    }
    export interface ZodInvalidEnumValueIssue extends ZodIssueBase {
        received: string | number;
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_enum_value;
        options: Array<(string | number)>;
    }
    export interface ZodInvalidArgumentsIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_arguments;
        argumentsError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
    }
    export interface ZodInvalidReturnTypeIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_return_type;
        returnTypeError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
    }
    export interface ZodInvalidDateIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_date;
    }
    export type StringValidation = "email" | "url" | "emoji" | "uuid" | "nanoid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "date" | "time" | "duration" | "ip" | "cidr" | "base64" | "jwt" | "base64url" | {
        includes: string;
        position?: number;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    };
    export interface ZodInvalidStringIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_string;
        validation: ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce;
    }
    export interface ZodTooSmallIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_small;
        minimum: number | bigint;
        inclusive: boolean;
        exact?: boolean;
        type: "array" | "string" | "number" | "set" | "date" | "bigint";
    }
    export interface ZodTooBigIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_big;
        maximum: number | bigint;
        inclusive: boolean;
        exact?: boolean;
        type: "array" | "string" | "number" | "set" | "date" | "bigint";
    }
    export interface ZodInvalidIntersectionTypesIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_intersection_types;
    }
    export interface ZodNotMultipleOfIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_multiple_of;
        multipleOf: number | bigint;
    }
    export interface ZodNotFiniteIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_finite;
    }
    export interface ZodCustomIssue extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.custom;
        params?: {
            [k: string]: any;
        };
    }
    export type DenormalizedError = {
        [k: string]: ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 | Array<string>;
    };
    export type ZodIssueOptionalMessage = ref_8430246721e6eae162abae5a9529efd4ee25be4ea1ed70c0a2b4ec701c7a776b | ref_7dce7767bbc991531554b0d095276c9b7dbc3ff1ac7b52ee9e4a6e8d1ff3fcf5 | ref_833615b97b66cb385bede5bcb1b809761793025c58ed9d236bdf908ef04be550 | ref_ce1bc06e245eac1c075b85ad5aff98dceec653ac33175f6fe970c0b77296aa5f | ref_5abe883a8df181651dfb94170a2823bf0dad9ed900f261186b88ea40ca6cfa8d | ref_10cb1ee91e16ecedf030fe1702708cabc372a68050943ff2b6dc7b88efbe5d9b | ref_5dbfe285d931f4c8992798502a06ec6bec5b7ee12c4b77ebed3cb22c750a5e28 | ref_5af8719d748a917b28ecc2de7ab349e0764c75a1454c92181e62cee36bcd9f3d | ref_234ab241eb54bb07486a81973889ef269f7803e835d163009e4705ecd769f7fd | ref_2d7c7c6dcb10552173175b5883593d7b8af4d984082b7c74d7154ffe7ce1381e | ref_b531cfb9a4aea92c88e71d7bb7e3ae0c146bfc4c6ba82559d136676da04cfc0c | ref_fe5178baa4070592ffc97bf99afd85f0f11e6ed7f02b9e5979bdc9f975f0b404 | ref_29234c6142bfd60078b43f07d37647c7e0562df4ec61ba0b4a90d570d2feba2f | ref_b3d2f716235ca27fe740ed584c7d13a5c0096a6c9c107bd9c3e0b14c8e7f31a2 | ref_3b8776f870239652afb11dadb261c212a3c820199878fcdfa1171510f8f2a210 | ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444;
    export type ZodIssue = ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873 & {
        fatal?: boolean;
        message: string;
    };
    export declare const quotelessJson: (obj: any) => string;
    type recursiveZodFormattedError<T> = T extends [
        any,
        ...Array<any>
    ] ? {
        [K in keyof T]?: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[K]>;
    } : T extends Array<any> ? {
        [k: number]: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[number]>;
    } : T extends object ? {
        [K in keyof T]?: ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T[K]>;
    } : unknown;
    export type ZodFormattedError<T, U = string> = {
        _errors: Array<U>;
    } & ref_a31b33a89c63cb3b2be7b8a1ccf2de61f7601fec7d4d2421ec355b712ff3f755<ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T>>;
    export type inferFormattedError<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>, U = string> = ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<ref_72cd1895ff89253dd689ba70b3eb1265a8a79f8803b0eaa814a53515927a2e12<T>, U>;
    export declare class ZodError<T = any> extends Error {
        issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
        get errors(): Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
        constructor(issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>);
        format(): ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T>;
        format<U>(mapper: (issue: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => U): ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T, U>;
        static create: (issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<any>;
        static assert(value: unknown): asserts value is ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
        toString(): string;
        get message(): string;
        get isEmpty(): boolean;
        addIssue: (sub: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => void;
        addIssues: (subs?: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => void;
        flatten(): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T>;
        flatten<U>(mapper?: (issue: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => U): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, U>;
        get formErrors(): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, string>;
    }
    type stripPath<T extends object> = T extends any ? ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.OmitKeys<T, "path"> : never;
    export type IssueData = ref_0060061abe91d3b3eabf571b9119f8bbfb5692307a179d3da303c3d41592253d<ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873> & {
        path?: Array<(string | number)>;
        fatal?: boolean;
    };
    export type ErrorMapCtx = {
        defaultError: string;
        data: any;
    };
    export type ZodErrorMap = (issue: ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873, _ctx: ref_12d5f6a376d0bdcad49ecd1d52c89b2f4fe74044e6bba7aa3196b54824ee14f1) => {
        message: string;
    };
    export {};
    type ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c = (issue: ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873, _ctx: ref_12d5f6a376d0bdcad49ecd1d52c89b2f4fe74044e6bba7aa3196b54824ee14f1) => {
        message: string;
    };
    type ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873 = ref_8430246721e6eae162abae5a9529efd4ee25be4ea1ed70c0a2b4ec701c7a776b | ref_7dce7767bbc991531554b0d095276c9b7dbc3ff1ac7b52ee9e4a6e8d1ff3fcf5 | ref_833615b97b66cb385bede5bcb1b809761793025c58ed9d236bdf908ef04be550 | ref_ce1bc06e245eac1c075b85ad5aff98dceec653ac33175f6fe970c0b77296aa5f | ref_5abe883a8df181651dfb94170a2823bf0dad9ed900f261186b88ea40ca6cfa8d | ref_10cb1ee91e16ecedf030fe1702708cabc372a68050943ff2b6dc7b88efbe5d9b | ref_5dbfe285d931f4c8992798502a06ec6bec5b7ee12c4b77ebed3cb22c750a5e28 | ref_5af8719d748a917b28ecc2de7ab349e0764c75a1454c92181e62cee36bcd9f3d | ref_234ab241eb54bb07486a81973889ef269f7803e835d163009e4705ecd769f7fd | ref_2d7c7c6dcb10552173175b5883593d7b8af4d984082b7c74d7154ffe7ce1381e | ref_b531cfb9a4aea92c88e71d7bb7e3ae0c146bfc4c6ba82559d136676da04cfc0c | ref_fe5178baa4070592ffc97bf99afd85f0f11e6ed7f02b9e5979bdc9f975f0b404 | ref_29234c6142bfd60078b43f07d37647c7e0562df4ec61ba0b4a90d570d2feba2f | ref_b3d2f716235ca27fe740ed584c7d13a5c0096a6c9c107bd9c3e0b14c8e7f31a2 | ref_3b8776f870239652afb11dadb261c212a3c820199878fcdfa1171510f8f2a210 | ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444;
    interface ref_8430246721e6eae162abae5a9529efd4ee25be4ea1ed70c0a2b4ec701c7a776b extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_type;
        expected: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
        received: ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5;
    }
    declare const ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39;
    type ref_3ae9241d929b1463f736bbdee22094213aed19ca3d9da75c4b8eff01f9191ed5 = keyof typeof ref_4fc8d82b0f5c977081b67f3a5380e38d40154e030e78b2f7a0b0c9d3842d65ae;
    declare const ref_4fc8d82b0f5c977081b67f3a5380e38d40154e030e78b2f7a0b0c9d3842d65ae;
    interface ref_7dce7767bbc991531554b0d095276c9b7dbc3ff1ac7b52ee9e4a6e8d1ff3fcf5 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_literal;
        expected: unknown;
        received: unknown;
    }
    interface ref_833615b97b66cb385bede5bcb1b809761793025c58ed9d236bdf908ef04be550 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.unrecognized_keys;
        keys: Array<string>;
    }
    interface ref_ce1bc06e245eac1c075b85ad5aff98dceec653ac33175f6fe970c0b77296aa5f extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union;
        unionErrors: Array<ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5>;
    }
    interface ref_5abe883a8df181651dfb94170a2823bf0dad9ed900f261186b88ea40ca6cfa8d extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_union_discriminator;
        options: Array<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>;
    }
    type ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8 = string | number | symbol | bigint | boolean | null | undefined;
    interface ref_10cb1ee91e16ecedf030fe1702708cabc372a68050943ff2b6dc7b88efbe5d9b extends ZodIssueBase {
        received: string | number;
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_enum_value;
        options: Array<(string | number)>;
    }
    interface ref_5dbfe285d931f4c8992798502a06ec6bec5b7ee12c4b77ebed3cb22c750a5e28 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_arguments;
        argumentsError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
    }
    interface ref_5af8719d748a917b28ecc2de7ab349e0764c75a1454c92181e62cee36bcd9f3d extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_return_type;
        returnTypeError: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
    }
    declare class ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<T = any> extends Error {
        issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
        get errors(): Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>;
        constructor(issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>);
        format(): ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T>;
        format<U>(mapper: (issue: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => U): ref_6dcb6adf38580f488e09601335ad6ac6c423e0cd99055b52be220103ebca4e7e<T, U>;
        static create: (issues: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5<any>;
        static assert(value: unknown): asserts value is ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
        toString(): string;
        get message(): string;
        get isEmpty(): boolean;
        addIssue: (sub: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => void;
        addIssues: (subs?: Array<ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526>) => void;
        flatten(): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T>;
        flatten<U>(mapper?: (issue: ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526) => U): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, U>;
        get formErrors(): ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, string>;
    }
    type ref_4f26ee1ade3ccfe9de31cc71a4ac505071577403894aba06557a83c8d816c526 = ref_15a373cd193c7352ce77b988b7302aed8953a7a175da8b9cba40401f913be873 & {
        fatal?: boolean;
        message: string;
    };
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
    type ref_c8119e61dac95789def6d7eeee5c56e212a59cc5c86b6d2a0a3f4506f5ca1436<T, U = string> = {
        formErrors: Array<U>;
        fieldErrors: {
            [P in ref_48ce6fd54da2422189d2c246f56a672fba482fb151535034b152f2e492449e46<T>]?: Array<U>;
        };
    };
    type ref_48ce6fd54da2422189d2c246f56a672fba482fb151535034b152f2e492449e46<T> = T extends any ? keyof T : never;
    interface ref_234ab241eb54bb07486a81973889ef269f7803e835d163009e4705ecd769f7fd extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_date;
    }
    interface ref_2d7c7c6dcb10552173175b5883593d7b8af4d984082b7c74d7154ffe7ce1381e extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_string;
        validation: ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce;
    }
    type ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce = "email" | "url" | "emoji" | "uuid" | "nanoid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "date" | "time" | "duration" | "ip" | "cidr" | "base64" | "jwt" | "base64url" | {
        includes: string;
        position?: number;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    };
    interface ref_b531cfb9a4aea92c88e71d7bb7e3ae0c146bfc4c6ba82559d136676da04cfc0c extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_small;
        minimum: number | bigint;
        inclusive: boolean;
        exact?: boolean;
        type: "array" | "string" | "number" | "set" | "date" | "bigint";
    }
    interface ref_fe5178baa4070592ffc97bf99afd85f0f11e6ed7f02b9e5979bdc9f975f0b404 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.too_big;
        maximum: number | bigint;
        inclusive: boolean;
        exact?: boolean;
        type: "array" | "string" | "number" | "set" | "date" | "bigint";
    }
    interface ref_29234c6142bfd60078b43f07d37647c7e0562df4ec61ba0b4a90d570d2feba2f extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.invalid_intersection_types;
    }
    interface ref_b3d2f716235ca27fe740ed584c7d13a5c0096a6c9c107bd9c3e0b14c8e7f31a2 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_multiple_of;
        multipleOf: number | bigint;
    }
    interface ref_3b8776f870239652afb11dadb261c212a3c820199878fcdfa1171510f8f2a210 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.not_finite;
    }
    interface ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444 extends ZodIssueBase {
        code: typeof ref_c89cb4e342a101dddf528afe426951d051438eb2b02cb65f52be2858d00d8a39.custom;
        params?: {
            [k: string]: any;
        };
    }
    type ref_12d5f6a376d0bdcad49ecd1d52c89b2f4fe74044e6bba7aa3196b54824ee14f1 = {
        defaultError: string;
        data: any;
    };
    type ref_1d41e0e58b6c4a8beba04a153547b505dfe542ca8db4b93201b14d082ba10767 = string | number;
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
    declare class ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630 {
        value: "aborted" | "dirty" | "valid";
        dirty(): void;
        abort(): void;
        static mergeArray(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, results: Array<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>>): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff;
        static mergeObjectAsync(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, pairs: Array<{
            key: ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
            value: ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        }>): Promise<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>>;
        static mergeObjectSync(status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630, pairs: Array<{
            key: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
            value: ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<any>;
            alwaysSet?: boolean;
        }>): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff;
    }
    type ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<T> = ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T> | ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<T>;
    type ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<T> = Promise<ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<T>>;
    type ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K extends keyof T> = {
        [P in K]: T[P];
    };
    type ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<T, U> = T extends U ? never : T;
    type ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K extends keyof any> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
    type ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K extends keyof any, T> = {
        [P in K]: T;
    };
    declare namespace ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138 {
        export type MergeShapes<U, V> = {
            [k in ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof U, keyof V>]: U[k];
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
    type ref_0060061abe91d3b3eabf571b9119f8bbfb5692307a179d3da303c3d41592253d<T extends object> = T extends any ? ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.OmitKeys<T, "path"> : never;
    type ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>;
    declare abstract class ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<Output = any, Def extends ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318 = ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318, Input = Output> {
        readonly _type: Output;
        readonly _output: Output;
        readonly _input: Input;
        readonly _def: Def;
        get description(): string | undefined;
        "~standard": ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Props<Input, Output>;
        abstract _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<Output>;
        _getType(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): string;
        _getOrReturnCtx(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5, ctx?: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad | undefined): ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
        _processInputParams(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): {
            status: ref_0d1d63737bc454b965dfa06ca878deb94a36095d4df4efdc8ec6201b1ef40630;
            ctx: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
        };
        _parseSync(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_6b38df43e3b8d059d4b95c636ed6b780a0b35123361b5a3c7714bddfe5a3bdff<Output>;
        _parseAsync(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_096be4cfda75c4def2345c8c2c20f536ff9df42121bf1085d69a823aecd7b4d6<Output>;
        parse(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Output;
        safeParse(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>;
        "~validate"(data: unknown): ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Result<Output> | Promise<ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Result<Output>>;
        parseAsync(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Promise<Output>;
        safeParseAsync(data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>): Promise<ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>>;
        spa: (data: unknown, params?: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380>) => Promise<ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output>>;
        refine<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, message?: string | ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 | ((arg: Output) => ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        refine(check: (arg: Output) => unknown | Promise<unknown>, message?: string | ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 | ((arg: Output) => ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        refinement<RefinedOutput extends Output>(check: (arg: Output) => arg is RefinedOutput, refinementData: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2 | ((arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        refinement(check: (arg: Output) => boolean, refinementData: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2 | ((arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2)): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        _refinement(refinement: ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<Output>["refinement"]): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        superRefine<RefinedOutput extends Output>(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => arg is RefinedOutput): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, RefinedOutput, Input>;
        superRefine(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => void): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        superRefine(refinement: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => Promise<void>): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, Output, Input>;
        constructor(def: Def);
        optional(): ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<this>;
        nullable(): ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<this>;
        nullish(): ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<this>>;
        array(): ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<this>;
        promise(): ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<this>;
        or<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(option: T): ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<[
            this,
            T
        ]>;
        and<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(incoming: T): ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<this, T>;
        transform<NewOut>(transform: (arg: Output, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => NewOut | Promise<NewOut>): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, NewOut>;
        default(def: ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<Input>): ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<this>;
        default(def: () => ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.noUndefined<Input>): ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<this>;
        brand<B extends string | number | symbol>(brand?: B): ref_3d3d369d4321690bd1e45fb6d995bd841f36c7af2bd8e7b7cdb4124964332972<this, B>;
        catch(def: Output): ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<this>;
        catch(def: (ctx: {
            error: ref_cc1f2b63a722802a39db0aca41956f97cba0cad64e92cd4843b395a1112076c5;
            input: Input;
        }) => Output): ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<this>;
        describe(description: string): this;
        pipe<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(target: T): ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<this, T>;
        readonly(): ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<this>;
        isOptional(): boolean;
        isNullable(): boolean;
    }
    interface ref_266d004d584f5a7c7e31f5579526214bdad212a29aa7edf9d3e061bcfb568318 {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        description?: string;
    }
    type ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336<Input = unknown, Output = Input> = {
        readonly "~standard": ref_b048111fb86adbb166373eb4ab0413876f139d3934ee0f36bee2f5498d6d2336.Props<Input, Output>;
    };
    type ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5 = {
        data: any;
        path: Array<(string | number)>;
        parent: ref_22aa2bee18e97729f43a6d6972c8a11a52c9dda42ac63d0cf2a6615dddf5aaad;
    };
    type ref_a53b12f5c91d13d8cb2303d04816f2717e675a0cc2b15e910eaec8073eee3380 = {
        path: Array<(string | number)>;
        errorMap: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        async: boolean;
    };
    type ref_b2673d019976f50bff6b98de03448c32f24afe1844a92c2705000395ba022db7<Input, Output> = ref_f766c4e238036e6454dc9857683d8608e23bac36680b0a918714985601b91c08<Output> | ref_b25c08a97ba53a5f06e295ddd217d9e76c9df21feb9836b728e892de95e41828<Input>;
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
    type ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 = ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Omit<ref_1a482ad12c4585a0bad6a6d116577fd919106151d75670a1de476ba637601444, "code">>;
    declare namespace ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e {
        type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
        export type isAny<T> = 0 extends 1 & T ? true : false;
        export const assertEqual: <A, B>(val: AssertEqual<A, B>) => AssertEqual<A, B>;
        export function assertIs<T>(_arg: T): void;
        export function assertNever(_x: never): never;
        export type Omit<T, K extends keyof T> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
        export type OmitKeys<T, K extends string> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;
        export type MakePartial<T, K extends keyof T> = ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K> & ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K>>;
        export type Exactly<T, X> = T & ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof X, keyof T>, never>;
        export const arrayToEnum: <T extends string, U extends [
            T,
            ...Array<T>
        ]>(items: U) => {
            [k in U[number]]: k;
        };
        export const getValidEnumValues: (obj: any) => Array<any>;
        export const objectValues: (obj: any) => Array<any>;
        export const objectKeys: ObjectConstructor["keys"];
        export const find: <T>(arr: Array<T>, checker: (arg: T) => any) => T | undefined;
        export type identity<T> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.identity<T>;
        export type flatten<T> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.flatten<T>;
        export type noUndefined<T> = T extends undefined ? never : T;
        export const isInteger: NumberConstructor["isInteger"];
        export function joinValues<T extends Array<any>>(array: T, separator?: string): string;
        export const jsonStringifyReplacer: (_: string, value: any) => any;
        export {};
    }
    declare class ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_b7af839dbb798a07fa86ad4cf6f1d995d08780a8e6457755a28775018a167a2a<T>, Input = ref_53cafa2a017da41ca29135448bbcd038a6b22ed3bd81218f74ea26ea9df0cf1b<T>> extends ZodType<Output, ZodEffectsDef<T>, Input> {
        innerType(): T;
        sourceType(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: I, effect: ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<I["_output"]>, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"]>;
        static createWithPreprocess: <I extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(preprocess: (arg: unknown, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => unknown, schema: I, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<I, I["_output"], unknown>;
    }
    interface ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027 {
        addIssue: (arg: ref_634de7f4e40e5e6b52bbca4f7744a41a2043374a15ebe6f70e51bbb5d8e7dfd2) => void;
        path: Array<(string | number)>;
    }
    type ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<T> = {
        type: "refinement";
        refinement: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    declare class ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] | undefined, ZodOptionalDef<T>, T["_input"] | undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T_1>;
    }
    declare class ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] | null, ZodNullableDef<T>, T["_input"] | null> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        unwrap(): T;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<T_1>;
    }
    declare class ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Cardinality extends ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many"> extends ZodType<arrayOutputType<T, Cardinality>, ZodArrayDef<T>, Cardinality extends "atleastone" ? [
        T["_input"],
        ...Array<T["_input"]>
    ] : Array<T["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get element(): T;
        min(minLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        max(maxLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        length(len: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T, "atleastone">;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<T_1, "many">;
    }
    type ref_29cf7c80f7631557029c1936b7a24c4c58a5d53c36b7e3cdc33bc1f94783d54b = "many" | "atleastone";
    declare namespace ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6 {
        type ErrMessage = string | {
            message?: string;
        };
        const errToObj: (message?: ErrMessage) => {
            message?: string | undefined;
        };
        const toString: (message?: ErrMessage) => string | undefined;
    }
    type ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 = {
        errorMap?: ref_d831379d65248f7e3fb7f88d84a0c680c74987e470d3e06e726f2bdd624c1c8c;
        invalid_type_error?: string;
        required_error?: string;
        message?: string;
        description?: string;
    } | undefined;
    declare class ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Promise<T["_output"]>, ZodPromiseDef<T>, Promise<T["_input"]>> {
        unwrap(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(schema: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_f536fb0a2fa837e2ddffda85b7b0e13eab2f1c6ca079438c933d3c86f80aa408<T_1>;
    }
    declare class ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<T extends ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4> extends ZodType<T[number]["_output"], ZodUnionDef<T>, T[number]["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get options(): T;
        static create: <T_1 extends readonly [
            ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
            ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
            ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
        ]>(types: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_ab53963f4aec221f0d756e315d3a9d8e0d6db88faeea044a7a091b024d41541f<T_1>;
    }
    declare class ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"] & U["_output"], ZodIntersectionDef<T, U>, T["_input"] & U["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, U_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(left: T_1, right: U_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e6eb2fb9c41ce81fc811cb5afa23d09a577167bb88ae918b2229e8bb12b84a8b<T_1, U_1>;
    }
    declare class ref_ae965171e9042f8b7cbf4c48fb7c9509bb43f726fe71432b35521df77b635e2f<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<util.noUndefined<T["_output"]>, ZodDefaultDef<T>, T["_input"] | undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
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
    declare class ref_3d3d369d4321690bd1e45fb6d995bd841f36c7af2bd8e7b7cdb4124964332972<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends string | number | symbol> extends ZodType<T["_output"] & BRAND<B>, ZodBrandedDef<T>, T["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        unwrap(): T;
    }
    declare class ref_414b572ddc049ff0aa2eeb9ba006f24b8cfa3d1fe5b2cea8d1aa3ca492977e63<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<T["_output"], ZodCatchDef<T>, unknown> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
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
    declare class ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<B["_output"], ZodPipelineDef<A, B>, A["_input"]> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        static create<A extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, B extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(a: A, b: B): ref_31e4c65f404577d373a125ded2951459ba81f152d8ed3925bdf80c9e1801ff96<A, B>;
    }
    declare class ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<MakeReadonly<T["_output"]>, ZodReadonlyDef<T>, MakeReadonly<T["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(type: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_fc2d285c63b8113bb536264a402e14dd1cfed5ad1b3f840c02bd37a8994d53a5<T_1>;
        unwrap(): T;
    }
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
    interface ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 extends Array<string> {
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
    declare class ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9 extends ZodType<string, ZodStringDef, string> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<string>;
        protected _regex(regex: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e, validation: ref_7735abe78988e7e666d6013fc5b21856eb90a7de1936f1ccde50868d215aa3ce, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_237c1c1cada64b7011a3f83934d58d1ec14e7695b92a309a72a8778f6644afee<this, string, string>;
        _addCheck(check: ref_be511f821377c99039b04813891688a3860d28272980b7c58943901acd476c69): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        email(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        url(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        emoji(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        uuid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        nanoid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cuid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cuid2(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        ulid(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        base64(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        base64url(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        jwt(options?: {
            alg?: string;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        ip(options?: string | {
            version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        cidr(options?: string | {
            version?: ref_987d39bf0c51d34ee55c45be328fe81b376c57632b28d61645add62d8075e504;
            message?: string;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        datetime(options?: string | {
            message?: string | undefined;
            precision?: number | null;
            offset?: boolean;
            local?: boolean;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        date(message?: string): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        time(options?: string | {
            message?: string | undefined;
            precision?: number | null;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        duration(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        regex(regex: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        includes(value: string, options?: {
            message?: string;
            position?: number;
        }): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        startsWith(value: string, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        endsWith(value: string, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        min(minLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        max(maxLength: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        length(len: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        trim(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        toLowerCase(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
        toUpperCase(): ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9;
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
    type ref_b7af839dbb798a07fa86ad4cf6f1d995d08780a8e6457755a28775018a167a2a<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
    type ref_53cafa2a017da41ca29135448bbcd038a6b22ed3bd81218f74ea26ea9df0cf1b<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_input"];
    type ref_ddb25aa26ce82c606d7d01ad165c4e8da4474a01ac65d7aefa8d01c9207e9ad3<T> = ref_07eac5b0927db61a755b8de83595e0f9ae41e0883e561e30d57444c02702b344<T> | ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> | ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T>;
    type ref_5b97dc217e6e54ca338e52dc393462e2b0943ca29d7058db7747b5009e2e9b5e<T> = {
        type: "transform";
        transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    type ref_9c1be423c00330d350db9f9db9f6ec5d2e0caa9199b9db0bc71f0bdc5205b683<T> = {
        type: "preprocess";
        transform: (arg: T, ctx: ref_7cfa4af97d35b81b8c96f93ae68697d294baa4a0dabba540b1e14266cdb51027) => any;
    };
    type ref_1630af1dc70f3c2e083f531134bd53f26ac2bfd1e15e18cb45eef30a781c1cf4 = ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<[
        ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd,
        ...Array<ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>
    ]>;
    type ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<T> = {
        readonly [P in keyof T]: T[P];
    };
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
    declare class ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3 extends ZodType<number, ZodNumberDef, number> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<number>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        gte(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        min: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        gt(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        lte(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        max: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        lt(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        _addCheck(check: ref_0bcedc16a1fc82b0af43aea87dec9b0e716dbb33a814706c25e0399910fd89b0): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        int(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        positive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        negative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        nonpositive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        nonnegative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        multipleOf(value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        step: (value: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        finite(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
        safe(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_080f78f11f688e61b67b670f585a2ca9b78fc400ed596adc458c897d941823f3;
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
    declare class ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9 extends ZodType<bigint, ZodBigIntDef, bigint> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<bigint>;
        _getInvalidInput(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_bfabdc7ad0e2f9c99cd1a783f0b5a38c85977b8b32ec16e36029936410b5188f;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        gte(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        min: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        gt(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        lte(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        max: (value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage) => ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        lt(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        _addCheck(check: ref_a75ef1e0eef2a54e2b99d9074207a8657a8641b0436a7a32f9bb975043014d79): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        positive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        negative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        nonpositive(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        nonnegative(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        multipleOf(value: bigint, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c3d337b9a5f9f59b14a58282d78a3360d07127033f8db41346433ee931ea55e9;
        get minValue(): bigint | null;
        get maxValue(): bigint | null;
    }
    declare class ref_8f7aaa1927511a25436031f2d76013d21ec3342e07521a6fc1fea8c72d22eb7a extends ZodType<boolean, ZodBooleanDef, boolean> {
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
    declare class ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0 extends ZodType<Date, ZodDateDef, Date> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        _addCheck(check: ref_cb14d407bd64e524d5cdde05bfbcbd1016a527cf070f3c753730d408486f440d): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        min(minDate: ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        max(maxDate: ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
        get minDate(): ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | null;
        get maxDate(): ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | null;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7 & {
            coerce?: boolean;
        }) => ref_c7d95c69bbaf3472d7c9c8dc0fbe7cca8d2df1e3bac2e3c31ce777fd40d880e0;
    }
    interface ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde {
        toLocaleString(locales?: string | Array<string>, options?: ref_89f7d8d1ab8c70bab3b5f77a381844f9ae85471a5b0dde2b9d871631b2c8690b.DateTimeFormatOptions): string;
        toLocaleDateString(locales?: string | Array<string>, options?: ref_89f7d8d1ab8c70bab3b5f77a381844f9ae85471a5b0dde2b9d871631b2c8690b.DateTimeFormatOptions): string;
        toLocaleTimeString(locales?: string | Array<string>, options?: ref_89f7d8d1ab8c70bab3b5f77a381844f9ae85471a5b0dde2b9d871631b2c8690b.DateTimeFormatOptions): string;
    }
    declare namespace ref_89f7d8d1ab8c70bab3b5f77a381844f9ae85471a5b0dde2b9d871631b2c8690b {
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
            new (locales?: string | Array<string>, options?: CollatorOptions): Collator;
            (locales?: string | Array<string>, options?: CollatorOptions): Collator;
            supportedLocalesOf(locales: string | Array<string>, options?: CollatorOptions): Array<string>;
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
            new (locales?: string | Array<string>, options?: NumberFormatOptions): NumberFormat;
            (locales?: string | Array<string>, options?: NumberFormatOptions): NumberFormat;
            supportedLocalesOf(locales: string | Array<string>, options?: NumberFormatOptions): Array<string>;
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
            format(date?: ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | number): string;
            resolvedOptions(): ResolvedDateTimeFormatOptions;
        }
        interface DateTimeFormatConstructor {
            new (locales?: string | Array<string>, options?: DateTimeFormatOptions): DateTimeFormat;
            (locales?: string | Array<string>, options?: DateTimeFormatOptions): DateTimeFormat;
            supportedLocalesOf(locales: string | Array<string>, options?: DateTimeFormatOptions): Array<string>;
            readonly prototype: DateTimeFormat;
        }
        var DateTimeFormat: DateTimeFormatConstructor;
    }
    declare class ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49 extends ZodType<symbol, ZodSymbolDef, symbol> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_2a080bdb4363a31886b2ce21eed5e94964a414b00d8442f8e94d2f768d0b1a49;
    }
    declare class ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973 extends ZodType<undefined, ZodUndefinedDef, undefined> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_46105a8aa7e79a176841e5e82b9f2f30011f5c129d9b986ca80c0ea787dde973;
    }
    declare class ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377 extends ZodType<null, ZodNullDef, null> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_614341d4ebc021ced738a1603747ae5b1b6616b120c3a26afa3d648e83e0d377;
    }
    declare class ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5 extends ZodType<any, ZodAnyDef, any> {
        _any: true;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_e86a2c311ae7a9c12fc2d6175e6e015a4fea1dd50ae26a236e1d6a6be5d34fb5;
    }
    declare class ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525 extends ZodType<unknown, ZodUnknownDef, unknown> {
        _unknown: true;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_6b9b6b40fa4fe35e2e2bf9f27e69dcdf42ef5ab0c7690b6758658491825c9525;
    }
    declare class ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22 extends ZodType<never, ZodNeverDef, never> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_32378ee9aeee05b6301d1b882abd3a415b5505e8123ccd5fd6216cff1b1d2a22;
    }
    declare class ref_0fd1f2a94ccb74633862f100b3b87d470914d5265bb204f272ead1cc0da73bad extends ZodType<void, ZodVoidDef, void> {
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
    type ref_6378cbdcbc502dbb894aa6bfa22212af95f6f9188919dc161d16995cf21e543f<Shape extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> = ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.addQuestionMarks<{
        [k in keyof Shape]: Shape[k]["_input"];
    }>;
    type ref_f6685dbaf0703d2d7571eddfd4628313b10ed0622e187d004b99989fc236ca9e<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc> = ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc extends T ? unknown : {
        [k: string]: T["_input"];
    };
    type ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = T extends ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<infer U> ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U> : T extends ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<infer U> ? ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<U>> : T;
    declare class ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, UnknownKeys extends ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef = ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, Catchall extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Output = ref_5258eef9689a09d552375176640cc59cd1195b4c96740742e56500604bba4598<T, Catchall, UnknownKeys>, Input = ref_727452843ca727c4823ed24af96c151977cc718f901ddd1d115c605eea565b63<T, Catchall, UnknownKeys>> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
        private _cached;
        _getCached(): {
            shape: T;
            keys: Array<string>;
        };
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get shape(): T;
        strict(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strict", Catchall>;
        strip(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "strip", Catchall>;
        passthrough(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
        nonstrict: () => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, "passthrough", Catchall>;
        extend<Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        augment: <Augmentation extends ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66>(augmentation: Augmentation) => ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
        merge<Incoming extends ref_3d77202f37cbfdb0bee02a9f0024f2b10f4ea08d1aac799712423725ba9b375c, Augmentation extends Incoming["shape"]>(merging: Incoming): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]>;
        setKey<Key extends string, Schema extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(key: Key, schema: Schema): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T & {
            [k in Key]: Schema;
        }, UnknownKeys, Catchall>;
        catchall<Index extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(index: Index): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<T, UnknownKeys, Index>;
        pick<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
        omit<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, keyof Mask>, UnknownKeys, Catchall>;
        deepPartial(): ref_4e9f9ade8442e8a5a8cb5d3ca1e729fda301f711c050864534a90e1b13f61f93.DeepPartial<this>;
        partial(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
            [k in keyof T]: ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]>;
        }, UnknownKeys, Catchall>;
        partial<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.noNever<{
            [k in keyof T]: k extends keyof Mask ? ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        required(): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
            [k in keyof T]: ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]>;
        }, UnknownKeys, Catchall>;
        required<Mask extends ref_e90cbcfb5ea3397e9adf375a815f58b1c23d6c0fbdcbffa2e85bd3b587efe40e.Exactly<{
            [k in keyof T]?: true;
        }, Mask>>(mask: Mask): ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_66f07c8e47b5794c312992ed96036020e4776a77e561fd0f165a430b90f72138.noNever<{
            [k in keyof T]: k extends keyof Mask ? ref_0ca450928a671047080394c30f5d01ca4a39f72ee2f54f44187ffa2e0905ed94<T[k]> : T[k];
        }>, UnknownKeys, Catchall>;
        keyof(): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<ref_db72c11dd07aea97cac561f519e2df578d891de5ba43e4f155e1a8d7cde8c03e.UnionToTupleString<keyof T>>;
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
    type ref_3d77202f37cbfdb0bee02a9f0024f2b10f4ea08d1aac799712423725ba9b375c = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<any, any, any>;
    type ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<T, U> = T extends U ? T : never;
    declare namespace ref_4e9f9ade8442e8a5a8cb5d3ca1e729fda301f711c050864534a90e1b13f61f93 {
        type DeepPartial<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> = T extends ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66> ? ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
            [k in keyof T["shape"]]: ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<DeepPartial<T["shape"][k]>>;
        }, T["_def"]["unknownKeys"], T["_def"]["catchall"]> : T extends ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<infer Type, infer Card> ? ref_57ab9ed05199b8560aa8a9fd0fec47c7135be1531f9324128f390bd475ebfadf<DeepPartial<Type>, Card> : T extends ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<infer Type> ? ref_34f4e814aabfa03bc695c7e8857dc26427c8ab38f95285cd129d6e40ade33ef7<DeepPartial<Type>> : T extends ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<infer Type> ? ref_9aedf111b849f96c2001ac0ebea8e37a515e289ea8002bdef354d244e6118fbd<DeepPartial<Type>> : T extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<infer Items> ? {
            [k in keyof Items]: Items[k] extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd ? DeepPartial<Items[k]> : never;
        } extends infer PI ? PI extends ref_c6ea32b718876381d3ac398fb91bbc7d97ef7a63af3f467908ce5039e1ebf278 ? ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<PI> : never : never : T;
    }
    declare class ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<T extends [
        string,
        ...Array<string>
    ]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
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
        static create: typeof ref_f61d5ecb8a60ce7ce1c461bc8f22c60dba00cdfc0e554166f7136d7dda853446;
    }
    declare namespace ref_db72c11dd07aea97cac561f519e2df578d891de5ba43e4f155e1a8d7cde8c03e {
        type UnionToIntersectionFn<T> = (T extends unknown ? (k: () => T) => void : never) extends (k: infer Intersection) => void ? Intersection : never;
        type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer Last ? Last : never;
        type UnionToTuple<T, Tuple extends Array<unknown> = [
        ]> = [
            T
        ] extends [
            never
        ] ? Tuple : UnionToTuple<ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<T, GetUnionLast<T>>, [
            GetUnionLast<T>,
            ...Tuple
        ]>;
        type CastToStringTuple<T> = T extends [
            string,
            ...Array<string>
        ] ? T : never;
        export type UnionToTupleString<T> = CastToStringTuple<UnionToTuple<T>>;
        export {};
    }
    type ref_d950ef6eac7f5c352e43a47a3ad56695581bb1c13c584410b6f3db89c5652435<T extends ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5> = {
        [k in T[number]]: k;
    };
    type ref_2e10d2573e41fee1ae71c708a59b8ecae63ed13e6774db0e9bb7751dcefb33d5<T extends string = string> = readonly [
        T,
        ...Array<T>
    ];
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
    declare function ref_f61d5ecb8a60ce7ce1c461bc8f22c60dba00cdfc0e554166f7136d7dda853446<U extends string, T extends [
        U,
        ...Array<U>
    ]>(values: T, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_e2eb3575d8053d1c1de199aa7822a308d75e2cb23fb2e489bf5ad8bea2bb115d<T>;
    type ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator extends string> = ref_a81a85de2d3c6b6c277c9fe767fc1bbd96044477f79615541277779ae8de4da1<{
        [key in Discriminator]: ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd;
    } & ref_8192f292463c802ab40a61533f140ea13757f1b6b87c48d76bf6b7da77ecdf66, ref_be161baee68eea5695a05053c4a300f88401ae14ef8ecaa1dbd4890f905558ef, ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>;
    interface ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<K, V> {
        clear(): void;
        delete(key: K): boolean;
        forEach(callbackfn: (value: V, key: K, map: ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<K, V>) => void, thisArg?: any): void;
        get(key: K): V | undefined;
        has(key: K): boolean;
        set(key: K, value: V): this;
        readonly size: number;
    }
    interface Map<K, V> {
        [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<[
            K,
            V
        ]>;
        entries(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<[
            K,
            V
        ]>;
        keys(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<K>;
        values(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<V>;
    }
    interface ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T> extends Iterator<T> {
        [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
    }
    declare class ref_4d604d3ebd63354d93910b02ddbee28bf2002d123637d9725ed1b2d5ac0b0143<Discriminator extends string, Options extends readonly Array<ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<Discriminator>>> extends ZodType<output<Options[number]>, ZodDiscriminatedUnionDef<Discriminator, Options>, input<Options[number]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get discriminator(): Discriminator;
        get options(): Options;
        get optionsMap(): ref_44c7fc0ed11523b616298ad99a1844f17f32ee2d32dc47eb1d10f724b8b0045d<ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8, ref_c30a7b668f0233e444964551215ec7571f6f5bfa4d179c760fd49282ce27e9bb<any>>;
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
    ], Rest extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd | null = null> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
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
    type ref_d556e538c490b9db3e5347ed57a98084d58c95713eea870a81ed006c7396da45<T extends string | number | symbol> = {
        [BRAND]: {
            [k in T]: true;
        };
    };
    declare class ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Key extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7 = ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<RecordType<Key["_output"], Value["_output"]>, ZodRecordDef<Key, Value>, RecordType<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get element(): Value;
        static create<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<ref_fcca647b3763f14a3018536fdb7ae8c9cd0147ce34e4606200d810140fdc76e9, Value>;
        static create<Keys extends ref_96f7b5acaf3848f9307f6ea39850246ecff8245108b0d7a52404a7ea96ae1dd7, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keySchema: Keys, valueType: Value, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7): ref_f8bdefd62e9fa750d0ed71eb34fda5666d09e042346614c6f70c82de6f5376d3<Keys, Value>;
    }
    declare class ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Map<Key["_output"], Value["_output"]>, ZodMapDef<Key, Value>, Map<Key["_input"], Value["_input"]>> {
        get keySchema(): Key;
        get valueSchema(): Value;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <Key_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd, Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(keyType: Key_1, valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_3e3b01b0616eedb7f73258b0c326913010faea1b63958277010b7d2b58aa468a<Key_1, Value_1>;
    }
    declare class ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<Set<Value["_output"]>, ZodSetDef<Value>, Set<Value["_input"]>> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        min(minSize: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        max(maxSize: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        size(size: number, message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): this;
        nonempty(message?: ref_f340963036f1b415f004df12775db1c3e9adafe1186e23dfb032905d6a9624d6.ErrMessage): ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value>;
        static create: <Value_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd = ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(valueType: Value_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_b9b2ca283d77ae7908b39ddeb063d31614a8b2a24c4ac9459c38d53d3797d364<Value_1>;
    }
    type ref_96e80e0d4b90dfee05051a6511a8021b83bf4b95eeb61441a31636df9ccac78f<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
    declare class ref_370d6d01ed2b54b3d737acd0466721fd3e0cc57b863b16820b3df46b440c6b71<Args extends ref_6adf1ec03834fda93918b9ec6e8a3c4d2e55ed098fb89c01a1a3baadb517eb14<any, any>, Returns extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<OuterTypeOfFunction<Args, Returns>, ZodFunctionDef<Args, Returns>, InnerTypeOfFunction<Args, Returns>> {
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
    declare class ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd> extends ZodType<output<T>, ZodLazyDef<T>, input<T>> {
        get schema(): T;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        static create: <T_1 extends ref_a84776ffb2cfae4bfe1311c5d138150d97f321a53670cac35c62faaf70d4e3fd>(getter: () => T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_7f30169b1ec4609434fcf3cd8ed5135bedb52a82d69b68f01f59ca10fa0b2c72<T_1>;
    }
    declare class ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T> extends ZodType<T, ZodLiteralDef<T>, T> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<this["_output"]>;
        get value(): T;
        static create: <T_1 extends ref_a01ab7398969a5c62623b5d8e65c3f2ecb41301e2dccc67b9005228ff39ab3e8>(value: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_a01cb588444b8f665a908572ad94e39af9bd1a1a9883c696d17d7bb4c3af832d<T_1>;
    }
    type ref_3ea6c28a52bea762b63dc91839431c59e5e90891a28b766ad3cbddab5d7d122f = keyof Array<any>;
    type ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814 = {
        [k: string]: string | number;
        [nu: number]: string;
    };
    declare class ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814> extends ZodType<T[keyof T], ZodNativeEnumDef<T>, T[keyof T]> {
        #private;
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<T[keyof T]>;
        get enum(): T;
        static create: <T_1 extends ref_993e4f49d86aeefda00132de70e6033e970da512e785ee61d0091034d413b814>(values: T_1, params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_84bfee6b5e508e879b82e9058527fb86fff14285267b8f50df3b0953e4c069f7<T_1>;
    }
    declare class ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5 extends ZodType<number, ZodNaNDef, number> {
        _parse(input: ref_7c4216931f1bf267d6d10bc610830fd2762392fcb2696c3b3f28564be3f2b4a5): ref_a6aa2272c5539723559d4e3a221a1e84708df5d1faa9c53cf832ef36e7dc1862<any>;
        static create: (params?: ref_f43834d59fa989570947d8c466856fbeac760e9101c94f6804507c463c6df2e7) => ref_871c8d495bd9663a1905fcdc900300ecd3777351e477f5e076bbb958037edba5;
    }
    interface ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 {
        name: string;
        message: string;
        stack?: string;
    }
    interface ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
        next(...args: [
        ] | [
            TNext
        ]): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
        return(value: TReturn): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
        throw(e: any): ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn>;
        [Symbol.iterator](): ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6<T, TReturn, TNext>;
    }
    interface ref_4bcf8aa9b27b15947c915bcf464dbb9858c79507841c512e85e8d0fc8a2fc164<K, V> {
        forEach(callbackfn: (value: V, key: K, map: ref_4bcf8aa9b27b15947c915bcf464dbb9858c79507841c512e85e8d0fc8a2fc164<K, V>) => void, thisArg?: any): void;
        get(key: K): V | undefined;
        has(key: K): boolean;
        readonly size: number;
    }
    interface ref_223498899e2fea7907c1f27aff3b8a6036883d7d35d741f183078edb4b9cca0e<T> {
        add(value: T): this;
        clear(): void;
        delete(value: T): boolean;
        forEach(callbackfn: (value: T, value2: T, set: ref_223498899e2fea7907c1f27aff3b8a6036883d7d35d741f183078edb4b9cca0e<T>) => void, thisArg?: any): void;
        has(value: T): boolean;
        readonly size: number;
    }
    interface Set<T> {
        [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
        entries(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<[
            T,
            T
        ]>;
        keys(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
        values(): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
    }
    interface ref_7aba4271f6e73e5e1b2f800bce86ba026d0da7f122230e4ef87ef655be1660e7<T> {
        forEach(callbackfn: (value: T, value2: T, set: ref_7aba4271f6e73e5e1b2f800bce86ba026d0da7f122230e4ef87ef655be1660e7<T>) => void, thisArg?: any): void;
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
    } | ref_402e4089d1cadbf437cd7edeb1bfc3fa43f4f1db164b10ba447192b20efffdde | ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 | ref_cd836f267b30b4e3a36d5514ffa668795a0224108d36a2bdb136258596fb3fc6 | Promise<unknown> | ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
    type ref_65b88c59aaee1139f92eb389c8db8169de36f9a2d28c593fed7cc57d89560ba4<T, TReturn = any> = ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<T> | ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn>;
    interface ref_1ecd670b59fc27604133b0568cf2bb2275f1dbeff100f82d477e4be075936408<TYield> {
        done?: false;
        value: TYield;
    }
    interface ref_b240d17fc00142a8670548005205678c31c92daacd022c7f22bf7363eecb69e0<TReturn> {
        done: true;
        value: TReturn;
    }
    type ref_383f4db34312f7c245d452c77aa35f249cb120639e2e219cbc7e7b323cceefb8 = ref_a5067a804516c0b3cdba2f961ddb3152bb16a450ad0db160a5b6f462b5b52849 & {
        fatal?: boolean;
    };
    type ref_72cd1895ff89253dd689ba70b3eb1265a8a79f8803b0eaa814a53515927a2e12<T extends ref_f5946e6c06a3c1c49b02b6add05cd35465eebeb43553333c33e447ad8b622bbc<any, any, any>> = T["_output"];
    type ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 = {
        [k: string]: ref_601a852285aedeb58e1d40805deaa5e148f8f9c8259a66eab85e7eec304c0181 | Array<string>;
    };
}
const ref_a3b927c8efff12928b03a3c881c01889267a188a6a5c691c7d6435ae7deb6a19 = z.object({ username: z.string() });
