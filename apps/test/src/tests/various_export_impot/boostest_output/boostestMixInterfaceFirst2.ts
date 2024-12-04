export function boostestMixInterfaceFirst2<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst2",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst2" }; // Extracted from typeAlias

type main = ref_db154eb2760b66fad2bc473012545a0c4ed390f9921b527b13fd967c9c830f64;
interface ref_db154eb2760b66fad2bc473012545a0c4ed390f9921b527b13fd967c9c830f64 {
    name: "MixInterfaceFirst2";
}