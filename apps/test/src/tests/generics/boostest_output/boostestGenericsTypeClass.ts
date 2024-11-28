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
    constructor(public innserGenericInitializer: ref_8cacf37f19175fa855ddcc67718a53cdb8b34d2eacc5427a60f2bb356f0f4c1a, public mapperType: ref_f6e7de78741a608a46cc83553fb69bda4901a47643c8a9242ed58568f2125282, public keyOfMapperType: ref_59d92bc0db521491df3366549908719bc78e315f72806338a72a4950c263ce73, public butterflyWithGenerics: ref_d44e12820ae59d664491bcfbd30512cae801579cb58d268fc5c96aa9d06ab35c<string>, public nonNullable: ref_8a0b9019712e0c490ffe37bdca990517b4f7913fe1eaa830eaedeee4711d4ef8<undefined | string | null>, public nestedPartial: {
        childPartial: ref_b0b06182a0be9f3c33c13e5d50c40d91b4f4b32fa0873b749b90317dfc1e942d<ref_69e404425de5a04385dd4a7dbe5120816d75da9db569b7c8ecf67ec04d4f5973>;
    }, public partial: ref_fedfff1569a3df1cd1c519b51dfe1fa2df1f6882eb6e7216436ab6cf94b631aa<ref_971245e99b9fbd302f7f5f9b6e8b6467a5a956c037b30b64cfc07f671ad335ba>, public required: ref_aa58adf3de176360ff62ca7868cb5f08b8718fad9cd8d3a4316555800fafaa4c<ref_e045ef372cbab2035c685e71b9ee53fc79838c616b3d94a796a91eb8a60db800>, public readonly: ref_465c51e4068c5854d46d3654323fe25a7ac40ac72bf6e389802715b5bb205f0c<ref_cca74ad5cb1dc5bf0f2715f35b00692465a626b59bc892d2f93b2677c7736bee>, public extract: ref_ef6966aba408ca7e10e696222d42d0c5ecd525650ae56281bcf8b9ebcd1910f2<"A" | "B" | "C" | "D" | "E", "D" | "E">, public extractRefUnion: ref_745c75c4e9ba8ba2740463d0b309ff5f5b12c6714f8ee855903edb5554d9040b<ref_8a22f45f805cc61f22b373000b3e04105a17e7fb70905059f73db41c2ce65e1d, "en" | "fr">, public exclude: ref_898581d4ca527920e77eb204a6e6e8cbe7a5a4f5a286476c773c8b37fd45f816<ref_ba5a0338aaf2d3858db567dfcf4524778ba917b040c8ac6963839800b92c5e27, "A">, public onDirectRefUnionType: ref_56c1fb1c19ecf5be4fdfeee40d10a2fa5f3b94f1464553f1d7f2cccb7f736bf6<"fr">, public array: Array<string>, public pick: ref_1285896249773b33cf8af1d508772ab5da1a698e007cc6076fbbe2eee1744c30<ref_1b63348c156db5b13b4f2d519053b7e18f16563d5ee0796fe825097bed05309c, "name">, public pickMulti: ref_26b8be140cab5b78abc0269b4c4b76085582f3ada5c34f431cf6e25ad85c809d<ref_f90e03a7224414f5a951e970b9f465c3b8769ccb7a34125572e95ab783cc066b, "ver" | "age">, public omit: ref_06362e4c30391a3e82fc1cf6bef50229d542a66fd3a1eab9d8f7e60cb0bc3f5e<ref_0dd130390ce4487b635772d1474643b9d1f074ee6b4e67ce6dd0fd9be280a82b, "name">) { }
}
type ref_8cacf37f19175fa855ddcc67718a53cdb8b34d2eacc5427a60f2bb356f0f4c1a = {
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
type ref_f6e7de78741a608a46cc83553fb69bda4901a47643c8a9242ed58568f2125282 = {
    [key in ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a]: string;
};
type ref_9c8bb9dd854b8c851d3410bd96b859f8cec7df47270766ea5019f9a016abdf7a = "en" | "fr" | "it" | "es";
type ref_59d92bc0db521491df3366549908719bc78e315f72806338a72a4950c263ce73 = {
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
type ref_d44e12820ae59d664491bcfbd30512cae801579cb58d268fc5c96aa9d06ab35c<T> = {
    [key in ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99]: T;
};
type ref_aae118e421216da0d03d029f4ae07a470868c3df9763799ebbda829fa872cd99 = "en" | "fr" | "it" | "es";
type ref_8a0b9019712e0c490ffe37bdca990517b4f7913fe1eaa830eaedeee4711d4ef8<T> = T & {};
type ref_69e404425de5a04385dd4a7dbe5120816d75da9db569b7c8ecf67ec04d4f5973 = {
    name: string;
    ver: number;
    age: number;
};
type ref_b0b06182a0be9f3c33c13e5d50c40d91b4f4b32fa0873b749b90317dfc1e942d<T> = {
    [P in keyof T]?: T[P];
};
type ref_971245e99b9fbd302f7f5f9b6e8b6467a5a956c037b30b64cfc07f671ad335ba = {
    name: string;
    ver: number;
    age: number;
};
type ref_fedfff1569a3df1cd1c519b51dfe1fa2df1f6882eb6e7216436ab6cf94b631aa<T> = {
    [P in keyof T]?: T[P];
};
type ref_e045ef372cbab2035c685e71b9ee53fc79838c616b3d94a796a91eb8a60db800 = {
    name: string;
    ver: number;
    age: number;
};
type ref_aa58adf3de176360ff62ca7868cb5f08b8718fad9cd8d3a4316555800fafaa4c<T> = {
    [P in keyof T]-?: T[P];
};
type ref_cca74ad5cb1dc5bf0f2715f35b00692465a626b59bc892d2f93b2677c7736bee = {
    name: string;
    ver: number;
    age: number;
};
type ref_465c51e4068c5854d46d3654323fe25a7ac40ac72bf6e389802715b5bb205f0c<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_ef6966aba408ca7e10e696222d42d0c5ecd525650ae56281bcf8b9ebcd1910f2<T, U> = T extends U ? T : never;
type ref_8a22f45f805cc61f22b373000b3e04105a17e7fb70905059f73db41c2ce65e1d = "en" | "fr" | "it" | "es";
type ref_745c75c4e9ba8ba2740463d0b309ff5f5b12c6714f8ee855903edb5554d9040b<T, U> = T extends U ? T : never;
type ref_ba5a0338aaf2d3858db567dfcf4524778ba917b040c8ac6963839800b92c5e27 = "A" | "B" | "C" | "D" | "E";
type ref_898581d4ca527920e77eb204a6e6e8cbe7a5a4f5a286476c773c8b37fd45f816<T, U> = T extends U ? never : T;
type ref_56c1fb1c19ecf5be4fdfeee40d10a2fa5f3b94f1464553f1d7f2cccb7f736bf6<T> = T extends ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 ? T : never;
type ref_64bc139c4a0b05344fcf60daf030e8088b61e54617fc3c388e069f598d62cf21 = "en" | "fr" | "it" | "es";
type ref_1b63348c156db5b13b4f2d519053b7e18f16563d5ee0796fe825097bed05309c = {
    name: string;
    ver: number;
    age: number;
};
type ref_1285896249773b33cf8af1d508772ab5da1a698e007cc6076fbbe2eee1744c30<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_f90e03a7224414f5a951e970b9f465c3b8769ccb7a34125572e95ab783cc066b = {
    name: string;
    ver: number;
    age: number;
};
type ref_26b8be140cab5b78abc0269b4c4b76085582f3ada5c34f431cf6e25ad85c809d<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_0dd130390ce4487b635772d1474643b9d1f074ee6b4e67ce6dd0fd9be280a82b = {
    name: string;
    ver: number;
    age: number;
};
type ref_06362e4c30391a3e82fc1cf6bef50229d542a66fd3a1eab9d8f7e60cb0bc3f5e<T, K extends keyof any> = ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<keyof T, K>>;
type ref_e861285f8b71e335ee9b452a09c86d70d92fae1e147e7351336229652c68be1e<T, U> = T extends U ? never : T;
type ref_e2e1437a65b657694b1bd10c46009ab310a86a758b99b97dcea11eec3b7f012a<T, K extends keyof T> = {
    [P in K]: T[P];
};