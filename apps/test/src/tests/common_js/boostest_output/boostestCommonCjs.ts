export function boostestCommonCjs<T>(args?: Partial<T>): T {
	return {
		id: 10,
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { id: number; name: string }; // Extracted from typeAlias

type main = ref_c5055f3c3b176ab56f8b20ec5e3bfb31b6580a0175945567c639258c964166bc;
type ref_c5055f3c3b176ab56f8b20ec5e3bfb31b6580a0175945567c639258c964166bc = {
    id: number;
    name: string;
};