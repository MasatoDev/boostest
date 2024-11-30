export function boostestMixInterfaceSecond<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond" }; // Extracted from typeAlias

type main = ref_589a39e822217bb26011924fe6b1bac83f9e84a7b1e9389903037fd46d86e1b5;
interface ref_589a39e822217bb26011924fe6b1bac83f9e84a7b1e9389903037fd46d86e1b5 {
    name: "MixInterfaceSecond";
}