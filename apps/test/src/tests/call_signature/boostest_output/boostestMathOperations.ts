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

type main = ref_1bced3932255eaccd471d8dc9562545b7833ea291043e4e4cd44eb169f9055cd;
type ref_1bced3932255eaccd471d8dc9562545b7833ea291043e4e4cd44eb169f9055cd = {
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
};