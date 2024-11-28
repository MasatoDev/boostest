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

type main = ref_6c6a2a33aa4ebfca427ecf345802e5856b4823108f695f4b4cb1d8b14962df7d;
type ref_6c6a2a33aa4ebfca427ecf345802e5856b4823108f695f4b4cb1d8b14962df7d = {
    innserGenericInitializer: ref_6dc43fe8e7646ae0628ac3313e9e4cb574b468786be56eb7f702dd27d73c21e0;
    mapperType: ref_299c037045434bb83764a6785d163429683048bcf72d9913d343d63a1bd63aaa;
    keyOfMapperType: ref_b5f5667774af0fab2935ae13cf5fce26082e42ab6c6966c5f1fdae13b2e826fb;
    butterflyWithGenerics: ref_21c9cd2e7a918666bc4bacd7e3201e125513d5347e19296dc16f1e939aa1595e<string>;
    nonNullable: ref_eb489cf04a2f893f87e4d4ca20b1ce665ce950e205b8324bae10d12a67ec9929<undefined | string | null>;
    nestedPartial: {
        childPartial: ref_22278cd4f9f72230a22d8c3ffd5f67c382fa44200bb14288e3bb52671b91c2fa<ref_3e7415e3ddbd1e43b0188886bbe8043a2f449b4427370214eed4238c4bf5ce20>;
    };
    partial: ref_a4b1d3eed6fd3082500befb22011da9e3eb5ac50f681696d9c29e5a1a084e8fb<ref_31b7bd65d903c9a69bfe7fdcc8e32b0ca8c4773a0d87588228338804dc29b723>;
    required: ref_8e1c2eccd1d410bf549325217b2ad07e15b08d46f417c6006f138ef0d0cf816e<ref_0e93762731e0f83e23aba52e69a57ca1c334f9d9d1341ec37d6c472c94072d20>;
    readonly: ref_d1a47f5914e82ff685185bff7e2da55cb7aca91b28a62874dfce128f0843740b<ref_da3651d2846265129d543165b2da50376ba845b207849586b0b397848e3cba15>;
    extract: ref_1d773a2c4d31102cd83bf9d5da6b04a55cc8de565f18009c8eeb3905e2120240<"A" | "B" | "C" | "D" | "E", "D" | "E">;
    extractRefUnion: ref_c6297765b9d93231efa25d498de42085682592e31953770cfbdeec3ef03c497b<ref_ccfd5b0969823dd41285d263e547c693d029abee09489779323150192b3ba0ba, "en" | "fr">;
    exclude: ref_db2164f4bd5fdc70f67f112fb5fff3bd2b4ba1b454f29c4571525881bd8cd31f<ref_0fb15a8f8e6e1a8c44cc7e6778c38c9a64c6766b451898e60f45b7633a2e8d08, "A">;
    onDirectRefUnionType: ref_e7c47a197346ec1f83227fb731bfd8181a49aeb17caf59aae2f6fed8a4edcbcf<"fr">;
    array: Array<string>;
    pick: ref_2f5f3c8ec024de580a4e358b67885899a7e43b3d774a842227ada7d4397516b0<ref_bb81ef6ec17d97ad53b5902657fa2a4a87208dad2c9fa7792ca04f463e25d960, "name">;
    pickMulti: ref_77a77a7e6c56c81868c8c0b7e1378cde9f2098fc87791abb24356bbe64c4a6c7<ref_233eea86e7c60684e2bf42c55a0d11bc2ef38874e25c915ee1aeaf4e3fef5f4e, "ver" | "age">;
    omit: ref_eb8a44bef7568bb9020b94c3964e73218bcb85eaefb5b01afe25a2aaa963b694<ref_bb656e956da198fd0605f5375c0b4be512a92b43b4a179dbe1bbbfff644b218c, "name">;
};
type ref_6dc43fe8e7646ae0628ac3313e9e4cb574b468786be56eb7f702dd27d73c21e0 = {
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
type ref_299c037045434bb83764a6785d163429683048bcf72d9913d343d63a1bd63aaa = {
    [key in ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a]: string;
};
type ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a = "en" | "fr" | "it" | "es";
type ref_b5f5667774af0fab2935ae13cf5fce26082e42ab6c6966c5f1fdae13b2e826fb = {
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
type ref_21c9cd2e7a918666bc4bacd7e3201e125513d5347e19296dc16f1e939aa1595e<T> = {
    [key in ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99]: T;
};
type ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99 = "en" | "fr" | "it" | "es";
type ref_eb489cf04a2f893f87e4d4ca20b1ce665ce950e205b8324bae10d12a67ec9929<T> = T & {};
type ref_3e7415e3ddbd1e43b0188886bbe8043a2f449b4427370214eed4238c4bf5ce20 = {
    name: string;
    ver: number;
    age: number;
};
type ref_22278cd4f9f72230a22d8c3ffd5f67c382fa44200bb14288e3bb52671b91c2fa<T> = {
    [P in keyof T]?: T[P];
};
type ref_31b7bd65d903c9a69bfe7fdcc8e32b0ca8c4773a0d87588228338804dc29b723 = {
    name: string;
    ver: number;
    age: number;
};
type ref_a4b1d3eed6fd3082500befb22011da9e3eb5ac50f681696d9c29e5a1a084e8fb<T> = {
    [P in keyof T]?: T[P];
};
type ref_0e93762731e0f83e23aba52e69a57ca1c334f9d9d1341ec37d6c472c94072d20 = {
    name: string;
    ver: number;
    age: number;
};
type ref_8e1c2eccd1d410bf549325217b2ad07e15b08d46f417c6006f138ef0d0cf816e<T> = {
    [P in keyof T]-?: T[P];
};
type ref_da3651d2846265129d543165b2da50376ba845b207849586b0b397848e3cba15 = {
    name: string;
    ver: number;
    age: number;
};
type ref_d1a47f5914e82ff685185bff7e2da55cb7aca91b28a62874dfce128f0843740b<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_1d773a2c4d31102cd83bf9d5da6b04a55cc8de565f18009c8eeb3905e2120240<T, U> = T extends U ? T : never;
type ref_ccfd5b0969823dd41285d263e547c693d029abee09489779323150192b3ba0ba = "en" | "fr" | "it" | "es";
type ref_c6297765b9d93231efa25d498de42085682592e31953770cfbdeec3ef03c497b<T, U> = T extends U ? T : never;
type ref_0fb15a8f8e6e1a8c44cc7e6778c38c9a64c6766b451898e60f45b7633a2e8d08 = "A" | "B" | "C" | "D" | "E";
type ref_db2164f4bd5fdc70f67f112fb5fff3bd2b4ba1b454f29c4571525881bd8cd31f<T, U> = T extends U ? never : T;
type ref_e7c47a197346ec1f83227fb731bfd8181a49aeb17caf59aae2f6fed8a4edcbcf<T> = T extends ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 ? T : never;
type ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 = "en" | "fr" | "it" | "es";
type ref_bb81ef6ec17d97ad53b5902657fa2a4a87208dad2c9fa7792ca04f463e25d960 = {
    name: string;
    ver: number;
    age: number;
};
type ref_2f5f3c8ec024de580a4e358b67885899a7e43b3d774a842227ada7d4397516b0<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_233eea86e7c60684e2bf42c55a0d11bc2ef38874e25c915ee1aeaf4e3fef5f4e = {
    name: string;
    ver: number;
    age: number;
};
type ref_77a77a7e6c56c81868c8c0b7e1378cde9f2098fc87791abb24356bbe64c4a6c7<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_bb656e956da198fd0605f5375c0b4be512a92b43b4a179dbe1bbbfff644b218c = {
    name: string;
    ver: number;
    age: number;
};
type ref_eb8a44bef7568bb9020b94c3964e73218bcb85eaefb5b01afe25a2aaa963b694<T, K extends keyof any> = ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<keyof T, K>>;
type ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<T, U> = T extends U ? never : T;
type ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, K extends keyof T> = {
    [P in K]: T[P];
};