export function boostestGenericsInterfaceType<T>(args?: Partial<T>): T {
	return {
		innserGenericInitializer: {
			name: "test string data",
			innerGeneric: {
				name: "test string data",
				ver: 10,
				age: 10
			},
			innerGenericLiteral: "inner generic string"
		},
		mapperType: {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		},
		keyOfMapperType: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		butterflyWithGenerics: {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		},
		nonNullable: "test string data",
		nestedPartial: { childPartial: {
			name: "test string data",
			ver: 10,
			age: 10
		} },
		partial: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		required: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		readonly: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		extract: "D",
		extractRefUnion: "en",
		exclude: "B",
		onDirectRefUnionType: "fr",
		array: [],
		pick: { name: "test string data" },
		pickMulti: {
			ver: 10,
			age: 10
		},
		omit: {
			ver: 10,
			age: 10
		},
		...args
	} as T;
}
type main_output_target = { innserGenericInitializer: { name: string; innerGeneric: { name: string; ver: number; age: number }; innerGenericLiteral: "inner generic string" }; mapperType: { en: string; fr: string; it: string; es: string }; keyOfMapperType: { name: string; ver: number; age: number }; butterflyWithGenerics: { en: string; fr: string; it: string; es: string }; nonNullable: string; nestedPartial: { childPartial: { name: string; ver: number; age: number } }; partial: { name: string; ver: number; age: number }; required: { name: string; ver: number; age: number }; readonly: { name: string; ver: number; age: number }; extract: "D" | "E"; extractRefUnion: "en" | "fr"; exclude: "B" | "C" | "D" | "E"; onDirectRefUnionType: "fr"; array: Array<string>; pick: { name: string }; pickMulti: { ver: number; age: number }; omit: { ver: number; age: number } }; // Extracted from typeAlias

type main = ref_580276e706e507896361a5c72885d680e29cd3b6af7328c7634a7fbe83f097a2;
type ref_580276e706e507896361a5c72885d680e29cd3b6af7328c7634a7fbe83f097a2 = {
    innserGenericInitializer: ref_65ecd8848beb3b193362c73284281242e5c53531155b0f8d390ffa81da7f0e35;
    mapperType: ref_e7d2cb5782c7c0f3f865766f14de45fcc1a901a39ac7965514aa4e44e8065a0f;
    keyOfMapperType: ref_faf7bacfff6eac957eba5147ed102b84fa3029818df4ec40ff0681d9e17b394a;
    butterflyWithGenerics: ref_2f28aa726d14d35a2b3f2f7bcab6f9d99bfc59d2508a20912288c19a787e9d6c<string>;
    nonNullable: ref_9b5e378137698035db7ab12985fab46f2e1d6d9b4350d04382336830ccc09692<undefined | string | null>;
    nestedPartial: {
        childPartial: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    };
    partial: ref_e0cc682ee701ec6857f6ef1084b24456bda67242293d1e4ac33f40f53cb5f05a<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    required: ref_5f9b113693cce952fbe76b6cb7bcc817ab7a9bad4a92e4c4d86593167f7bda93<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    readonly: ref_030dfbebcf173303887cef433eab00c81d9b2d23a1990129d1d10725c5ede59b<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8>;
    extract: ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<"A" | "B" | "C" | "D" | "E", "D" | "E">;
    extractRefUnion: ref_07306641316c22f932def49e0ae9ea7eaf3d74e5ecbe42fcad665978f6d7c847<ref_ee77caf562ecd171f40f031328b141eb37b3459a578c81f3d7f6d18c1ddd184b, "en" | "fr">;
    exclude: ref_08f323b7231c38e1286ac082c5ee7ab7beef1b23d64a2f959db5be1d1466e7be<ref_12d6555d5e73e93f9d0f4ce32b5fe45d601074bc41912980b2a1153314b990a7, "A">;
    onDirectRefUnionType: ref_e70ce6e45ff698c81201758d19429f5853be7fef8d8c0c512c5602d1d39bd27f<"fr">;
    array: Array<string>;
    pick: ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "name">;
    pickMulti: ref_aeb691457540463b3f690f7a4ff24d628ddf0d2700933746245a66f4f9f2fb82<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "ver" | "age">;
    omit: ref_c97e0302c2c90d31f05906a1a2f84757c2b29ed110624baf203257ccf979b9b0<ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, "name">;
};
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