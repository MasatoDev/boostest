export function boostestCallSignature<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { name: string }; // Extracted from typeAlias

type main = ref_8a3a744aef6bf02d7ebf6e1ac7def910c9a00bbab7746af8f2b4cc4a1259079f;
type ref_8a3a744aef6bf02d7ebf6e1ac7def910c9a00bbab7746af8f2b4cc4a1259079f = {
    (name: string, age: number): void;
    (contents: string): string;
    (): void;
    name: string;
};