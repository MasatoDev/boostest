export function boostestTsTypeLiteralLiteralObjectType<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		age: 10,
		...args
	} as T;
}
type main_output_target = { name: string; age: number }; // Extracted from typeAlias

type main = ref_50f05f17026155656ef05d0f0ccd68ffc2ce72acf09faa294bc2300c0bbef86e;
type ref_50f05f17026155656ef05d0f0ccd68ffc2ce72acf09faa294bc2300c0bbef86e = {
    name: string;
    age: number;
};