export function boostestLiteralInterfaceType<T>(args?: Partial<T>): T {
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
				ver: 10
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
type main_output_target = { stringLiteral: string; numberLiteral: number; bigintLiteral: bigint; booleanLiteral: false | true; nullLiteral: null; undefinedId: undefined; anyLiteral: any; unknownLiteral: unknown; objectLiteral: object; voidLiteral: void; functionLiteral: {  }; arrayLiteral: Array<string>; referenceLiteral: { name: string; ver: number; age: number }; unionType: string | number; conditionalType: false; tsLiteralString: "string"; tsLiteralNumber: 20; tsBigInt: 10000000000000n; tsLiteralBoolean: true; tsNullLiteral: null; tsObject: {  }; tsArray: { length: 0 }; symbolLiteral: symbol; tsTuple: { 0: string; 1: number; 2: any; 3: { name: string; ver: number; age: number }; 4: { name: string; ver: number }; length: 5 }; tsNamedTuple: { 0: string; 1: number; 2: { name: string; ver: number; age: number }; 3: { name: string; ver: number }; length: 4 }; intersectionType: { name: string; ver: number; age: number } & { name: string; ver: number } & { name: string; age: number }; keyof: "name" | "ver" | "age"; indexAccessor: string }; // Extracted from typeAlias

type main = ref_5ad954362b4841ec97b42c5fe991a86d0dbcdb7aef92bacdeab69566fc7bed0e;
type ref_5ad954362b4841ec97b42c5fe991a86d0dbcdb7aef92bacdeab69566fc7bed0e = {
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
    referenceLiteral: ref_3aa61e799fe3047d886f0a36ee66cdbd0364b9b0a756fc1b9656ec5152a61072;
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
        ref_c529bf3e7fee06989c8d331a7e524df3a8c28af04f93cfd65ac3366b219c5555,
        ref_63a45501bee2a8e7717ff516dcee41bcd7ab306d655d8c47aa6ccb8c444d304a
    ];
    tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_e039415ded2d414cca94aceed578154ea8f98ed160cf6dda4fed688d424d6c0f,
        refInterface: ref_4a62a81f8326aa8bdfc3d78da1c301801b377a7ebe11b67f5f42f92c6b55d1ad
    ];
    intersectionType: ref_41aff9169793a78e1f7023933e6594002fa3bae784c821aa10c56613b02ff3a1 & ref_dfef9c1c381c2da977c4a27fc10424f36c2b675110fcba232f53acc7c99533bf & {
        name: string;
        age: number;
    };
    keyof: keyof ref_4561bbf14b09a3a1bbf2c5ac0107538901587c2d54bdcbaf2c234050c5932405;
    indexAccessor: ref_f6b9e19ccc647392c1398b80c5c3191d56a05993f2e8f254df8bd6de2541fa24["name"];
};
type ref_3aa61e799fe3047d886f0a36ee66cdbd0364b9b0a756fc1b9656ec5152a61072 = {
    name: string;
    ver: number;
    age: number;
};
type ref_c529bf3e7fee06989c8d331a7e524df3a8c28af04f93cfd65ac3366b219c5555 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_63a45501bee2a8e7717ff516dcee41bcd7ab306d655d8c47aa6ccb8c444d304a {
    name: string;
    ver: number;
}
type ref_e039415ded2d414cca94aceed578154ea8f98ed160cf6dda4fed688d424d6c0f = {
    name: string;
    ver: number;
    age: number;
};
interface ref_4a62a81f8326aa8bdfc3d78da1c301801b377a7ebe11b67f5f42f92c6b55d1ad {
    name: string;
    ver: number;
}
type ref_41aff9169793a78e1f7023933e6594002fa3bae784c821aa10c56613b02ff3a1 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_dfef9c1c381c2da977c4a27fc10424f36c2b675110fcba232f53acc7c99533bf {
    name: string;
    ver: number;
}
type ref_4561bbf14b09a3a1bbf2c5ac0107538901587c2d54bdcbaf2c234050c5932405 = {
    name: string;
    ver: number;
    age: number;
};
type ref_f6b9e19ccc647392c1398b80c5c3191d56a05993f2e8f254df8bd6de2541fa24 = {
    name: string;
    ver: number;
    age: number;
};