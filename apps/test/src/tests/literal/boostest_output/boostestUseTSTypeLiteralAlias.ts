export function boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return {
		literalString: "test string data",
		literalLiteralString: "string",
		literalStringUnion: "A",
		literalNumber: 10,
		literalLiteralNumber: 42,
		literalNumberUnion: 1,
		literalBoolean: false,
		literalLiteralBoolean: true,
		literalBooleanUnion: false,
		literalNull: null,
		literalUndefined: undefined,
		literalArray: [],
		literalLiteralArray: [
			1,
			2,
			3
		],
		literalArrayUnion: [],
		literalObject: {},
		literalLiteralObject: {
			name: "test string data",
			age: 10
		},
		literalObjectUnion: { type: "A" },
		literalFunction: () => {},
		literalLiteralFunction: {},
		literalFunctionUnion: {},
		literalBigInt: 9007199254740991n,
		literalLiteralBigInt: 123n,
		literalBigIntUnion: 1n,
		literalSymbol: Symbol(),
		...args
	} as T;
}
type main_output_target = { literalString: string; literalLiteralString: "string"; literalStringUnion: "A" | "B" | "C"; literalNumber: number; literalLiteralNumber: 42; literalNumberUnion: 1 | 2 | 3; literalBoolean: false | true; literalLiteralBoolean: true; literalBooleanUnion: false | true; literalNull: null; literalUndefined: undefined; literalArray: Array<any>; literalLiteralArray: { 0: 1; 1: 2; 2: 3; length: 3 }; literalArrayUnion: { length: 0 } | { 0: 1; length: 1 } | { 0: 1; 1: 2; length: 2 }; literalObject: object; literalLiteralObject: { name: string; age: number }; literalObjectUnion: { type: "A" } | { type: "B"; value: number }; literalFunction: Function; literalLiteralFunction: {  }; literalFunctionUnion: {  } | {  }; literalBigInt: bigint; literalLiteralBigInt: 123n; literalBigIntUnion: 1n | 2n | 3n; literalSymbol: symbol }; // Extracted from typeAlias

