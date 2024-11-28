export function boostestTSInterfaceStringUnionType<T>(args?: Partial<T>): T {
	return {
		type: "A",
		...args
	} as T;
}
type main_output_target = { type: "A" | "B" | "C" }; // Extracted from typeAlias

type main = ref_0384b94e20c7428b84d0bce41e6c65d12a0d46621561a5d264102e96fdb44495;
interface ref_0384b94e20c7428b84d0bce41e6c65d12a0d46621561a5d264102e96fdb44495 {
    type: "A" | "B" | "C";
}