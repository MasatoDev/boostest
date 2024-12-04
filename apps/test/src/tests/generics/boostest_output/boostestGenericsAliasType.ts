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

type main = ref_444b8d5dc5b0ce334ae8808c0dedd54fecac62598395d1a813774c6a720bec86;
type ref_444b8d5dc5b0ce334ae8808c0dedd54fecac62598395d1a813774c6a720bec86 = {
    mapperType: ref_e189c2ebdeeed447174ba35dcafbef0bad34be5487fc19edec8cc590db621f52;
    keyOfMapperType: ref_8691d012e0a239ac0045869118b45b5709ea0dadbecd073f49f12ddf807c9639;
    innserGenericInitializer: ref_f0e742c5fb1cb839e54d1d4fc22e384c86732233491f1011bfe18c39e5c8b20c;
    butterflyWithGenerics: ref_842b3faec7623be04d1ee8e981f59626b1b5e73ad87257b181ea995f89b9f9de<string>;
    nonNullable: ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<undefined | string | null>;
    nestedPartial: {
        childPartial: ref_18e7415508ed0889bb8741f71e6d74162fc6a3837513cf5562871af94f5df0e0<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
    };
    partial: ref_18e7415508ed0889bb8741f71e6d74162fc6a3837513cf5562871af94f5df0e0<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
    required: ref_be2d25f05632b4a609181dd7c91054661a43cf74b64df0e6fc6aaed1ec392a87<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
    readonly: ref_38996b248ca6e532217800bd6b7d70cb0c8df3d507635c8f6a48de91ed2d03d7<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
    extract: ref_d017e0103eed99c21c687c61929c6feb29b0f1d05cf8c0e1addc45ec67a47261<"A" | "B" | "C" | "D" | "E", "D" | "E">;
    extractRefUnion: ref_d017e0103eed99c21c687c61929c6feb29b0f1d05cf8c0e1addc45ec67a47261<ref_d11edeb34e05b3e4600a689d5e5b687f3ec2f64c4b077499936eecb662187b86, "en" | "fr">;
    exclude: ref_247e54ef48f53d3093dce8ec9d2ac9a69e1b224f332804bf91353c8d5f0cc48c<ref_aeb64cc99f4bd3e059bd88468ef2a548467269cd2e2d5ab5cd1303b947d4f278, "A">;
    onDirectRefUnionType: ref_4e17212c5723cda18d6ec23c69e78690b41cf14d34cc8b657afc096d7ee7de21<"fr">;
    array: Array<string>;
    pick: ref_f5b07b26324580258d3c871e4aa5baba698e8d94a09b2f15209fe15976cb4f9e<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa, "name">;
    pickMulti: ref_f5b07b26324580258d3c871e4aa5baba698e8d94a09b2f15209fe15976cb4f9e<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa, "ver" | "age">;
    omit: ref_b77f55d6217e3bf6f91da40f1f560b9852ba78d026b8717e96bf03424b1a8079<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa, "name">;
};
type ref_e189c2ebdeeed447174ba35dcafbef0bad34be5487fc19edec8cc590db621f52 = {
    [key in ref_d11edeb34e05b3e4600a689d5e5b687f3ec2f64c4b077499936eecb662187b86]: string;
};
type ref_d11edeb34e05b3e4600a689d5e5b687f3ec2f64c4b077499936eecb662187b86 = "en" | "fr" | "it" | "es";
type ref_8691d012e0a239ac0045869118b45b5709ea0dadbecd073f49f12ddf807c9639 = {
    [key in keyof ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa]: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa[key];
};
type ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa = {
    name: string;
    ver: number;
    age: number;
};
type ref_f0e742c5fb1cb839e54d1d4fc22e384c86732233491f1011bfe18c39e5c8b20c = {
    name: string;
    innerGeneric: ref_51188c6b4f6c5fec901a3fb2f8ba8195743f696b54b3eaf8dc2aae0a2d0eb60d<ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa>;
    innerGenericLiteral: ref_51188c6b4f6c5fec901a3fb2f8ba8195743f696b54b3eaf8dc2aae0a2d0eb60d<"inner generic string">;
};
type ref_51188c6b4f6c5fec901a3fb2f8ba8195743f696b54b3eaf8dc2aae0a2d0eb60d<T> = T;
type ref_842b3faec7623be04d1ee8e981f59626b1b5e73ad87257b181ea995f89b9f9de<T> = {
    [key in ref_d11edeb34e05b3e4600a689d5e5b687f3ec2f64c4b077499936eecb662187b86]: T;
};
type ref_9aee339117f1e88fb44c91e0707303c3608f89a97ec30de422f6a5793cbbe717<T> = T & {};
type ref_18e7415508ed0889bb8741f71e6d74162fc6a3837513cf5562871af94f5df0e0<T> = {
    [P in keyof T]?: T[P];
};
type ref_be2d25f05632b4a609181dd7c91054661a43cf74b64df0e6fc6aaed1ec392a87<T> = {
    [P in keyof T]-?: T[P];
};
type ref_38996b248ca6e532217800bd6b7d70cb0c8df3d507635c8f6a48de91ed2d03d7<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_d017e0103eed99c21c687c61929c6feb29b0f1d05cf8c0e1addc45ec67a47261<T, U> = T extends U ? T : never;
type ref_aeb64cc99f4bd3e059bd88468ef2a548467269cd2e2d5ab5cd1303b947d4f278 = "A" | "B" | "C" | "D" | "E";
type ref_247e54ef48f53d3093dce8ec9d2ac9a69e1b224f332804bf91353c8d5f0cc48c<T, U> = T extends U ? never : T;
type ref_4e17212c5723cda18d6ec23c69e78690b41cf14d34cc8b657afc096d7ee7de21<T> = T extends ref_d11edeb34e05b3e4600a689d5e5b687f3ec2f64c4b077499936eecb662187b86 ? T : never;
type ref_f5b07b26324580258d3c871e4aa5baba698e8d94a09b2f15209fe15976cb4f9e<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_b77f55d6217e3bf6f91da40f1f560b9852ba78d026b8717e96bf03424b1a8079<T, K extends keyof any> = ref_f5b07b26324580258d3c871e4aa5baba698e8d94a09b2f15209fe15976cb4f9e<T, ref_247e54ef48f53d3093dce8ec9d2ac9a69e1b224f332804bf91353c8d5f0cc48c<keyof T, K>>;