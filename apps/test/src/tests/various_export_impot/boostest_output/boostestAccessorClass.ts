export function boostestAccessorClass<T>(isArray = false) {
	return new ref_2cee712afc0dfc829b8ae090d81a953da67dc5b54e44b1d4fc2e193e41901ae6("test string data", 10, 10);
}
type main_output_target = ["classReference", ref_2cee712afc0dfc829b8ae090d81a953da67dc5b54e44b1d4fc2e193e41901ae6, [
  string,
  number,
  number
]]; // Extracted from typeAlias

type main = ref_2cee712afc0dfc829b8ae090d81a953da67dc5b54e44b1d4fc2e193e41901ae6;
class ref_2cee712afc0dfc829b8ae090d81a953da67dc5b54e44b1d4fc2e193e41901ae6 {
    constructor(public name: string, private age: number, protected readonly readonlyAge: number) { }
}