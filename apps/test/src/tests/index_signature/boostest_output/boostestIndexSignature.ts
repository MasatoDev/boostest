export function boostestIndexSignature<T>(args?: Partial<T>): T {
	return {
		key: 10,
		0: 10,
		...args
	} as T;
}
type main_output_target = { [key: string]: number; [key: number]: number; [key: symbol]: false | true }; // Extracted from typeAlias

type main = ref_413ac584fc84704fcb0a38f8ce0c20c4373b03e00c35fda21be61f3076133026;
type ref_413ac584fc84704fcb0a38f8ce0c20c4373b03e00c35fda21be61f3076133026 = {
    [Str_Key: string]: number;
    [Num_Key: number]: number;
    [Symbol_Key: symbol]: boolean;
};