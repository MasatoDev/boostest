export function boostestMixTSAliasFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst" }; // Extracted from typeAlias

type main = ref_494c5712c26218bca12115fdf0cc654075e36f499f68adc1c19d6d1bc45ff08c;
type ref_494c5712c26218bca12115fdf0cc654075e36f499f68adc1c19d6d1bc45ff08c = {
    name: "MixTSAliasFirst";
};