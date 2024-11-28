export function boostestTsTypeLiteralLiteralArrayType<T>(args?: Partial<T>): T {
	return [
		1,
		2,
		3
	] as T;
}
type main_output_target = { 0: 1; 1: 2; 2: 3; length: 3 }; // Extracted from typeAlias

type main = ref_31fd0a1d51bf3e25de5100e17d8c04a0bd9cc9fca846c691188d7355bc230ee9;
type ref_31fd0a1d51bf3e25de5100e17d8c04a0bd9cc9fca846c691188d7355bc230ee9 = [
    1,
    2,
    3
];