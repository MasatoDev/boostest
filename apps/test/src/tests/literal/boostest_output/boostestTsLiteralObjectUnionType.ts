export function boostestTsLiteralObjectUnionType<T>(isArray = false) {
	return { type: "A" };
}
type main_output_target = { type: "A" } | { type: "B"; value: number }; // Extracted from typeAlias

type main = ref_0d05cda2f2981e51550bcef985eae35075297cd32b4cf04a5ecad6dd7d6ecd7a;
type ref_0d05cda2f2981e51550bcef985eae35075297cd32b4cf04a5ecad6dd7d6ecd7a = {
    type: "A";
} | {
    type: "B";
    value: number;
};