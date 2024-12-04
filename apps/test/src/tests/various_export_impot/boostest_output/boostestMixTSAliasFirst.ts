export function boostestMixTSAliasFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst" }; // Extracted from typeAlias

type main = ref_fdf94556513e04db276cc74d65c33f5ddcf9d6752c8e26454c40c871ad7d2489;
type ref_fdf94556513e04db276cc74d65c33f5ddcf9d6752c8e26454c40c871ad7d2489 = {
    name: "MixTSAliasFirst";
};