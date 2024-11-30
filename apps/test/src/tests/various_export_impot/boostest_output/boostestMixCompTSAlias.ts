export function boostestMixCompTSAlias<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		age: 10,
		sex: 1,
		short_name: "john",
		favorite: {
			name: "Calbee Lightly Salted",
			price: 120
		},
		mostFav: {
			name: "Pringles Sour Cream & Onion 😀",
			price: 200
		},
		func: () => {},
		undefinedKey: undefined,
		anyKey: "any",
		nullKey: null,
		optionalKey: "test string data",
		unknownKey: undefined,
		thisKey: {},
		conditionalKey: {
			name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔",
			price: 250
		},
		objectKey: {},
		voidKey: null,
		indexedKey: "test string data",
		intersectionKey: {
			...{
				name: "Lay's Classic",
				price: 130
			},
			...{ taste: "test string data" }
		},
		arrayKey: [],
		...args
	} as T;
}
type main_output_target = { name: string; age: number; sex: 1 | 2; short_name: "john" | "doe"; favorite: { name: "Calbee Lightly Salted"; price: 120 } | { name: "Koikeya Pride Potato"; price: 150 }; mostFav: { name: "Pringles Sour Cream & Onion 😀"; price: 200 }; func: () => void; undefinedKey: undefined; anyKey: any; nullKey: null; optionalKey: string; unknownKey: unknown; thisKey: {  }; conditionalKey: { name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔"; price: 250 }; objectKey: object; voidKey: void; indexedKey: string; intersectionKey: { name: "Lay's Classic"; price: 130 } & { taste: string }; arrayKey: Array<ref_f7d27b40f10e854274591148aadff891783908cc05b2c5209a8c8540164f2d02> }; // Extracted from typeAlias

type main = ref_5d0df9b0a02e81a1d490b316e05cf9be02b303fdc170c7b137210e03fda3eac4;
type ref_5d0df9b0a02e81a1d490b316e05cf9be02b303fdc170c7b137210e03fda3eac4 = {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_a17a1e3fbb16156e79495c936bd259a1212e8f2c1b2fa98bc2d4d4dcbeabd93a | ref_be0fd053dc4c95ce06e9d245e639e998ffb9874541bed6628bd7f863ce166568;
    mostFav: ref_32404bfd8e5a51fbc1d204bd94c1342f3d2473eeeb07efe73bb66fb23deb5c46;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_d9b5b2cc23e33bfcaf6ca311078cd3e15eb18db7d6b07d1f43f31cada753b4aa<ref_7c62e1cc2eb40f5c7f590512e4c78f3ae47ce6a20ccb07d30b04799641bb898b>;
    conditionalKey: ref_a17a1e3fbb16156e79495c936bd259a1212e8f2c1b2fa98bc2d4d4dcbeabd93a extends ref_f7d27b40f10e854274591148aadff891783908cc05b2c5209a8c8540164f2d02 ? ref_d1c871bd895ed2036271ad57b3dfe20e1ddaf523cddfd41d40c02bf64062730f : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_f7d27b40f10e854274591148aadff891783908cc05b2c5209a8c8540164f2d02["name"];
    intersectionKey: ref_7c62e1cc2eb40f5c7f590512e4c78f3ae47ce6a20ccb07d30b04799641bb898b & {
        taste: string;
    };
    arrayKey: Array<ref_f7d27b40f10e854274591148aadff891783908cc05b2c5209a8c8540164f2d02>;
};
interface ref_a17a1e3fbb16156e79495c936bd259a1212e8f2c1b2fa98bc2d4d4dcbeabd93a {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_be0fd053dc4c95ce06e9d245e639e998ffb9874541bed6628bd7f863ce166568 {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_32404bfd8e5a51fbc1d204bd94c1342f3d2473eeeb07efe73bb66fb23deb5c46 {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_7c62e1cc2eb40f5c7f590512e4c78f3ae47ce6a20ccb07d30b04799641bb898b {
    name: "Lay's Classic";
    price: 130;
}
interface ref_d9b5b2cc23e33bfcaf6ca311078cd3e15eb18db7d6b07d1f43f31cada753b4aa<T> {
}
interface ref_f7d27b40f10e854274591148aadff891783908cc05b2c5209a8c8540164f2d02 {
    name: string;
    price: number;
}
interface ref_d1c871bd895ed2036271ad57b3dfe20e1ddaf523cddfd41d40c02bf64062730f {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}