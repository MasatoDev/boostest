export function boostestMixInterfaceSecond2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceSecond2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceSecond2" }; // Extracted from typeAlias

type main = ref_1a2259571d1e3e2d92e205bfe9af816d20a9af50d9cf8cfdece5c6d21ca92169;
interface ref_1a2259571d1e3e2d92e205bfe9af816d20a9af50d9cf8cfdece5c6d21ca92169 {
    name: "MixInterfaceSecond2";
}