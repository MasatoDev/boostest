export function boostestMixInterfaceSecond<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond" }; // Extracted from typeAlias

type main = ref_609178a8519388592f410eb7f7209011d387f901458b071af4c781db2ffccf24;
interface ref_609178a8519388592f410eb7f7209011d387f901458b071af4c781db2ffccf24 {
    name: "MixInterfaceSecond";
}