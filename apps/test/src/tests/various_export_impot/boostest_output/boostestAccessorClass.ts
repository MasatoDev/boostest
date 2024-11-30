export function boostestAccessorClass<T>(isArray = false) {
	return new ref_38230a75c64f12c2d4e27f6e60e16c9598adad1f6405fa37fc7d5c0039bc3518("test string data", 10, 10);
}
type main_output_target = ["classReference", ref_38230a75c64f12c2d4e27f6e60e16c9598adad1f6405fa37fc7d5c0039bc3518, [
  string,
  number,
  number
]]; // Extracted from typeAlias

type main = ref_38230a75c64f12c2d4e27f6e60e16c9598adad1f6405fa37fc7d5c0039bc3518;
class ref_38230a75c64f12c2d4e27f6e60e16c9598adad1f6405fa37fc7d5c0039bc3518 {
    constructor(public name: string, private age: number, protected readonly readonlyAge: number) { }
}