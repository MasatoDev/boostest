export function boostestTSInterfaceMixUnionType<T>(args?: Partial<T>): T {
	return {
		type: true,
		...args
	} as T;
}
type main_output_target = { type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_1233e3089c435ca6b2eaa330d2b60b0a1294d9360b11c55e7390f4a010682ce2;
interface ref_1233e3089c435ca6b2eaa330d2b60b0a1294d9360b11c55e7390f4a010682ce2 {
    type: 50000 | "A" | 1 | true | ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d;
}
type ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d = "A" | "B" | "C";