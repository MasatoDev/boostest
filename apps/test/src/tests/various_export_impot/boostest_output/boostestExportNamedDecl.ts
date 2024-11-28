export function boostestExportNamedDecl<T>(args?: Partial<T>): T {
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
		func: {},
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
type main_output_target = { name: string; age: number; sex: 1 | 2; short_name: "john" | "doe"; favorite: { name: "Calbee Lightly Salted"; price: 120 } | { name: "Koikeya Pride Potato"; price: 150 }; mostFav: { name: "Pringles Sour Cream & Onion 😀"; price: 200 }; func: {  }; undefinedKey: undefined; anyKey: any; nullKey: null; optionalKey: string; unknownKey: unknown; thisKey: {  }; conditionalKey: { name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔"; price: 250 }; objectKey: object; voidKey: void; indexedKey: string; intersectionKey: { name: "Lay's Classic"; price: 130 } & { taste: string }; arrayKey: Array<ref_ffda39d8d0156c4cbca7afddee36d833f8ab6b66c787b82f81729853696baed3> }; // Extracted from typeAlias

type main = ref_a0f4f6fd526357c589ff2427c6fea7beabdabe2aa1e48d68ed57467c48a39fe5;
type ref_a0f4f6fd526357c589ff2427c6fea7beabdabe2aa1e48d68ed57467c48a39fe5 = {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_d5cd108983cf55fc9ca540a835fb91e72a327c0d93ba9ca43d33c3e4addc5a9a | ref_038a967bacbe3e30fcf2b12e244ffbcf4c95a46895fde37d43a71be09798c33a;
    mostFav: ref_285cf5d606ea983405dab3f09aaa8361d5b5d5789913d1dba399c0cc84624fbc;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_03d9f60541618005cf4f7ce852c272aca0b3bd414e0b7acca22c3be9abf77ed2<ref_67ac8e958034d1d02d24862fb5846e486e0f2127c723680c23ecb0944906214f>;
    conditionalKey: ref_edbde49ef94b035f420f45eb3025cd2bee3ef3bc1fb0bb20a56c1691aebd06c1 extends ref_7248f313f1211901fa88854f74a8d122323830d09dae0c2ad477f538bfed7664 ? ref_d77d9b757c815bc232c9fd4a1d37add179c43bd11f03bf553dcba9d0f91d90d4 : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_884ba6b52ee0a87814a1cfe3f6974dd7e3a45e4f43c50bdca27fcd7c18f5f991["name"];
    intersectionKey: ref_37a1b6526b2722ac05a0cd415de26ccd63bbf2ad1f614d6efc7e86233e85c6e8 & {
        taste: string;
    };
    arrayKey: Array<ref_ffda39d8d0156c4cbca7afddee36d833f8ab6b66c787b82f81729853696baed3>;
};
interface ref_d5cd108983cf55fc9ca540a835fb91e72a327c0d93ba9ca43d33c3e4addc5a9a extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_038a967bacbe3e30fcf2b12e244ffbcf4c95a46895fde37d43a71be09798c33a extends ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: string;
    price: number;
}
interface ref_285cf5d606ea983405dab3f09aaa8361d5b5d5789913d1dba399c0cc84624fbc extends ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: string;
    price: number;
}
interface ref_67ac8e958034d1d02d24862fb5846e486e0f2127c723680c23ecb0944906214f extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_03d9f60541618005cf4f7ce852c272aca0b3bd414e0b7acca22c3be9abf77ed2<T> {
}
interface ref_edbde49ef94b035f420f45eb3025cd2bee3ef3bc1fb0bb20a56c1691aebd06c1 extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_7248f313f1211901fa88854f74a8d122323830d09dae0c2ad477f538bfed7664 {
    name: string;
    price: number;
}
interface ref_d77d9b757c815bc232c9fd4a1d37add179c43bd11f03bf553dcba9d0f91d90d4 extends ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}
interface ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: string;
    price: number;
}
interface ref_884ba6b52ee0a87814a1cfe3f6974dd7e3a45e4f43c50bdca27fcd7c18f5f991 {
    name: string;
    price: number;
}
interface ref_37a1b6526b2722ac05a0cd415de26ccd63bbf2ad1f614d6efc7e86233e85c6e8 extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_ffda39d8d0156c4cbca7afddee36d833f8ab6b66c787b82f81729853696baed3 {
    name: string;
    price: number;
}