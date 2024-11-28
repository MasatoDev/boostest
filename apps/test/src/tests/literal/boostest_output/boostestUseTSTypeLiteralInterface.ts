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

type main = ref_a1c230aa1e42ea7e4a7c7a46ccc5309ad2eb85a5527cc0f666557e748cb6dceb;
interface ref_a1c230aa1e42ea7e4a7c7a46ccc5309ad2eb85a5527cc0f666557e748cb6dceb {
    literalString: ref_4ee37fe70a3a25893a830e89b7ed5539d9fde9d66c09bed960d56d3459c349b7;
    literalLiteralString: ref_ce6245d0ab52cb52c67c40be331833b3309845f3db4ef869804cbc028a13622e;
    literalStringUnion: ref_51c6f1d4f59573346b5ed20fe06c150219475fbf84667597610de24cc643ac87;
    literalNumber: ref_7f6603640f754ccb8e357566e4f682c86219c6e0f216057af0fee8fa15d0ab14;
    literalLiteralNumber: ref_5fb814a9e8e33bedb40232d68b3ace8c87ffb3192cb581753228f73f071637a0;
    literalNumberUnion: ref_b67c80b03b4d42df12d1caccdf803664f36f786639024eb9541849d7aa96e4e0;
    literalBoolean: ref_bc00f56698f0a374114e5c02c2c1b25ab87676b70c682cb58e558c4e5906ccf6;
    literalLiteralBoolean: ref_403ebcdf46a7fd82ecba62d1dde1ff9b3d38e75ef60ee5540f2663946afa918a;
    literalBooleanUnion: ref_e0fa5ab95b8ac11e1bce235c54fb7e21feca5918f194eb0f4008c066185ce6d9;
    literalNull: ref_6ad2022513cb427dfd38b8185b44c462468ba97787cefb82be0234c1ac017e35;
    literalUndefined: ref_4d33c8b67a9626533f35690808e910ac349cc3d47779f6c8430c4b42ff972277;
    literalArray: ref_6a837e8d9bdc8c6d12fad90297511c99bf2ea45bf62c59bd3b377f938efafe29;
    literalLiteralArray: ref_8f44e362395ad4eef42593d4d66137a9ce8879de5a652d4a9a07a22ffa9a77dc;
    literalArrayUnion: ref_f5f417c951ca251cc879039419e6b19136aac7d55129729b03b61694e5171080;
    literalObject: ref_a9cb836bad678e53b278e660e3bb1d6dab82916896b5531f4d04d545a5ed732f;
    literalLiteralObject: ref_238210da4dafa3adb7bdab5ea23dd1c5a3ce9c6d6b2a2ad2780f6671a2d47d3c;
    literalObjectUnion: ref_13e7fd500be8a92e2bd84f51d89b3d1abc6f85f3cab175e671191bd467b10ce2;
    literalFunction: ref_dba6fc818b23414845e291e9afd3170a7ff807724ddc9deed581c2a46aef330e;
    literalLiteralFunction: ref_7d7691b6d2f82c24dd6df32d14d06578a5782d422625005075ed69231ed9867e;
    literalFunctionUnion: ref_b9a644e374a6a7d4b1d739ed83a578461cada76edce47d1d4b24837585b5b7db;
    literalBigInt: ref_8806c7fe27a874ee9ecab2af85320db601b9cc04a3b48126ee2787c4adec3982;
    literalLiteralBigInt: ref_d60c121b606952a71f6dbae2bc7b20d9eeb802eb57e49d2b4b47cce3c26efa87;
    literalBigIntUnion: ref_34099fc8e86bc05712505ad93c5492cb303297f70cdde5d3bedf9df5c2b5448e;
    literalSymbol: ref_87b25421b430c6473fde92e2b193f046b869d00588faa1ffea0be82122201776;
}
type ref_4ee37fe70a3a25893a830e89b7ed5539d9fde9d66c09bed960d56d3459c349b7 = string;
type ref_ce6245d0ab52cb52c67c40be331833b3309845f3db4ef869804cbc028a13622e = "string";
type ref_51c6f1d4f59573346b5ed20fe06c150219475fbf84667597610de24cc643ac87 = "A" | "B" | "C";
type ref_7f6603640f754ccb8e357566e4f682c86219c6e0f216057af0fee8fa15d0ab14 = number;
type ref_5fb814a9e8e33bedb40232d68b3ace8c87ffb3192cb581753228f73f071637a0 = 42;
type ref_b67c80b03b4d42df12d1caccdf803664f36f786639024eb9541849d7aa96e4e0 = 1 | 2 | 3;
type ref_bc00f56698f0a374114e5c02c2c1b25ab87676b70c682cb58e558c4e5906ccf6 = boolean;
type ref_403ebcdf46a7fd82ecba62d1dde1ff9b3d38e75ef60ee5540f2663946afa918a = true;
type ref_e0fa5ab95b8ac11e1bce235c54fb7e21feca5918f194eb0f4008c066185ce6d9 = true | false;
type ref_6ad2022513cb427dfd38b8185b44c462468ba97787cefb82be0234c1ac017e35 = null;
type ref_4d33c8b67a9626533f35690808e910ac349cc3d47779f6c8430c4b42ff972277 = undefined;
type ref_6a837e8d9bdc8c6d12fad90297511c99bf2ea45bf62c59bd3b377f938efafe29 = Array<any>;
type ref_8f44e362395ad4eef42593d4d66137a9ce8879de5a652d4a9a07a22ffa9a77dc = [
    1,
    2,
    3
];
type ref_f5f417c951ca251cc879039419e6b19136aac7d55129729b03b61694e5171080 = [
] | [
    1
] | [
    1,
    2
];
type ref_a9cb836bad678e53b278e660e3bb1d6dab82916896b5531f4d04d545a5ed732f = object;
type ref_238210da4dafa3adb7bdab5ea23dd1c5a3ce9c6d6b2a2ad2780f6671a2d47d3c = {
    name: string;
    age: number;
};
type ref_13e7fd500be8a92e2bd84f51d89b3d1abc6f85f3cab175e671191bd467b10ce2 = {
    type: "A";
} | {
    type: "B";
    value: number;
};
type ref_dba6fc818b23414845e291e9afd3170a7ff807724ddc9deed581c2a46aef330e = Function;
type ref_7d7691b6d2f82c24dd6df32d14d06578a5782d422625005075ed69231ed9867e = () => void;
type ref_b9a644e374a6a7d4b1d739ed83a578461cada76edce47d1d4b24837585b5b7db = ((x: number) => number) | ((x: string) => string);
type ref_8806c7fe27a874ee9ecab2af85320db601b9cc04a3b48126ee2787c4adec3982 = bigint;
type ref_d60c121b606952a71f6dbae2bc7b20d9eeb802eb57e49d2b4b47cce3c26efa87 = 123n;
type ref_34099fc8e86bc05712505ad93c5492cb303297f70cdde5d3bedf9df5c2b5448e = 1n | 2n | 3n;
type ref_87b25421b430c6473fde92e2b193f046b869d00588faa1ffea0be82122201776 = symbol;