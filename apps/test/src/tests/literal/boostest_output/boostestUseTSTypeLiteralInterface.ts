export function boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
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

type main = ref_6e155e4f22b634d828ccafc8970185b75a8729bac999baf2e7efb7244e54292d;
interface ref_6e155e4f22b634d828ccafc8970185b75a8729bac999baf2e7efb7244e54292d {
    literalString: ref_ca8a4019714811ae16a0213355f3364128e99a61bc5e83ea598891fc9c12ce67;
    literalLiteralString: ref_d04880663048043c6fd721afdad9e3304322d3f2f583db3002e76d70f60b43a7;
    literalStringUnion: ref_60a3546a4e49f32902c1e4b237ad91a4d5dac960625e3269e9aeb173465a6b75;
    literalNumber: ref_379a9790ed3615c61c05e95f2ace3a1f73df1446649931b173db5460f3db279e;
    literalLiteralNumber: ref_6e21d2b7f8683bc32a75e6bdbb9ebc56390bbfb21e54d28c097de178725fe76d;
    literalNumberUnion: ref_cd651f492268990791ca0ae6cd22f5019cb2372ac2497c034fd2827298b449ab;
    literalBoolean: ref_9f0fb9729ac5b3bd5cb5bca4548e7bda40b45899e1c2b24d8acc216aa4d011e5;
    literalLiteralBoolean: ref_898781ba94550ce6792094cafa6d595e1e822a217036937130132d76abdcbca2;
    literalBooleanUnion: ref_a418c2c8c7635ffbac65bf15219142210db3694f9aaa1266dfae93c847057330;
    literalNull: ref_b404d1542c1a35e98843e74031534ccf4926710cc0d3cbe945027db9758efa9d;
    literalUndefined: ref_ba5920ede2b188e109a653f764f2526007174a70c992658950645b899f1a27d3;
    literalArray: ref_265605a43bf8e3a112e1016f7a40c74ba5a58548361ca40cdee0563c14c17a75;
    literalLiteralArray: ref_6157e094a7a72803dd965629be8eb5712de5e2713bd75a1a95173296d91452bd;
    literalArrayUnion: ref_d50c0c23034a8489a7f56136cd68483ced4a4c01eb82b19b173c029d1902fe69;
    literalObject: ref_abebdd7c4b2658468cf19b7ebdcd33d58dbc2da8355edf3723959bd4f52d2ba9;
    literalLiteralObject: ref_357147cfaef33e5de194a2cabe4884f68890112bd80556ab88323cc8a67c92f9;
    literalObjectUnion: ref_d377e3cf89b0757743b25992a4c3ce4a1603c1d3011849847cb60fd5af4afbd7;
    literalFunction: ref_5540a1153ff1f01fcc214a3196c78bea302149cd30b863f356aff1ad5b513a44;
    literalLiteralFunction: ref_18e2ac101aad52053b2abb42e747a9bb56ef65ad98fbf5c27137ad1d624ffd03;
    literalFunctionUnion: ref_fa88a382482fe9721989f80c9c6c65e969515d19c45406f836a423bf2107c9aa;
    literalBigInt: ref_202d64d3b7239005dadf2980d0fbb244051569679edf8f5cf30842b7e8683669;
    literalLiteralBigInt: ref_7b62ab2cd17830fdb8168553a5488bb938b5575ff5ab4ae2ee3fd8b68464f72f;
    literalBigIntUnion: ref_8f40db2b8dcdab07e6f49e5d31f20c8b5a5ce6150dec01c4cbc095edd345bb83;
    literalSymbol: ref_7b81d72d3af07366c5879aad93026f02fada8aa734ce8ce3c4233af3d4777611;
}
type ref_ca8a4019714811ae16a0213355f3364128e99a61bc5e83ea598891fc9c12ce67 = string;
type ref_d04880663048043c6fd721afdad9e3304322d3f2f583db3002e76d70f60b43a7 = "string";
type ref_60a3546a4e49f32902c1e4b237ad91a4d5dac960625e3269e9aeb173465a6b75 = "A" | "B" | "C";
type ref_379a9790ed3615c61c05e95f2ace3a1f73df1446649931b173db5460f3db279e = number;
type ref_6e21d2b7f8683bc32a75e6bdbb9ebc56390bbfb21e54d28c097de178725fe76d = 42;
type ref_cd651f492268990791ca0ae6cd22f5019cb2372ac2497c034fd2827298b449ab = 1 | 2 | 3;
type ref_9f0fb9729ac5b3bd5cb5bca4548e7bda40b45899e1c2b24d8acc216aa4d011e5 = boolean;
type ref_898781ba94550ce6792094cafa6d595e1e822a217036937130132d76abdcbca2 = true;
type ref_a418c2c8c7635ffbac65bf15219142210db3694f9aaa1266dfae93c847057330 = true | false;
type ref_b404d1542c1a35e98843e74031534ccf4926710cc0d3cbe945027db9758efa9d = null;
type ref_ba5920ede2b188e109a653f764f2526007174a70c992658950645b899f1a27d3 = undefined;
type ref_265605a43bf8e3a112e1016f7a40c74ba5a58548361ca40cdee0563c14c17a75 = Array<any>;
type ref_6157e094a7a72803dd965629be8eb5712de5e2713bd75a1a95173296d91452bd = [
    1,
    2,
    3
];
type ref_d50c0c23034a8489a7f56136cd68483ced4a4c01eb82b19b173c029d1902fe69 = [
] | [
    1
] | [
    1,
    2
];
type ref_abebdd7c4b2658468cf19b7ebdcd33d58dbc2da8355edf3723959bd4f52d2ba9 = object;
type ref_357147cfaef33e5de194a2cabe4884f68890112bd80556ab88323cc8a67c92f9 = {
    name: string;
    age: number;
};
type ref_d377e3cf89b0757743b25992a4c3ce4a1603c1d3011849847cb60fd5af4afbd7 = {
    type: "A";
} | {
    type: "B";
    value: number;
};
type ref_5540a1153ff1f01fcc214a3196c78bea302149cd30b863f356aff1ad5b513a44 = Function;
type ref_18e2ac101aad52053b2abb42e747a9bb56ef65ad98fbf5c27137ad1d624ffd03 = () => void;
type ref_fa88a382482fe9721989f80c9c6c65e969515d19c45406f836a423bf2107c9aa = ((x: number) => number) | ((x: string) => string);
type ref_202d64d3b7239005dadf2980d0fbb244051569679edf8f5cf30842b7e8683669 = bigint;
type ref_7b62ab2cd17830fdb8168553a5488bb938b5575ff5ab4ae2ee3fd8b68464f72f = 123n;
type ref_8f40db2b8dcdab07e6f49e5d31f20c8b5a5ce6150dec01c4cbc095edd345bb83 = 1n | 2n | 3n;
type ref_7b81d72d3af07366c5879aad93026f02fada8aa734ce8ce3c4233af3d4777611 = symbol;