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

type main = ref_c63ee7893c5ba166f419cbd59df882e55f484bef909470dd75f75e8986c73893;
type ref_c63ee7893c5ba166f419cbd59df882e55f484bef909470dd75f75e8986c73893 = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_0b1b9e589bb810154b3b2aa78bf8ba8cae836b76fbc5ed68d897992eee9dade3<undefined | string | null>;
};
type ref_0b1b9e589bb810154b3b2aa78bf8ba8cae836b76fbc5ed68d897992eee9dade3<T> = T & {};