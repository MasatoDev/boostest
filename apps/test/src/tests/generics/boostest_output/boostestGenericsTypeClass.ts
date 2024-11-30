export function boostestGenericsTypeClass<T>(isArray = false) {
	return new ref_8cdb8001f374fb3bb36d6084552ca2a0dadfa4a09c1ec7bba1107dd31fafe88d({
		name: "test string data",
		innerGeneric: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		innerGenericLiteral: "inner generic string"
	}, {
		en: "test string data",
		fr: "test string data",
		it: "test string data",
		es: "test string data"
	}, {
		name: "test string data",
		ver: 10,
		age: 10
	}, {
		en: "test string data",
		fr: "test string data",
		it: "test string data",
		es: "test string data"
	}, "test string data", { childPartial: {
		name: "test string data",
		ver: 10,
		age: 10
	} }, {
		name: "test string data",
		ver: 10,
		age: 10
	}, {
		name: "test string data",
		ver: 10,
		age: 10
	}, {
		name: "test string data",
		ver: 10,
		age: 10
	}, "D", "en", "B", "fr", [], { name: "test string data" }, {
		ver: 10,
		age: 10
	}, {
		ver: 10,
		age: 10
	});
}
type main_output_target = ["classReference", ref_8cdb8001f374fb3bb36d6084552ca2a0dadfa4a09c1ec7bba1107dd31fafe88d, [
  { name: string; innerGeneric: { name: string; ver: number; age: number }; innerGenericLiteral: "inner generic string" },
  { en: string; fr: string; it: string; es: string },
  { name: string; ver: number; age: number },
  { en: string; fr: string; it: string; es: string },
  string,
  { childPartial: { name: string; ver: number; age: number } },
  { name: string; ver: number; age: number },
  { name: string; ver: number; age: number },
  { name: string; ver: number; age: number },
  "D" | "E",
  "en" | "fr",
  "B" | "C" | "D" | "E",
  "fr",
  Array<string>,
  { name: string },
  { ver: number; age: number },
  { ver: number; age: number }
]]; // Extracted from typeAlias

type main = ref_8cdb8001f374fb3bb36d6084552ca2a0dadfa4a09c1ec7bba1107dd31fafe88d;
class ref_8cdb8001f374fb3bb36d6084552ca2a0dadfa4a09c1ec7bba1107dd31fafe88d {
    constructor(public innserGenericInitializer: ref_65ecd8848beb3b193362c73284281242e5c53531155b0f8d390ffa81da7f0e35, public mapperType: ref_e7d2cb5782c7c0f3f865766f14de45fcc1a901a39ac7965514aa4e44e8065a0f, public keyOfMapperType: ref_faf7bacfff6eac957eba5147ed102b84fa3029818df4ec40ff0681d9e17b394a, public butterflyWithGenerics: ref_2f28aa726d14d35a2b3f2f7bcab6f9d99bfc59d2508a20912288c19a787e9d6c<string>, public nonNullable: ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<undefined | string | null>, public nestedPartial: {
        childPartial: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    }, public partial: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>, public required: ref_5f9b113693cce952fbe76b6cb7bcc817ab7a9bad4a92e4c4d86593167f7bda93<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>, public readonly: ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>, public extract: ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<"A" | "B" | "C" | "D" | "E", "D" | "E">, public extractRefUnion: ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b, "en" | "fr">, public exclude: ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<ref_12d6555d5e73e93f9d0f4ce32b5fe45d601074bc41912980b2a1153314b990a7, "A">, public onDirectRefUnionType: ref_e70ce6e45ff698c81201758d19429f5853be7fef8d8c0c512c5602d1d39bd27f<"fr">, public array: Array<string>, public pick: ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "name">, public pickMulti: ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "ver" | "age">, public omit: ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "name">) { }
}
type ref_65ecd8848beb3b193362c73284281242e5c53531155b0f8d390ffa81da7f0e35 = {
    name: string;
    innerGeneric: ref_f630f49591c539abee5d224c14c675dbe9c73af3bf59e03663b65b93a9176789<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    innerGenericLiteral: ref_f630f49591c539abee5d224c14c675dbe9c73af3bf59e03663b65b93a9176789<"inner generic string">;
};
type ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 = {
    name: string;
    ver: number;
    age: number;
};
type ref_f630f49591c539abee5d224c14c675dbe9c73af3bf59e03663b65b93a9176789<T> = T;
type ref_e7d2cb5782c7c0f3f865766f14de45fcc1a901a39ac7965514aa4e44e8065a0f = {
    [key in ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b]: string;
};
type ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b = "en" | "fr" | "it" | "es";
type ref_faf7bacfff6eac957eba5147ed102b84fa3029818df4ec40ff0681d9e17b394a = {
    [key in keyof ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8]: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8[key];
};
type ref_2f28aa726d14d35a2b3f2f7bcab6f9d99bfc59d2508a20912288c19a787e9d6c<T> = {
    [key in ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b]: T;
};
type ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<T> = T & {};
type ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<T> = {
    [P in keyof T]?: T[P];
};
type ref_5f9b113693cce952fbe76b6cb7bcc817ab7a9bad4a92e4c4d86593167f7bda93<T> = {
    [P in keyof T]-?: T[P];
};
type ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<T, U> = T extends U ? T : never;
type ref_12d6555d5e73e93f9d0f4ce32b5fe45d601074bc41912980b2a1153314b990a7 = "A" | "B" | "C" | "D" | "E";
type ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<T, U> = T extends U ? never : T;
type ref_e70ce6e45ff698c81201758d19429f5853be7fef8d8c0c512c5602d1d39bd27f<T> = T extends ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b ? T : never;
type ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<T, K extends keyof any> = ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<T, ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<keyof T, K>>;