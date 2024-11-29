export function boostestTsTypeLiteralLiteralArrayType<T>(args?: Partial<T>): T {
	return [
		1,
		2,
		3
	] as T;
}
type main_output_target = { 0: 1; 1: 2; 2: 3; length: 3 }; // Extracted from typeAlias

type main = ref_714189e7b072b53678236a743d601288c95d679f8a9cb0771f174d0feca087c9;
type ref_714189e7b072b53678236a743d601288c95d679f8a9cb0771f174d0feca087c9 = [
    1,
    2,
    3
];