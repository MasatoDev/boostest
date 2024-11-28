export function boostestIntersectionClass<T>(isArray = false) {
	return new ref_8376aa7065a42d62c2a2f11265ed2fcc48463027052de55d5afcbd1b03df83c9({
		...{ name: "test string data" },
		...{ ver: 10 }
	}, "hoga", "test string data");
}
type main_output_target = ["classReference", ref_8376aa7065a42d62c2a2f11265ed2fcc48463027052de55d5afcbd1b03df83c9, [
  { name: string } & { ver: number },
  "hoga",
  string
]]; // Extracted from typeAlias

type main = ref_8376aa7065a42d62c2a2f11265ed2fcc48463027052de55d5afcbd1b03df83c9;
class ref_8376aa7065a42d62c2a2f11265ed2fcc48463027052de55d5afcbd1b03df83c9 {
    constructor(public intersction_obj: {
        name: string;
    } & {
        ver: number;
    }, public intersction_string: string & "hoga", public nonNullable: ref_c509bff300091fa73fd7227daf5b30f56caba5e207a85809e6432d9b4ba01695<undefined | string | null>) { }
}
type ref_c509bff300091fa73fd7227daf5b30f56caba5e207a85809e6432d9b4ba01695<T> = T & {};