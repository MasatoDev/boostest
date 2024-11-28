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

type main = ref_a0edd2afd0a0f8dec12975d95151e8cbf70a88fa606c703d12d0a6c0778ea694;
type ref_a0edd2afd0a0f8dec12975d95151e8cbf70a88fa606c703d12d0a6c0778ea694 = {
    literalString: ref_fbfb528b0da2311c86cdcc17bb5ea4d6b2d47219a2d863f91c75eccb8bc5ebad;
    literalLiteralString: ref_5b126a40a6f426ee0ba4d42eba4233bc9fea8061e6b98278e4e759f7b2b53aec;
    literalStringUnion: ref_78765743725d50fce86f19a87a3bb682175541862758420c087adab346d69bbb;
    literalNumber: ref_8aabcf0210569ced7d2bb758412990b465e6bfca8533e36ab83e9ab1424f6015;
    literalLiteralNumber: ref_12901724871f69abf3ba22da4058ca12b8a6f865a18c9855f6cd7f639edee724;
    literalNumberUnion: ref_6534347ee67fce298212a96844e90dee3456d238c4f1d0238a3078868db1bd9f;
    literalBoolean: ref_fae3e95151199b0c4fecc69a18c336c7ddd160eb58a17b322b200c9ae32457b7;
    literalLiteralBoolean: ref_43b4e5ad313c83a86a0e67887003d23ca8f5fe4ae72ccdae25cc4f1b9889d50d;
    literalBooleanUnion: ref_00ee877a121b130eefcf0ec68d6ba906f1a29ca83d50122588816c14694e950f;
    literalNull: ref_8272c11525e2a6d1d710db40fc88f286bdb206f25e28c6c1d49d86aa11d49101;
    literalUndefined: ref_0904b776da451ca4c4385f75c73c998450ddc09be6f73a1005cb645df6dfb7da;
    literalArray: ref_b333d1c123527369282cdea5ab49588b652dff03fbe6e0b70e5104c3f2bd1f19;
    literalLiteralArray: ref_19dfb46b39e160471cbdec1ebe9879c0b32893a938f9c6c42768ab52e23cc6c3;
    literalArrayUnion: ref_12d19d3d840e793e9a9760ec448d3db9bf7ee234f39b11465e5c297dfbd69226;
    literalObject: ref_66416e396b157d77dcc798bfb25a76705dce419273e6c094945a180257f804a1;
    literalLiteralObject: ref_d25a00857fab9cdc3a9a9658ed7a20a5a99cf5862b61cb37b699cc5935ccdb45;
    literalObjectUnion: ref_4f6c007513a2d9c216f7ea6674577457f72ffa7d7f65b0f3ac4298642c3c936e;
    literalFunction: ref_8a30fb9a8cb32b87aa08179716df6423448a5d5c55c5a05384ab59d25674f289;
    literalLiteralFunction: ref_65d8172539701d1697234ecd25adf24e9f01c2eb02ed7f74483d255fbdbf1581;
    literalFunctionUnion: ref_21f6a885db271abbb7ba2c7388edf0b68acd6b7707b40c9617663e109fe149b1;
    literalBigInt: ref_4dd6fb1a65b5a46689ef07b6b6139ad05fae398542fadcb87210d35ef0bdff62;
    literalLiteralBigInt: ref_1fc39597d4a5e5056225809106a1fec9435b8f6a3a08fde4ce54962f0f916d61;
    literalBigIntUnion: ref_2296bdf50a723a23590c22a34807b725b7bc144e50fb2aa8ec5edb5ac83a24b2;
    literalSymbol: ref_47465469f41e5f284a1624dc1c950d012a5cdc2c4f0b2b9f41238eb54a28bdaf;
};
type ref_fbfb528b0da2311c86cdcc17bb5ea4d6b2d47219a2d863f91c75eccb8bc5ebad = string;
type ref_5b126a40a6f426ee0ba4d42eba4233bc9fea8061e6b98278e4e759f7b2b53aec = "string";
type ref_78765743725d50fce86f19a87a3bb682175541862758420c087adab346d69bbb = "A" | "B" | "C";
type ref_8aabcf0210569ced7d2bb758412990b465e6bfca8533e36ab83e9ab1424f6015 = number;
type ref_12901724871f69abf3ba22da4058ca12b8a6f865a18c9855f6cd7f639edee724 = 42;
type ref_6534347ee67fce298212a96844e90dee3456d238c4f1d0238a3078868db1bd9f = 1 | 2 | 3;
type ref_fae3e95151199b0c4fecc69a18c336c7ddd160eb58a17b322b200c9ae32457b7 = boolean;
type ref_43b4e5ad313c83a86a0e67887003d23ca8f5fe4ae72ccdae25cc4f1b9889d50d = true;
type ref_00ee877a121b130eefcf0ec68d6ba906f1a29ca83d50122588816c14694e950f = true | false;
type ref_8272c11525e2a6d1d710db40fc88f286bdb206f25e28c6c1d49d86aa11d49101 = null;
type ref_0904b776da451ca4c4385f75c73c998450ddc09be6f73a1005cb645df6dfb7da = undefined;
type ref_b333d1c123527369282cdea5ab49588b652dff03fbe6e0b70e5104c3f2bd1f19 = Array<any>;
type ref_19dfb46b39e160471cbdec1ebe9879c0b32893a938f9c6c42768ab52e23cc6c3 = [
    1,
    2,
    3
];
type ref_12d19d3d840e793e9a9760ec448d3db9bf7ee234f39b11465e5c297dfbd69226 = [
] | [
    1
] | [
    1,
    2
];
type ref_66416e396b157d77dcc798bfb25a76705dce419273e6c094945a180257f804a1 = object;
type ref_d25a00857fab9cdc3a9a9658ed7a20a5a99cf5862b61cb37b699cc5935ccdb45 = {
    name: string;
    age: number;
};
type ref_4f6c007513a2d9c216f7ea6674577457f72ffa7d7f65b0f3ac4298642c3c936e = {
    type: "A";
} | {
    type: "B";
    value: number;
};
type ref_8a30fb9a8cb32b87aa08179716df6423448a5d5c55c5a05384ab59d25674f289 = Function;
type ref_65d8172539701d1697234ecd25adf24e9f01c2eb02ed7f74483d255fbdbf1581 = () => void;
type ref_21f6a885db271abbb7ba2c7388edf0b68acd6b7707b40c9617663e109fe149b1 = ((x: number) => number) | ((x: string) => string);
type ref_4dd6fb1a65b5a46689ef07b6b6139ad05fae398542fadcb87210d35ef0bdff62 = bigint;
type ref_1fc39597d4a5e5056225809106a1fec9435b8f6a3a08fde4ce54962f0f916d61 = 123n;
type ref_2296bdf50a723a23590c22a34807b725b7bc144e50fb2aa8ec5edb5ac83a24b2 = 1n | 2n | 3n;
type ref_47465469f41e5f284a1624dc1c950d012a5cdc2c4f0b2b9f41238eb54a28bdaf = symbol;