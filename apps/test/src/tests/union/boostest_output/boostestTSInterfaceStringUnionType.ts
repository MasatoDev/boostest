export function boostestTSInterfaceStringUnionType<T>(args?: Partial<T>): T {
	return {
		type: "A",
		...args
	} as T;
}
type main_output_target = { type: "A" | "B" | "C" }; // Extracted from typeAlias

type main = ref_be08e52360110c50f204cc71670b7de2ba580308813bbc9a59ea7f7beda7d3be;
interface ref_be08e52360110c50f204cc71670b7de2ba580308813bbc9a59ea7f7beda7d3be {
    type: "A" | "B" | "C";
}