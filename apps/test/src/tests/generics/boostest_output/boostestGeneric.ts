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

type main = ref_9d0e63a0006a9a6e62b428b004b988ea80a31d629895643662002c1fe32d14fd<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
type ref_9d0e63a0006a9a6e62b428b004b988ea80a31d629895643662002c1fe32d14fd<T> = {
    name: T;
};
type ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa = {
    name: string;
    ver: number;
    age: number;
};