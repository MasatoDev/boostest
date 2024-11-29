export function boostestTSAliasMixUnionObjType<T>(args?: Partial<T>): T {
	return {
		ref_type: true,
		type: true,
		...args
	} as T;
}
type main_output_target = { ref_type: true | 50000 | "A" | 1 | "B" | "C"; type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_e877ade7f3daf70d002c24d2fc5c3d661faf4a4b45e51b43d4cedbc22933bc50;
type ref_e877ade7f3daf70d002c24d2fc5c3d661faf4a4b45e51b43d4cedbc22933bc50 = {
    ref_type: ref_ac8353403bad1b2fa13c9bdf2eca76df87db3e337a28c5ed15f0f0a8e0875f27;
    type: 50000 | "A" | 1 | true | ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d;
};
type ref_ac8353403bad1b2fa13c9bdf2eca76df87db3e337a28c5ed15f0f0a8e0875f27 = 50000 | "A" | 1 | true | ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d;
type ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d = "A" | "B" | "C";