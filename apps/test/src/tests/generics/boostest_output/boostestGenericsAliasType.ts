export function boostestGenericsAliasType<T>(args?: Partial<T>): T {
	return {
		test: [
			"test string data",
			10,
			false,
			"test string data"
		],
		test2: [
			1,
			2,
			3,
			4,
			5,
			6
		],
		...args
	} as T;
}
type main_output_target = { test: { 0: string; 1: number; 2: false | true; 3: string; length: 4 }; test2: { 0: 1; 1: 2; 2: 3; 3: 4; 4: 5; 5: 6; length: 6 } }; // Extracted from typeAlias

type main = ref_4d3e12e5e81ad3f012aca19b7998b9c0f1d1958311ce19e72cd19fcddb5c7b93;
type ref_4d3e12e5e81ad3f012aca19b7998b9c0f1d1958311ce19e72cd19fcddb5c7b93 = {
    test: ref_f6e105c1f0c50c759be10703d9e4f4c00af0bed195bdff135b518808a03c1584;
    test2: ref_3e4a2b86d886257ece72893972fc949b34ec0882910788e1b6f7cd4b94c0ff73;
};
type ref_f6e105c1f0c50c759be10703d9e4f4c00af0bed195bdff135b518808a03c1584 = [
    string,
    number,
    boolean,
    string
];
type ref_3e4a2b86d886257ece72893972fc949b34ec0882910788e1b6f7cd4b94c0ff73 = [
    1,
    2,
    3,
    4,
    5,
    6
];