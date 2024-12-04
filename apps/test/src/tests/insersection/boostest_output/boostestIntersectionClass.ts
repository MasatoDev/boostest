export function boostestIntersectionClass<T>(isArray = false) {
	return new ref_b2a83b5bda4ac6188ff165daeaf2802322b0bbd7c54f78e7ef333f502b555bf9({
		...{ name: "test string data" },
		...{ ver: 10 }
	}, "hoga", "test string data");
}
type main_output_target = ["classReference", ref_b2a83b5bda4ac6188ff165daeaf2802322b0bbd7c54f78e7ef333f502b555bf9, [
  { name: string } & { ver: number },
  "hoga",
  string
]]; // Extracted from typeAlias

type main = ref_b2a83b5bda4ac6188ff165daeaf2802322b0bbd7c54f78e7ef333f502b555bf9;
class ref_b2a83b5bda4ac6188ff165daeaf2802322b0bbd7c54f78e7ef333f502b555bf9 {
    constructor(public intersction_obj: {
        name: string;
    } & {
        ver: number;
    }, public intersction_string: string & "hoga", public nonNullable: ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<undefined | string | null>) { }
}
type ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<T> = T & {};