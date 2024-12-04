export function boostestMixTSAliasFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst2" }; // Extracted from typeAlias

type main = ref_09dc21196cb712287a67a3363db485beac917c247f9408fab1194ef373267caa;
type ref_09dc21196cb712287a67a3363db485beac917c247f9408fab1194ef373267caa = {
    name: "MixTSAliasFirst2";
};