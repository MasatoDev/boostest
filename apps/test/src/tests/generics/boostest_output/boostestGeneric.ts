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

type main = ref_f89d34d4a7bbbaea2ff1a75a003857b990d1438602d283db7dbd133d1507110a<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
type ref_f89d34d4a7bbbaea2ff1a75a003857b990d1438602d283db7dbd133d1507110a<T> = {
    name: T;
};
type ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 = {
    name: string;
    ver: number;
    age: number;
};