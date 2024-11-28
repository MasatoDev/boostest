export function boostestMixInterfaceSecond2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond2" }; // Extracted from typeAlias

type main = ref_b7c0fdc78f39db0205bf05a497f8e572f0babfefa48ee8ca9159541f63656ac2;
interface ref_b7c0fdc78f39db0205bf05a497f8e572f0babfefa48ee8ca9159541f63656ac2 {
    name: "MixInterfaceSecond2";
}