export function boostestTsLiteralArrayUnionType<T>(isArray = false) {
	return [];
}
type main_output_target = { length: 0 } | { 0: 1; length: 1 } | { 0: 1; 1: 2; length: 2 }; // Extracted from typeAlias

type main = ref_4d0e6f7649c3bc760ffb7f6f8bcbc98a168942e11b1c48ebfa8e5398766923ad;
type ref_4d0e6f7649c3bc760ffb7f6f8bcbc98a168942e11b1c48ebfa8e5398766923ad = [
] | [
    1
] | [
    1,
    2
];