export function boostestMixInterfaceFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst2" }; // Extracted from typeAlias

type main = ref_4f89ca4e1e6fa54b82c6e3b48fc5cc0e1bb15e99e9e6b9f99ac9d42b407130b5;
interface ref_4f89ca4e1e6fa54b82c6e3b48fc5cc0e1bb15e99e9e6b9f99ac9d42b407130b5 {
    name: "MixInterfaceFirst2";
}