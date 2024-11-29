export function boostestMixInterfaceFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst" }; // Extracted from typeAlias

type main = ref_69140aba9374cf8bc22db5ed681a6f7fbfd5d97a75d5eb0b1b511caf2cc54a92;
interface ref_69140aba9374cf8bc22db5ed681a6f7fbfd5d97a75d5eb0b1b511caf2cc54a92 {
    name: "MixInterfaceFirst";
}