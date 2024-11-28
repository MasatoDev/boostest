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
    innserGenericInitializer: ref_4faf12ebc946d0effdc582b84f3db464af2b6c6ccf0672b2fc573eddc37115db;
    mapperType: ref_679fd3af096e23608906bd12375e8caa602d6f11d9c2b1917f432ce2f1500725;
    keyOfMapperType: ref_7239ee4d2b12837bfeeea75b46dd31431b47aecafd7750f8df05a44c82d42254;
    butterflyWithGenerics: ref_9f370cdf86b82cc1870e66af38a3118ec9d1a324aab1d3a5553d7a1259b1e481<string>;
    nonNullable: ref_7344454cdc617470bf9e90b9d0fb3eff62e55b4e76e168ded45c8f7e21a47f48<undefined | string | null>;
    nestedPartial: {
        childPartial: ref_859d22099fee99f105a5a9fc8a0afdbe39ffc0e249004da559cf978132557c72<ref_33143c7cce9b026a24d89a7f8cb3d08dff20815396c727b5109850072e8cb082>;
    };
    partial: ref_43331e4ba853d23361fec5f2681761b06725e22d2248cdc25f7f620d4b5b082a<ref_511dd5580ff87100019d60b7267eb715b3140022efa9daf14591f72da5c30667>;
    required: ref_60257b7d7fa69a21be6ed42c0c448a3fcdf60962b1f57e18cd649359b4a2c40e<ref_b379a4f46b7d2a35031c4697a889211ef9168fde6214094727d02cbaf7502b74>;
    readonly: ref_7570a9ff084766b751c0d90692cae64d8deebd7a9091e917587d1a0b456a9b39<ref_9dbb1e54d1b9151962582a111643f2ed1bd429facd871a5422819a5f4c338521>;
    extract: ref_487cffe142601617473b813fd7f292fdfff7b028aed2e0258a11e4df2f518a79<"A" | "B" | "C" | "D" | "E", "D" | "E">;
    extractRefUnion: ref_4d05b94b70b0d1f37cc888c60356509bd1acaed49fa975af0767bd83a74ec496<ref_a5c6f9b35f78b822a8efebe39b8a903ae432b9df64b38ae338e3355d4b9ce6ac, "en" | "fr">;
    exclude: ref_b3dbdae4ede29e3e24bdd759cd71a00385790dfe8036bcc74c88e0fa5fb7812d<ref_1ab9fc1bc4f5d1cda851e59acce60873c02a010a0448ede05fedfe71a6211400, "A">;
    onDirectRefUnionType: ref_348daa69ec62d93f4dd181b15e9e06c3c1ce960d2521dfdce2eb0706ee45dd75<"fr">;
    array: Array<string>;
    pick: ref_2d04fee86dc9fcc65a41d09c0ae46f0453aaf360840c81aa143a4dd9faf26489<ref_f6afa77280c9817e75fe9eb6460392aac395d8ad504c3a2318c490e1362da9f8, "name">;
    pickMulti: ref_8146f0d7ce54cd6dd7c2b81ea354a1ee84fcf398934ea7ef8ef245b26ed8fa10<ref_544f7c85593118e76358c8771ea764265424fef773a1b31861db9151b484966a, "ver" | "age">;
    omit: ref_19b28572259aeedfc3c596435ec8cef48590f2d53b9435047819bcecd55a5ab1<ref_2865a09d2a9997659814abd9594ba60a1f9009d93bd5972edf49299eb62adc4f, "name">;
};
type ref_4faf12ebc946d0effdc582b84f3db464af2b6c6ccf0672b2fc573eddc37115db = {
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
type ref_679fd3af096e23608906bd12375e8caa602d6f11d9c2b1917f432ce2f1500725 = {
    [key in ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a]: string;
};
type ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a = "en" | "fr" | "it" | "es";
type ref_7239ee4d2b12837bfeeea75b46dd31431b47aecafd7750f8df05a44c82d42254 = {
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
type ref_9f370cdf86b82cc1870e66af38a3118ec9d1a324aab1d3a5553d7a1259b1e481<T> = {
    [key in ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99]: T;
};
type ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99 = "en" | "fr" | "it" | "es";
type ref_7344454cdc617470bf9e90b9d0fb3eff62e55b4e76e168ded45c8f7e21a47f48<T> = T & {};
type ref_33143c7cce9b026a24d89a7f8cb3d08dff20815396c727b5109850072e8cb082 = {
    name: string;
    ver: number;
    age: number;
};
type ref_859d22099fee99f105a5a9fc8a0afdbe39ffc0e249004da559cf978132557c72<T> = {
    [P in keyof T]?: T[P];
};
type ref_511dd5580ff87100019d60b7267eb715b3140022efa9daf14591f72da5c30667 = {
    name: string;
    ver: number;
    age: number;
};
type ref_43331e4ba853d23361fec5f2681761b06725e22d2248cdc25f7f620d4b5b082a<T> = {
    [P in keyof T]?: T[P];
};
type ref_b379a4f46b7d2a35031c4697a889211ef9168fde6214094727d02cbaf7502b74 = {
    name: string;
    ver: number;
    age: number;
};
type ref_60257b7d7fa69a21be6ed42c0c448a3fcdf60962b1f57e18cd649359b4a2c40e<T> = {
    [P in keyof T]-?: T[P];
};
type ref_9dbb1e54d1b9151962582a111643f2ed1bd429facd871a5422819a5f4c338521 = {
    name: string;
    ver: number;
    age: number;
};
type ref_7570a9ff084766b751c0d90692cae64d8deebd7a9091e917587d1a0b456a9b39<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_487cffe142601617473b813fd7f292fdfff7b028aed2e0258a11e4df2f518a79<T, U> = T extends U ? T : never;
type ref_a5c6f9b35f78b822a8efebe39b8a903ae432b9df64b38ae338e3355d4b9ce6ac = "en" | "fr" | "it" | "es";
type ref_4d05b94b70b0d1f37cc888c60356509bd1acaed49fa975af0767bd83a74ec496<T, U> = T extends U ? T : never;
type ref_1ab9fc1bc4f5d1cda851e59acce60873c02a010a0448ede05fedfe71a6211400 = "A" | "B" | "C" | "D" | "E";
type ref_b3dbdae4ede29e3e24bdd759cd71a00385790dfe8036bcc74c88e0fa5fb7812d<T, U> = T extends U ? never : T;
type ref_348daa69ec62d93f4dd181b15e9e06c3c1ce960d2521dfdce2eb0706ee45dd75<T> = T extends ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 ? T : never;
type ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 = "en" | "fr" | "it" | "es";
type ref_f6afa77280c9817e75fe9eb6460392aac395d8ad504c3a2318c490e1362da9f8 = {
    name: string;
    ver: number;
    age: number;
};
type ref_2d04fee86dc9fcc65a41d09c0ae46f0453aaf360840c81aa143a4dd9faf26489<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_544f7c85593118e76358c8771ea764265424fef773a1b31861db9151b484966a = {
    name: string;
    ver: number;
    age: number;
};
type ref_8146f0d7ce54cd6dd7c2b81ea354a1ee84fcf398934ea7ef8ef245b26ed8fa10<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_2865a09d2a9997659814abd9594ba60a1f9009d93bd5972edf49299eb62adc4f = {
    name: string;
    ver: number;
    age: number;
};
type ref_19b28572259aeedfc3c596435ec8cef48590f2d53b9435047819bcecd55a5ab1<T, K extends keyof any> = ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<keyof T, K>>;
type ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<T, U> = T extends U ? never : T;
type ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, K extends keyof T> = {
    [P in K]: T[P];
};