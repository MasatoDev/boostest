export function boostestAccessorClass<T>(isArray = false) {
	return new ref_67b433fda2f50271d6baa52695ec5153516bb31c0c00c0dd42f2a2ab0766a10b("test string data", 10, 10);
}
type main_output_target = ["classReference", ref_67b433fda2f50271d6baa52695ec5153516bb31c0c00c0dd42f2a2ab0766a10b, [
  string,
  number,
  number
]]; // Extracted from typeAlias

type main = ref_67b433fda2f50271d6baa52695ec5153516bb31c0c00c0dd42f2a2ab0766a10b;
class ref_67b433fda2f50271d6baa52695ec5153516bb31c0c00c0dd42f2a2ab0766a10b {
    constructor(public name: string, private age: number, protected readonly readonlyAge: number) { }
}