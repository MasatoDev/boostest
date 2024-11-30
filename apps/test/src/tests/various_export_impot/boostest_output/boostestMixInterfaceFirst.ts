export function boostestMixInterfaceFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst" }; // Extracted from typeAlias

type main = ref_2ec6b0370500a6c968e961137126c61fdeff17ad33cc49f53a04bc75b2fec4f6;
interface ref_2ec6b0370500a6c968e961137126c61fdeff17ad33cc49f53a04bc75b2fec4f6 {
    name: "MixInterfaceFirst";
}