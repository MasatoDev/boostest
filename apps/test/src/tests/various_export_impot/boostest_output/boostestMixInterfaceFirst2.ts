export function boostestMixInterfaceFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst2" }; // Extracted from typeAlias

type main = ref_a9a8c0a836d1628a7a2bc32ba8faffe3d0ffda5d218f93dc53830480c678bee8;
interface ref_a9a8c0a836d1628a7a2bc32ba8faffe3d0ffda5d218f93dc53830480c678bee8 {
    name: "MixInterfaceFirst2";
}