type main = ref_c7bf8beeff60c7812c5850adddd7374847a335b93c54fdc78ca84b39a3eb6bf4;
type ref_c7bf8beeff60c7812c5850adddd7374847a335b93c54fdc78ca84b39a3eb6bf4 = {
    literalString: ref_6fb5f2100b64ce17cdf1d84260d466c534a39e37984495c04b59be8e74c57256;
    literalLiteralString: ref_f071461c3c55993838d9718762d4dd3fd6106261c98bf3ba489b92cf90e79f34;
    literalStringUnion: ref_0ef606aaa3f89914b8cabb16aa260469601d0a8358cc1b94d63bd5b18b6ba036;
    literalNumber: ref_a437eba666f374f70231e53c271e99535b268c4b3f29f2922718ffb62eb35e47;
    literalLiteralNumber: ref_d77ca32559c3260ed9c3c330678aa8d19310933d3a21c73cbc2ab769efca4dca;
    literalNumberUnion: ref_6aea6cdfc87c441109fddab731230c70a1e15edcbf4936df0f8e454ab8ea25a3;
    literalBoolean: ref_4888e81c723f2b24050d21f94137c26501544ab8d465019e0e39fbec956aab90;
    literalLiteralBoolean: ref_d36b59bbd0e96a0c7eeb239b5516baade21f34fc87d99cfb66054fe5738e441b;
    literalBooleanUnion: ref_a3dff1e5af0f892152e5f560ec0ed0b7a61a343d6ea85aaf0866315ba92fbd2b;
    literalNull: ref_a2499b22379730c1ba780ed323f564c80f034621585ed726e13d963a3e6741b0;
    literalUndefined: ref_6eb62c8c91a87cd4278b4fa29039af42f65d9e62df32ce4d01ea1b46d915ee9d;
    literalArray: ref_7af81ff147ddcdcc08598c93d120ba0660927175bbc784da6a3ca5cbb7909124;
    literalLiteralArray: ref_714189e7b072b53678236a743d601288c95d679f8a9cb0771f174d0feca087c9;
    literalArrayUnion: ref_33a53ec197ef83e31f4bb19900c6e4131723e3b7b71b1bfe004fda901da5cd06;
    literalObject: ref_9904b167ea0b849c33455ffd2e43efc791a835e8a5117b77ec6d711e7acd49f2;
    literalLiteralObject: ref_50f05f17026155656ef05d0f0ccd68ffc2ce72acf09faa294bc2300c0bbef86e;
    literalObjectUnion: ref_0d05cda2f2981e51550bcef985eae35075297cd32b4cf04a5ecad6dd7d6ecd7a;
    literalFunction: ref_ea51cb52caf140b9d236ec487a625701ff132b96e730da26ea63dae82ce6a7bb;
    literalLiteralFunction: ref_7e65fe2eca881cf245e043c092b57c6663c43b55d3bbdace0d10b44d6aa339e3;
    literalFunctionUnion: ref_e213a2eb547ea2eab6fccc60839862d5a966559cd01cbf9c54bfe2fcf04e7c02;
    literalBigInt: ref_c2d0bf8d71179a79cc9d1cec2381158c35c2ec4bf8d7cb82d1f563c073c2088d;
    literalLiteralBigInt: ref_1dc1a3a8cf2851580ced472f573d35a199f257850068b4482aa4930a7dc54c5e;
    literalBigIntUnion: ref_b23d1ac164cb573f42175c52d26e836a599b342b30a95004196f21f33106fd6d;
    literalSymbol: ref_6df02f2f81a581a5ace97793a37cd5bd1b9f08c13999aa096037227ea740c9f3;
};
type ref_6fb5f2100b64ce17cdf1d84260d466c534a39e37984495c04b59be8e74c57256 = string;
type ref_f071461c3c55993838d9718762d4dd3fd6106261c98bf3ba489b92cf90e79f34 = "string";
type ref_0ef606aaa3f89914b8cabb16aa260469601d0a8358cc1b94d63bd5b18b6ba036 = "A" | "B" | "C";
type ref_a437eba666f374f70231e53c271e99535b268c4b3f29f2922718ffb62eb35e47 = number;
type ref_d77ca32559c3260ed9c3c330678aa8d19310933d3a21c73cbc2ab769efca4dca = 42;
type ref_6aea6cdfc87c441109fddab731230c70a1e15edcbf4936df0f8e454ab8ea25a3 = 1 | 2 | 3;
type ref_4888e81c723f2b24050d21f94137c26501544ab8d465019e0e39fbec956aab90 = boolean;
type ref_d36b59bbd0e96a0c7eeb239b5516baade21f34fc87d99cfb66054fe5738e441b = true;
type ref_a3dff1e5af0f892152e5f560ec0ed0b7a61a343d6ea85aaf0866315ba92fbd2b = true | false;
type ref_a2499b22379730c1ba780ed323f564c80f034621585ed726e13d963a3e6741b0 = null;
type ref_6eb62c8c91a87cd4278b4fa29039af42f65d9e62df32ce4d01ea1b46d915ee9d = undefined;
type ref_7af81ff147ddcdcc08598c93d120ba0660927175bbc784da6a3ca5cbb7909124 = Array<any>;
type ref_714189e7b072b53678236a743d601288c95d679f8a9cb0771f174d0feca087c9 = [
    1,
    2,
    3
];
type ref_33a53ec197ef83e31f4bb19900c6e4131723e3b7b71b1bfe004fda901da5cd06 = [
] | [
    1
] | [
    1,
    2
];
type ref_9904b167ea0b849c33455ffd2e43efc791a835e8a5117b77ec6d711e7acd49f2 = object;
type ref_50f05f17026155656ef05d0f0ccd68ffc2ce72acf09faa294bc2300c0bbef86e = {
    name: string;
    age: number;
};
type ref_0d05cda2f2981e51550bcef985eae35075297cd32b4cf04a5ecad6dd7d6ecd7a = {
    type: "A";
} | {
    type: "B";
    value: number;
};
type ref_ea51cb52caf140b9d236ec487a625701ff132b96e730da26ea63dae82ce6a7bb = Function;
type ref_7e65fe2eca881cf245e043c092b57c6663c43b55d3bbdace0d10b44d6aa339e3 = () => void;
type ref_e213a2eb547ea2eab6fccc60839862d5a966559cd01cbf9c54bfe2fcf04e7c02 = ((x: number) => number) | ((x: string) => string);
type ref_c2d0bf8d71179a79cc9d1cec2381158c35c2ec4bf8d7cb82d1f563c073c2088d = bigint;
type ref_1dc1a3a8cf2851580ced472f573d35a199f257850068b4482aa4930a7dc54c5e = 123n;
type ref_b23d1ac164cb573f42175c52d26e836a599b342b30a95004196f21f33106fd6d = 1n | 2n | 3n;
type ref_6df02f2f81a581a5ace97793a37cd5bd1b9f08c13999aa096037227ea740c9f3 = symbol;