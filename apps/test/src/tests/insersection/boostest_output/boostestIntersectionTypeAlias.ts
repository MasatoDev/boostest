export function boostestIntersectionTypeAlias<T>(args?: Partial<T>): T {
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

type main = ref_4814cc7271af8644645e6184072b72e925c654de852384634035e852ff63c25d;
type ref_4814cc7271af8644645e6184072b72e925c654de852384634035e852ff63c25d = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<undefined | string | null>;
};
type ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<T> = T & {};