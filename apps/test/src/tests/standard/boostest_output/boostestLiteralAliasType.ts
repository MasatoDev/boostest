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
		functionLiteral: () => {},
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
type main_output_target = { stringLiteral: string; numberLiteral: number; bigintLiteral: bigint; booleanLiteral: false | true; nullLiteral: null; undefinedId: undefined; anyLiteral: any; unknownLiteral: unknown; objectLiteral: object; voidLiteral: void; functionLiteral: () => void; arrayLiteral: Array<string>; referenceLiteral: { name: string; ver: number; age: number }; unionType: string | number; conditionalType: false; tsLiteralString: "string"; tsLiteralNumber: 20; tsBigInt: 10000000000000n; tsLiteralBoolean: true; tsNullLiteral: null; tsObject: {  }; tsArray: { length: 0 }; symbolLiteral: symbol; tsTuple: { 0: string; 1: number; 2: any; 3: { name: string; ver: number; age: number }; 4: { name: string; ver: number }; length: 5 }; tsNamedTuple: { 0: string; 1: number; 2: { name: string; ver: number; age: number }; 3: { name: string; ver: number }; length: 4 }; intersectionType: { name: string; ver: number; age: number } & { name: string; age: number }; keyof: "name" | "ver" | "age"; indexAccessor: string }; // Extracted from typeAlias

type main = ref_c400a8de0057d1ecd7c97b3eb66cd05a3840d20324f75931fe963b69cebbc54b;
type ref_c400a8de0057d1ecd7c97b3eb66cd05a3840d20324f75931fe963b69cebbc54b = {
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
    referenceLiteral: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8;
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
        ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8,
        ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3
    ];
    tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8,
        refInterface: ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3
    ];
    intersectionType: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 & {
        name: string;
        age: number;
    };
    keyof: keyof ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8;
    indexAccessor: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8["name"];
};
type ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3 {
    name: string;
    ver: number;
}