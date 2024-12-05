export function boostestCallSignatureInterface<T>(isArray = false) {
	return (name: string, age: number) => {};
}
type main_output_target = { (name: string, age: number): void; (): void }; // Extracted from typeAlias

type main = ref_06d41fa5a59922caa91af7e529433d08521718052cc79936851bff1b721483e7;
interface ref_06d41fa5a59922caa91af7e529433d08521718052cc79936851bff1b721483e7 {
    (name: string, age: number): void;
    (): void;
}