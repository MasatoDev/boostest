export function boostestGenericsAliasType<T>(args?: Partial<T>): T {
	return {
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
		innserGenericInitializer: {
			name: "test string data",
			innerGeneric: {
				name: "test string data",
				ver: 10,
				age: 10
			},
			innerGenericLiteral: "inner generic string"
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
type main_output_target = { mapperType: { en: string; fr: string; it: string; es: string }; keyOfMapperType: { name: string; ver: number; age: number }; innserGenericInitializer: { name: string; innerGeneric: { name: string; ver: number; age: number }; innerGenericLiteral: "inner generic string" }; butterflyWithGenerics: { en: string; fr: string; it: string; es: string }; nonNullable: string; nestedPartial: { childPartial: { name: string; ver: number; age: number } }; partial: { name: string; ver: number; age: number }; required: { name: string; ver: number; age: number }; readonly: { name: string; ver: number; age: number }; extract: "D" | "E"; extractRefUnion: "en" | "fr"; exclude: "B" | "C" | "D" | "E"; onDirectRefUnionType: "fr"; array: Array<string>; pick: { name: string }; pickMulti: { ver: number; age: number }; omit: { ver: number; age: number } }; // Extracted from typeAlias

type main = ref_4d3e12e5e81ad3f012aca19b7998b9c0f1d1958311ce19e72cd19fcddb5c7b93;
type ref_4d3e12e5e81ad3f012aca19b7998b9c0f1d1958311ce19e72cd19fcddb5c7b93 = {
    mapperType: ref_e34cf2e5fb04efe7f4b214d42236fe6589fb6fd6bbbfb6e6adc95ca5220c61fb;
    keyOfMapperType: ref_75140e48db8b751cefc9276827782154e571019c27c7766e789bf7152aaa34dd;
    innserGenericInitializer: ref_98b4c822bf6484534e8f2817f8457ea05fe9acdc46b449122293b3580f1c9eb5;
    butterflyWithGenerics: ref_2f6bac96980fc0d4dfc9c05798b0add4c208a53b167a1cac9e9e896052aa5848<string>;
    nonNullable: ref_a6e58ef759f82e7efaf86e03909c76ce40ed89bd75738ed9a9573617af7dfac4<undefined | string | null>;
    nestedPartial: {
        childPartial: ref_fc2677d5f620712ad9c23d97757b3fd25cdc684f7274a9ef7125de1c3b27bea8<ref_3db8dbef80b8595c1300945ed21f61a96f04cf3422b14e00eb853ec88f04fbfe>;
    };
    partial: ref_a7d7f7c5cfebf7a858ee9c25376636bc861a52877037d1db805aa801fff6456d<ref_053d589ad332d7706266fb758493496b2ce4ac4fc5654f0d706fc507031be93c>;
    required: ref_1067d38c3e72abd61c39b7cc3549955565ba307bf8071385b5ba8d509a5dae55<ref_94ec7eaa4b955e7159e91e85477fe48ad7e4990eac53040ceb70402426e774ce>;
    readonly: ref_aef2cdb0efff8c9da08871bc2b791ce48ee48b1448c5f83960e4c2df6ef35eba<ref_6a0443876929e603f90442245e92c445b009a9c6f0123999df0e115d8ec5b214>;
    extract: ref_0c6863a13aaf7fd2275519f13fed1f51f17d4ef515c13f7449bbe1cc3078c809<"A" | "B" | "C" | "D" | "E", "D" | "E">;
    extractRefUnion: ref_cf4ebdec60e10e8b39577b672872e6cb4a1eecd2cca1c1e2e24002beab4a1be5<ref_7f782fc9621e6b66c3b44afcd940e0c7740449dfe13aa87fbe3b8a7fefb86333, "en" | "fr">;
    exclude: ref_4e47bf8fa5c95d9d1e1b906ceba32e9bd90093121ad9c12ab336f1b862a756b5<ref_61e444440a314f94e1fe668aea9dde19c971d1c75cb65325355f84ecee199ab2, "A">;
    onDirectRefUnionType: ref_f3f1fa5e748c5398b4354e2d88608c2b7093d01d1361b313481014b5bed0e4c8<"fr">;
    array: Array<string>;
    pick: ref_c2b600f43206d9b77670b30f60e81c526d14b1e3f7e45e91bcccbe3e834c374a<ref_08674e3ee4b6d7f98260e571f3ea9a6a21c163caeeff1da1de40c35c90268f4a, "name">;
    pickMulti: ref_e42629333aae107c577b61b1539e1b9b8eba7e96c88dd2c8409c89f5af7794e4<ref_9103b0cb5abc0239d648db340dd24a56994f0709c872a036b9cab1d3355cf7c2, "ver" | "age">;
    omit: ref_b7267ce3874141baab8b68fa89fdaf13c62aff22ff49c54b20f399a8117803d8<ref_58f233b39c834c0128b92ca5e8b9a0a69c37ff6b454281bda9713ab691cb4bf5, "name">;
};
type ref_e34cf2e5fb04efe7f4b214d42236fe6589fb6fd6bbbfb6e6adc95ca5220c61fb = {
    [key in ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a]: string;
};
type ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a = "en" | "fr" | "it" | "es";
type ref_75140e48db8b751cefc9276827782154e571019c27c7766e789bf7152aaa34dd = {
    [key in keyof ref_1ed7bad07da1757577da995e67ad344b1b6d07ea37cfc36e9dd1cfa6c727ad43]: ref_2a0341cec3a818f2397aa6060d26c665ca8e3acb3c60590fe74920c1c66cfe31[key];
};
type ref_1ed7bad07da1757577da995e67ad344b1b6d07ea37cfc36e9dd1cfa6c727ad43 = {
    name: string;
    ver: number;
    age: number;
};
type ref_2a0341cec3a818f2397aa6060d26c665ca8e3acb3c60590fe74920c1c66cfe31 = {
    name: string;
    ver: number;
    age: number;
};
type ref_98b4c822bf6484534e8f2817f8457ea05fe9acdc46b449122293b3580f1c9eb5 = {
    name: string;
    innerGeneric: ref_fdfbc38ef14941344b22d79ad6968b3bf813a54b2d1f19179032bad14daef81c<ref_ee4abd6afe0d823f0b711a215e9600fb736c03e51d92fd74430717fc0039640e>;
    innerGenericLiteral: ref_e5b86d04ba320e7f5ee227056da9ac7c5439e6ea50c801340bc932dbc54de8df<"inner generic string">;
};
type ref_ee4abd6afe0d823f0b711a215e9600fb736c03e51d92fd74430717fc0039640e = {
    name: string;
    ver: number;
    age: number;
};
type ref_fdfbc38ef14941344b22d79ad6968b3bf813a54b2d1f19179032bad14daef81c<T> = T;
type ref_e5b86d04ba320e7f5ee227056da9ac7c5439e6ea50c801340bc932dbc54de8df<T> = T;
type ref_2f6bac96980fc0d4dfc9c05798b0add4c208a53b167a1cac9e9e896052aa5848<T> = {
    [key in ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99]: T;
};
type ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99 = "en" | "fr" | "it" | "es";
type ref_a6e58ef759f82e7efaf86e03909c76ce40ed89bd75738ed9a9573617af7dfac4<T> = T & {};
type ref_3db8dbef80b8595c1300945ed21f61a96f04cf3422b14e00eb853ec88f04fbfe = {
    name: string;
    ver: number;
    age: number;
};
type ref_fc2677d5f620712ad9c23d97757b3fd25cdc684f7274a9ef7125de1c3b27bea8<T> = {
    [P in keyof T]?: T[P];
};
type ref_053d589ad332d7706266fb758493496b2ce4ac4fc5654f0d706fc507031be93c = {
    name: string;
    ver: number;
    age: number;
};
type ref_a7d7f7c5cfebf7a858ee9c25376636bc861a52877037d1db805aa801fff6456d<T> = {
    [P in keyof T]?: T[P];
};
type ref_94ec7eaa4b955e7159e91e85477fe48ad7e4990eac53040ceb70402426e774ce = {
    name: string;
    ver: number;
    age: number;
};
type ref_1067d38c3e72abd61c39b7cc3549955565ba307bf8071385b5ba8d509a5dae55<T> = {
    [P in keyof T]-?: T[P];
};
type ref_6a0443876929e603f90442245e92c445b009a9c6f0123999df0e115d8ec5b214 = {
    name: string;
    ver: number;
    age: number;
};
type ref_aef2cdb0efff8c9da08871bc2b791ce48ee48b1448c5f83960e4c2df6ef35eba<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_0c6863a13aaf7fd2275519f13fed1f51f17d4ef515c13f7449bbe1cc3078c809<T, U> = T extends U ? T : never;
type ref_7f782fc9621e6b66c3b44afcd940e0c7740449dfe13aa87fbe3b8a7fefb86333 = "en" | "fr" | "it" | "es";
type ref_cf4ebdec60e10e8b39577b672872e6cb4a1eecd2cca1c1e2e24002beab4a1be5<T, U> = T extends U ? T : never;
type ref_61e444440a314f94e1fe668aea9dde19c971d1c75cb65325355f84ecee199ab2 = "A" | "B" | "C" | "D" | "E";
type ref_4e47bf8fa5c95d9d1e1b906ceba32e9bd90093121ad9c12ab336f1b862a756b5<T, U> = T extends U ? never : T;
type ref_f3f1fa5e748c5398b4354e2d88608c2b7093d01d1361b313481014b5bed0e4c8<T> = T extends ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 ? T : never;
type ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 = "en" | "fr" | "it" | "es";
type ref_08674e3ee4b6d7f98260e571f3ea9a6a21c163caeeff1da1de40c35c90268f4a = {
    name: string;
    ver: number;
    age: number;
};
type ref_c2b600f43206d9b77670b30f60e81c526d14b1e3f7e45e91bcccbe3e834c374a<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_9103b0cb5abc0239d648db340dd24a56994f0709c872a036b9cab1d3355cf7c2 = {
    name: string;
    ver: number;
    age: number;
};
type ref_e42629333aae107c577b61b1539e1b9b8eba7e96c88dd2c8409c89f5af7794e4<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_58f233b39c834c0128b92ca5e8b9a0a69c37ff6b454281bda9713ab691cb4bf5 = {
    name: string;
    ver: number;
    age: number;
};
type ref_b7267ce3874141baab8b68fa89fdaf13c62aff22ff49c54b20f399a8117803d8<T, K extends keyof any> = ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<keyof T, K>>;
type ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<T, U> = T extends U ? never : T;
type ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, K extends keyof T> = {
    [P in K]: T[P];
};