export function boostestMixInterfaceSecond2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond2" }; // Extracted from typeAlias

type main = ref_bf7d9068bafc8587796d14c82e12bf9d014b629da9ba64bc1328738cd178b052;
interface ref_bf7d9068bafc8587796d14c82e12bf9d014b629da9ba64bc1328738cd178b052 {
    name: "MixInterfaceSecond2";
}