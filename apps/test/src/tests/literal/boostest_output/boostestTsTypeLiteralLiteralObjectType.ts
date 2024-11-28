export function boostestTsTypeLiteralLiteralObjectType<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		age: 10,
		...args
	} as T;
}
type main_output_target = { name: string; age: number }; // Extracted from typeAlias

type main = ref_c6effa8b6c2d18c58383b87e30b824ed04ec615ea2142c18f5e63bf1cabdd265;
type ref_c6effa8b6c2d18c58383b87e30b824ed04ec615ea2142c18f5e63bf1cabdd265 = {
    name: string;
    age: number;
};