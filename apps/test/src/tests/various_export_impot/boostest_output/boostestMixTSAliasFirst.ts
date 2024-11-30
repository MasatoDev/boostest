export function boostestMixTSAliasFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst" }; // Extracted from typeAlias

type main = ref_ea7a2787472bfa54b45e1798f2f078894e09a6ed363952a331618edc6b6a59cb;
type ref_ea7a2787472bfa54b45e1798f2f078894e09a6ed363952a331618edc6b6a59cb = {
    name: "MixTSAliasFirst";
};