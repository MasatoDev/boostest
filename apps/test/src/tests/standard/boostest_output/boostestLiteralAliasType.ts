export function boostestLiteralAliasType<T>(args?: Partial<T>): T {
	return {
		stringLiteral: "test string data",
		numberLiteral: 10,
		bigintLiteral: 9007199254740991n,
		booleanLiteral: false,
		nullLiteral: null,
		undefinedId: undefined,
		anyLiteral: "any",
		unknownLiteral: undefined,
		objectLiteral: {},
		voidLiteral: null,
		functionLiteral: {},
		arrayLiteral: [],
		referenceLiteral: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		unionType: "test string data",
		conditionalType: false,
		tsLiteralString: "string",
		tsLiteralNumber: 20,
		tsBigInt: 10000000000000n,
		tsLiteralBoolean: true,
		tsNullLiteral: null,
		tsObject: {},
		tsArray: [],
		symbolLiteral: Symbol(),
		tsTuple: [
			"test string data",
			10,
			"any",
			{
				name: "test string data",
				ver: 10,
				age: 10
			},
			{
				name: "test string data",
				ver: 10
			}
		],
		tsNamedTuple: [
			"test string data",
			10,
			{
				name: "test string data",
				ver: 10,
				age: 10
			},
			{
				name: "test string data",
				ver: 10
			}
		],
		intersectionType: {
			...{
				name: "test string data",
				ver: 10,
				age: 10
			},
			...{
				name: "test string data",
				age: 10
			}
		},
		keyof: "name",
		indexAccessor: "test string data",
		...args
	} as T;
}
type main_output_target = { stringLiteral: string; numberLiteral: number; bigintLiteral: bigint; booleanLiteral: false | true; nullLiteral: null; undefinedId: undefined; anyLiteral: any; unknownLiteral: unknown; objectLiteral: object; voidLiteral: void; functionLiteral: {  }; arrayLiteral: Array<string>; referenceLiteral: { name: string; ver: number; age: number }; unionType: string | number; conditionalType: false; tsLiteralString: "string"; tsLiteralNumber: 20; tsBigInt: 10000000000000n; tsLiteralBoolean: true; tsNullLiteral: null; tsObject: {  }; tsArray: { length: 0 }; symbolLiteral: symbol; tsTuple: { 0: string; 1: number; 2: any; 3: { name: string; ver: number; age: number }; 4: { name: string; ver: number }; length: 5 }; tsNamedTuple: { 0: string; 1: number; 2: { name: string; ver: number; age: number }; 3: { name: string; ver: number }; length: 4 }; intersectionType: { name: string; ver: number; age: number } & { name: string; age: number }; keyof: "name" | "ver" | "age"; indexAccessor: string }; // Extracted from typeAlias

type main = ref_7f70f7ee00ac9f16d372fb5b3ae1d0c231f1d632fad6045b7a3eda18bc0e221c;
type ref_7f70f7ee00ac9f16d372fb5b3ae1d0c231f1d632fad6045b7a3eda18bc0e221c = {
    stringLiteral: string;
    numberLiteral: number;
    bigintLiteral: bigint;
    booleanLiteral: boolean;
    nullLiteral: null;
    undefinedId: undefined;
    anyLiteral: any;
    unknownLiteral: unknown;
    objectLiteral: object;
    voidLiteral: void;
    functionLiteral: () => void;
    arrayLiteral: Array<string>;
    referenceLiteral: ref_a511bd49d68dd0f094ff0307e5171f0199ad78fa1fb1138df3b0c35af3dd9c6c;
    unionType: string | number;
    conditionalType: string extends number ? true : false;
    tsLiteralString: "string";
    tsLiteralNumber: 20;
    tsBigInt: 10000000000000n;
    tsLiteralBoolean: true;
    tsNullLiteral: null;
    tsObject: {};
    tsArray: [
    ];
    symbolLiteral: symbol;
    tsTuple: [
        string,
        number,
        any,
        ref_083d195671f7477cf8a15fa218dcb8a000e4ea45c3686b239d93df7bbaa93cc1,
        ref_e164585b4decadd1d509f61fd38db7e1f97681d6b09f3935fc7ac0ae4dd5c71c
    ];
    tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_b125dbcdd742aff480fecf8781c4d5b4e876ac483d30bfc37a0906211625e6ed,
        refInterface: ref_8b1ba96f8aea6c83a69da0c71c3d9508aa8fa223bf0f01f36a4cc5c39ccabe0a
    ];
    intersectionType: ref_797b0e847bfb0923df623340357449f2f81c99fad12048575903ea79a74ec85a & {
        name: string;
        age: number;
    };
    keyof: keyof ref_7f4ac300691776ef1cf3fe6478fd3957917732c2d2d8b1c22d3fb849af9713f3;
    indexAccessor: ref_5a550b41b402c3bdf7d1258a04f18e46171b2f1db74f34e0821379106ab96d8f["name"];
};
type ref_a511bd49d68dd0f094ff0307e5171f0199ad78fa1fb1138df3b0c35af3dd9c6c = {
    name: string;
    ver: number;
    age: number;
};
type ref_083d195671f7477cf8a15fa218dcb8a000e4ea45c3686b239d93df7bbaa93cc1 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_e164585b4decadd1d509f61fd38db7e1f97681d6b09f3935fc7ac0ae4dd5c71c {
    name: string;
    ver: number;
}
type ref_b125dbcdd742aff480fecf8781c4d5b4e876ac483d30bfc37a0906211625e6ed = {
    name: string;
    ver: number;
    age: number;
};
interface ref_8b1ba96f8aea6c83a69da0c71c3d9508aa8fa223bf0f01f36a4cc5c39ccabe0a {
    name: string;
    ver: number;
}
type ref_797b0e847bfb0923df623340357449f2f81c99fad12048575903ea79a74ec85a = {
    name: string;
    ver: number;
    age: number;
};
type ref_7f4ac300691776ef1cf3fe6478fd3957917732c2d2d8b1c22d3fb849af9713f3 = {
    name: string;
    ver: number;
    age: number;
};
type ref_5a550b41b402c3bdf7d1258a04f18e46171b2f1db74f34e0821379106ab96d8f = {
    name: string;
    ver: number;
    age: number;
};