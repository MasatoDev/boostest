export function boostestTSAliasMixUnionType<T>(isArray = false) {
	return true;
}
type main_output_target = true | 50000 | "A" | 1 | "B" | "C"; // Extracted from typeAlias

type main = ref_2add301574895637fdf9960fa49ab5f82fb43d823e5f263cb679903d46464bc6;
type ref_2add301574895637fdf9960fa49ab5f82fb43d823e5f263cb679903d46464bc6 = 50000 | "A" | 1 | true | ref_5b32f4694cd1068f470312415ec44789c859cef88c798d6c7775a90e61c49af5;
type ref_5b32f4694cd1068f470312415ec44789c859cef88c798d6c7775a90e61c49af5 = "A" | "B" | "C";