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

type main = ref_b318e6f55bcffac12afb3b4b9f91914f809ccd41db5184b10a0bd1ec18ece893;
type ref_b318e6f55bcffac12afb3b4b9f91914f809ccd41db5184b10a0bd1ec18ece893 = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<undefined | string | null>;
};
type ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T> = T & {};