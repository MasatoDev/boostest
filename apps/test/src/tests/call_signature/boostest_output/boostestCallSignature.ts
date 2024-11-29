export function boostestCallSignature<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { name: string }; // Extracted from typeAlias

type main = ref_5ab0896094b4280994e69dbd4f461ec60d22947b7a20efb3a201677cc047a2ec;
type ref_5ab0896094b4280994e69dbd4f461ec60d22947b7a20efb3a201677cc047a2ec = {
    (name: string, age: number): void;
    (contents: string): string;
    (): void;
    name: string;
};