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

type main = ref_058b50e9adac546243acba66a08edd2e74d24f32d5eba9dfb75f1a774172061d;
type ref_058b50e9adac546243acba66a08edd2e74d24f32d5eba9dfb75f1a774172061d = {
    intersction_obj: {
        name: string;
    } & {
        ver: number;
    };
    intersction_string: string & "hoga";
    nonNullable: ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<undefined | string | null>;
};
type ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T> = T & {};