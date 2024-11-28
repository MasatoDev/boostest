export function boostestIntersectionInterface<T>(args?: Partial<T>): T {
	return {
		intersction_obj: {
			...{ name: "test string data" },
			...{ ver: 10 }
		},
		intersction_string: "hoga",
		nonNullable: "test string data",
		...args
	} as T;
}
type main_output_target = { intersction_obj: { name: string } & { ver: number }; intersction_string: "hoga"; nonNullable: string }; // Extracted from typeAlias

type main = ref_f8acac292bb87e8548832552a08b47cfddceeb4a62b40b791468eee66b4318b1;
type ref_f8acac292bb87e8548832552a08b47cfddceeb4a62b40b791468eee66b4318b1 = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_3bdf01f3cd688e8826c8aae08ae4a8f3070a3b8e5fd9168f959f3f12fb5b8324<undefined | string | null>;
};
type ref_3bdf01f3cd688e8826c8aae08ae4a8f3070a3b8e5fd9168f959f3f12fb5b8324<T> = T & {};