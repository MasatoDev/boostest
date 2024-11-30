export function boostestCallSignature<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { name: string }; // Extracted from typeAlias

type main = ref_e90ef42417246fac843a43cbd5c65db10517a1d30d0908d3feeedb01f863b0b6;
type ref_e90ef42417246fac843a43cbd5c65db10517a1d30d0908d3feeedb01f863b0b6 = {
    (name: string, age: number): void;
    (contents: string): string;
    (): void;
    name: string;
};