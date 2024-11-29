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

type main = ref_926525b2817f4de75802748a57f37d74f60fb5209e414ca78b4dfd1ae3d2397b;
type ref_926525b2817f4de75802748a57f37d74f60fb5209e414ca78b4dfd1ae3d2397b = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<undefined | string | null>;
};
type ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<T> = T & {};