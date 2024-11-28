export function boostestMixTSAliasFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixTSAliasFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixTSAliasFirst2" }; // Extracted from typeAlias

type main = ref_5db80317cd7e746d97b203139469fc8306541257f4e5874c844638eb8007a254;
type ref_5db80317cd7e746d97b203139469fc8306541257f4e5874c844638eb8007a254 = {
    name: "MixTSAliasFirst2";
};