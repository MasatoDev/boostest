export function boostestMixTSAliasFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst2" }; // Extracted from typeAlias

type main = ref_a005a086f9ddcd65e813b72cd00b785a7b00a720b85b13d8c00d1437b2fe39cb;
type ref_a005a086f9ddcd65e813b72cd00b785a7b00a720b85b13d8c00d1437b2fe39cb = {
    name: "MixTSAliasFirst2";
};