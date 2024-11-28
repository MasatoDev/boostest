export function boostestTSInterfaceMixUnionType<T>(args?: Partial<T>): T {
	return {
		type: true,
		...args
	} as T;
}
type main_output_target = { type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_14f7475017e9a6b35d38668b7e388e0a4365a73e14018d0c04764c6daabbed37;
interface ref_14f7475017e9a6b35d38668b7e388e0a4365a73e14018d0c04764c6daabbed37 {
    type: 50000 | "A" | 1 | true | ref_55dae00cfee6621556e9d006f54ddb48ec8ca5291f7fb8b36d40fff1032a42fa;
}
type ref_55dae00cfee6621556e9d006f54ddb48ec8ca5291f7fb8b36d40fff1032a42fa = "A" | "B" | "C";