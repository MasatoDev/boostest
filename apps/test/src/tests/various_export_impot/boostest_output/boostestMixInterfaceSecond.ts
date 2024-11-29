export function boostestMixInterfaceSecond<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond" }; // Extracted from typeAlias

type main = ref_7bcf9bdd572dc8af7d5b6702091ce483e147216b214119eb35cd50b0de06d670;
interface ref_7bcf9bdd572dc8af7d5b6702091ce483e147216b214119eb35cd50b0de06d670 {
    name: "MixInterfaceSecond";
}