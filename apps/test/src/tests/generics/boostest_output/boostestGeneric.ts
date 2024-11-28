export function boostestGeneric<T>(args?: Partial<T>): T {
	return {
		name: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		...args
	} as T;
}
type main_output_target = { name: { name: string; ver: number; age: number } }; // Extracted from typeAlias

type main = ref_23926602c7793831dff1d59a393d22c75be3325ffbb9bb02ef4b941477c2379e<ref_7fe0a3e02306fd4fda70c688692208c1f9b9839583215b0b97a8b8c8875e3a7a>;
type ref_23926602c7793831dff1d59a393d22c75be3325ffbb9bb02ef4b941477c2379e<T> = {
    name: T;
};
type ref_7fe0a3e02306fd4fda70c688692208c1f9b9839583215b0b97a8b8c8875e3a7a = {
    name: string;
    ver: number;
    age: number;
};