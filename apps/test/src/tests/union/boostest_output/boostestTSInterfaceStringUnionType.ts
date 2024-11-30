export function boostestTSInterfaceStringUnionType<T>(args?: Partial<T>): T {
	return {
		type: "A",
		...args
	} as T;
}
type main_output_target = { type: "A" | "B" | "C" }; // Extracted from typeAlias

type main = ref_178ca1a3d529b2250e49132e6e7af8817d3fb292103255353aee2b1918114e07;
interface ref_178ca1a3d529b2250e49132e6e7af8817d3fb292103255353aee2b1918114e07 {
    type: "A" | "B" | "C";
}