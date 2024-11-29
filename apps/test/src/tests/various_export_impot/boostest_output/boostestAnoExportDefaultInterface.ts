export function boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return {
		name: "test string data",
		chips: {
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
			arrayKey: []
		},
		...args
	} as T;
}
type main_output_target = { name: string; chips: { name: string; age: number; sex: 1 | 2; short_name: "john" | "doe"; favorite: { name: "Calbee Lightly Salted"; price: 120 } | { name: "Koikeya Pride Potato"; price: 150 }; mostFav: { name: "Pringles Sour Cream & Onion 😀"; price: 200 }; func: () => void; undefinedKey: undefined; anyKey: any; nullKey: null; optionalKey: string; unknownKey: unknown; thisKey: {  }; conditionalKey: { name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔"; price: 250 }; objectKey: object; voidKey: void; indexedKey: string; intersectionKey: { name: "Lay's Classic"; price: 130 } & { taste: string }; arrayKey: Array<ref_d2d49aa065e5b7fb97c342a53572950db7a8ad111f83287e037e9fba9b6ed39f> } }; // Extracted from typeAlias

type main = ref_0c1640746005313642f5b1afeb1404d68d88856f0e022b277a3586e14aa22509;
interface ref_0c1640746005313642f5b1afeb1404d68d88856f0e022b277a3586e14aa22509 {
    name: string;
    chips: ref_a18dfad78b1a0caca176874364c8b707112d8c2ca7125b439c0b96795c37cfe4;
}
interface ref_a18dfad78b1a0caca176874364c8b707112d8c2ca7125b439c0b96795c37cfe4 {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_bdb6339a1ba6a62226bf6f42ef7fc99f466e1619773040d917deae998c492666 | ref_e0d0973b532ef31e9244a3c03ca7d009834937e796e1e9ed4056692c542d643e;
    mostFav: ref_b4f65beb2d4ec7ab762024435f09c6ab20ac5a068a661623964a9da74f48fa1a;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_ae0af25eee1a127435bd963a873390d52567ab3653576ae33c7e570465feb4c4<ref_791500038cbc9c112d836bea8da144036e12d98f35e05432556e04cb4946897b>;
    conditionalKey: ref_bdb6339a1ba6a62226bf6f42ef7fc99f466e1619773040d917deae998c492666 extends ref_d2d49aa065e5b7fb97c342a53572950db7a8ad111f83287e037e9fba9b6ed39f ? ref_b445b1ce76df33bfc9d1daa66f5180f8c2bb9d2ac56e20945d386fa13386f392 : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_d2d49aa065e5b7fb97c342a53572950db7a8ad111f83287e037e9fba9b6ed39f["name"];
    intersectionKey: ref_791500038cbc9c112d836bea8da144036e12d98f35e05432556e04cb4946897b & {
        taste: string;
    };
    arrayKey: Array<ref_d2d49aa065e5b7fb97c342a53572950db7a8ad111f83287e037e9fba9b6ed39f>;
}
interface ref_bdb6339a1ba6a62226bf6f42ef7fc99f466e1619773040d917deae998c492666 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_e0d0973b532ef31e9244a3c03ca7d009834937e796e1e9ed4056692c542d643e {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_b4f65beb2d4ec7ab762024435f09c6ab20ac5a068a661623964a9da74f48fa1a {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_791500038cbc9c112d836bea8da144036e12d98f35e05432556e04cb4946897b {
    name: "Lay's Classic";
    price: 130;
}
interface ref_ae0af25eee1a127435bd963a873390d52567ab3653576ae33c7e570465feb4c4<T> {
}
interface ref_d2d49aa065e5b7fb97c342a53572950db7a8ad111f83287e037e9fba9b6ed39f {
    name: string;
    price: number;
}
interface ref_b445b1ce76df33bfc9d1daa66f5180f8c2bb9d2ac56e20945d386fa13386f392 {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}