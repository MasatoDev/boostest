export function boostestMathOperations<T>(args?: Partial<T>): T {
	return {
		add: (a: number, b: number) => {
			return 10;
		},
		multiply: (a: number, b: number) => {
			return 10;
		},
		...args
	} as T;
}
type main_output_target = { add: (a: number, b: number) => number; multiply: (a: number, b: number) => number }; // Extracted from typeAlias

type main = ref_9bb6133202448b2f442df7dddf5cce9e0cf39318f4bc3c4baea5007d69efe059;
type ref_9bb6133202448b2f442df7dddf5cce9e0cf39318f4bc3c4baea5007d69efe059 = {
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
};