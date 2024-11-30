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

type main = ref_ffefa3b2d9ca702e92fd2d97a16c5f97a090830fb36fe12826a2066312021084;
type ref_ffefa3b2d9ca702e92fd2d97a16c5f97a090830fb36fe12826a2066312021084 = {
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
};