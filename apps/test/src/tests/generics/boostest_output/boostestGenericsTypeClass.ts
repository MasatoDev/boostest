export function boostestGenericsTypeClass<T>(isArray = false) {
	return new ref_8f013c88d013fff5b452b71951fe8325187dc0cc682bfe7781d2f31400ef8a45({
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
type main_output_target = ["classReference", ref_8f013c88d013fff5b452b71951fe8325187dc0cc682bfe7781d2f31400ef8a45, [
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

type main = ref_8f013c88d013fff5b452b71951fe8325187dc0cc682bfe7781d2f31400ef8a45;
class ref_8f013c88d013fff5b452b71951fe8325187dc0cc682bfe7781d2f31400ef8a45 {
    constructor(public innserGenericInitializer: ref_519dd72a12d5fa15c85b38dd4bb679f5d19ff03c1f4395cc1366a1a9a11aad3f, public mapperType: ref_bcae2ee7a075c1f30f2aa44745e4b5216c5aa82d44aecd36c552578d751b2895, public keyOfMapperType: ref_4b5942163191eb8956a438eb73aa75cdfd4ffc0d20a8d3c6234ae71711055679, public butterflyWithGenerics: ref_ca9d76184132f0f4e2609c797f236d8f3c415e0c2e6907a7f5d7433cbbdda212<string>, public nonNullable: ref_b31e8e1a5f35d9132cbff111048eebbc18b7b7315704a4c63145b3a522e19c0e<undefined | string | null>, public nestedPartial: {
        childPartial: ref_25ffa72825d31705248ba18bd0983716e96ab7778ef4b0a1f97fef233d885857<ref_f78fc8a81ace43d7ffd78061311a16eb6131d0bc7e3dafd3cb265646adbb80a3>;
    }, public partial: ref_aeff80551d5fd6d24a952adf9a57657b49e76baaa263202aee3a1e99ea8c41d8<ref_4151fd0fc0528d3bbc537ad97292b05a6935555518eeb2cfbaed694eb26ab6b9>, public required: ref_078019e8a712c5231b612918ac346ac7442a59ac85f57472616279b1ef14ff59<ref_a9e0a1b8f690a26f72450ebb804d8c0952a5d92272651db192d75340d6e5757b>, public readonly: ref_bf90c4882b1d5b6ea58a25091582e57f9e5ba558138ce299bfe6eecb2999fe29<ref_3bd778573770d0ad04709d95a1c76477da30558b8cb74a774cb005669ba2fbd2>, public extract: ref_7f7355dfa524a8c2e5c6e28f004de9b040420da4a41c1fadd6d408a849de4f70<"A" | "B" | "C" | "D" | "E", "D" | "E">, public extractRefUnion: ref_53a7c8b223909a9ba3b3ae0ee88f90d116a3e5e45c969652a1abb64d2ab103da<ref_9747a735f1cdb554a065411cebf8c3d6b144b0674b9c1f65bece2bb8ee22e6ed, "en" | "fr">, public exclude: ref_1e3071634a814c25a8f558e6a3acd28cda99b3afe8309897afefa8f1011a6d92<ref_3e84db507f93096c71a7f558eef34e2db3c0cf742ba96943606252d1c6b70203, "A">, public onDirectRefUnionType: ref_f76f137e76be8ad46e74785f3ab1e3cd17e2663d19ff72a7ea1a88aa91e76c9f<"fr">, public array: Array<string>, public pick: ref_44f525da78c861abb26fe0a20ee267d04f36c9d5022efe787ae660eba9807cdf<ref_f25f9e656500232ea42ce0a35ed13fddb1024868828e4da072bdb6c3a447ac6d, "name">, public pickMulti: ref_de596ee5a8a4d0ac429581b9f836197807c4ba6aa18f72cae12fe7982c460ac0<ref_586b7f65a48a91108602e6c7c31830e6925008d28216a6bd8674c21fd456aef9, "ver" | "age">, public omit: ref_f50bcf32253f9d312c32af089e2e937a7095239c3df73716fc0739ebd6a0874c<ref_5bce9d0c7c8ac65891ec3f7f1af914922a962e03e65a0a919ab5d165de9dfc4e, "name">) { }
}
type ref_519dd72a12d5fa15c85b38dd4bb679f5d19ff03c1f4395cc1366a1a9a11aad3f = {
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
type ref_bcae2ee7a075c1f30f2aa44745e4b5216c5aa82d44aecd36c552578d751b2895 = {
    [key in ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a]: string;
};
type ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a = "en" | "fr" | "it" | "es";
type ref_4b5942163191eb8956a438eb73aa75cdfd4ffc0d20a8d3c6234ae71711055679 = {
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
type ref_ca9d76184132f0f4e2609c797f236d8f3c415e0c2e6907a7f5d7433cbbdda212<T> = {
    [key in ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99]: T;
};
type ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99 = "en" | "fr" | "it" | "es";
type ref_b31e8e1a5f35d9132cbff111048eebbc18b7b7315704a4c63145b3a522e19c0e<T> = T & {};
type ref_f78fc8a81ace43d7ffd78061311a16eb6131d0bc7e3dafd3cb265646adbb80a3 = {
    name: string;
    ver: number;
    age: number;
};
type ref_25ffa72825d31705248ba18bd0983716e96ab7778ef4b0a1f97fef233d885857<T> = {
    [P in keyof T]?: T[P];
};
type ref_4151fd0fc0528d3bbc537ad97292b05a6935555518eeb2cfbaed694eb26ab6b9 = {
    name: string;
    ver: number;
    age: number;
};
type ref_aeff80551d5fd6d24a952adf9a57657b49e76baaa263202aee3a1e99ea8c41d8<T> = {
    [P in keyof T]?: T[P];
};
type ref_a9e0a1b8f690a26f72450ebb804d8c0952a5d92272651db192d75340d6e5757b = {
    name: string;
    ver: number;
    age: number;
};
type ref_078019e8a712c5231b612918ac346ac7442a59ac85f57472616279b1ef14ff59<T> = {
    [P in keyof T]-?: T[P];
};
type ref_3bd778573770d0ad04709d95a1c76477da30558b8cb74a774cb005669ba2fbd2 = {
    name: string;
    ver: number;
    age: number;
};
type ref_bf90c4882b1d5b6ea58a25091582e57f9e5ba558138ce299bfe6eecb2999fe29<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_7f7355dfa524a8c2e5c6e28f004de9b040420da4a41c1fadd6d408a849de4f70<T, U> = T extends U ? T : never;
type ref_9747a735f1cdb554a065411cebf8c3d6b144b0674b9c1f65bece2bb8ee22e6ed = "en" | "fr" | "it" | "es";
type ref_53a7c8b223909a9ba3b3ae0ee88f90d116a3e5e45c969652a1abb64d2ab103da<T, U> = T extends U ? T : never;
type ref_3e84db507f93096c71a7f558eef34e2db3c0cf742ba96943606252d1c6b70203 = "A" | "B" | "C" | "D" | "E";
type ref_1e3071634a814c25a8f558e6a3acd28cda99b3afe8309897afefa8f1011a6d92<T, U> = T extends U ? never : T;
type ref_f76f137e76be8ad46e74785f3ab1e3cd17e2663d19ff72a7ea1a88aa91e76c9f<T> = T extends ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 ? T : never;
type ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 = "en" | "fr" | "it" | "es";
type ref_f25f9e656500232ea42ce0a35ed13fddb1024868828e4da072bdb6c3a447ac6d = {
    name: string;
    ver: number;
    age: number;
};
type ref_44f525da78c861abb26fe0a20ee267d04f36c9d5022efe787ae660eba9807cdf<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_586b7f65a48a91108602e6c7c31830e6925008d28216a6bd8674c21fd456aef9 = {
    name: string;
    ver: number;
    age: number;
};
type ref_de596ee5a8a4d0ac429581b9f836197807c4ba6aa18f72cae12fe7982c460ac0<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_5bce9d0c7c8ac65891ec3f7f1af914922a962e03e65a0a919ab5d165de9dfc4e = {
    name: string;
    ver: number;
    age: number;
};
type ref_f50bcf32253f9d312c32af089e2e937a7095239c3df73716fc0739ebd6a0874c<T, K extends keyof any> = ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<keyof T, K>>;
type ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<T, U> = T extends U ? never : T;
type ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, K extends keyof T> = {
    [P in K]: T[P];
};