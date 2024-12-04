export function boostestTSAliasMixUnionType<T>(isArray = false) {
	return true;
}
type main_output_target = true | 50000 | "A" | 1 | "B" | "C"; // Extracted from typeAlias

type main = ref_ac8353403bad1b2fa13c9bdf2eca76df87db3e337a28c5ed15f0f0a8e0875f27;
type ref_ac8353403bad1b2fa13c9bdf2eca76df87db3e337a28c5ed15f0f0a8e0875f27 = 50000 | "A" | 1 | true | ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d;
type ref_01876cbf74c0c696ea6a2fd787874afba309fe68ff239dfa50333814e478fb4d = "A" | "B" | "C";