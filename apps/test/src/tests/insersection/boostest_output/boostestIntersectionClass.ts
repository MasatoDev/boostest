export function boostestIntersectionClass<T>(isArray = false) {
	return new ref_5f0ff9970ddc0f5d3aba56fafeba7b49602ff91be3f359637779cfd18273ef0e({
		...{ name: "test string data" },
		...{ ver: 10 }
	}, "hoga", "test string data");
}
type main_output_target = ["classReference", ref_5f0ff9970ddc0f5d3aba56fafeba7b49602ff91be3f359637779cfd18273ef0e, [
  { name: string } & { ver: number },
  "hoga",
  string
]]; // Extracted from typeAlias

type main = ref_5f0ff9970ddc0f5d3aba56fafeba7b49602ff91be3f359637779cfd18273ef0e;
class ref_5f0ff9970ddc0f5d3aba56fafeba7b49602ff91be3f359637779cfd18273ef0e {
    constructor(public intersction_obj: {
        name: string;
    } & {
        ver: number;
    }, public intersction_string: string & "hoga", public nonNullable: ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<undefined | string | null>) { }
}
type ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T> = T & {};