export function boostestTsLiteralObjectUnionType<T>(isArray = false) {
	return { type: "A" };
}
type main_output_target = { type: "A" } | { type: "B"; value: number }; // Extracted from typeAlias

type main = ref_37f28352461deb8c9cf7debb5499d53af115c53126c6b60c72b9f3c237354f54;
type ref_37f28352461deb8c9cf7debb5499d53af115c53126c6b60c72b9f3c237354f54 = {
    type: "A";
} | {
    type: "B";
    value: number;
};