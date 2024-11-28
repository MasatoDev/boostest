export function boostestMixInterfaceFirst<T>(args?: Partial<T>): T {
	return {
		name: "MixInterfaceFirst",
		...args
	} as T;
}
type main_output_target = { name: "MixInterfaceFirst" }; // Extracted from typeAlias

type main = ref_e1a58269cab99c7aa137460b3aae6e76ef0cc5a003c0cf29cc4f968624d1cd6c;
interface ref_e1a58269cab99c7aa137460b3aae6e76ef0cc5a003c0cf29cc4f968624d1cd6c {
    name: "MixInterfaceFirst";
}