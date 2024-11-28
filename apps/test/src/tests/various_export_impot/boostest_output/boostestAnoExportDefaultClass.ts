export function boostestAnoExportDefaultClass<T>(isArray = false) {
	return new ref_14e478215b56dd6597f3a29e11b812e4cecfb68acd0a0cdbe555e67a24390b6b("test string data", {
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
		arrayKey: []
	});
}
type main_output_target = ["classReference", ref_14e478215b56dd6597f3a29e11b812e4cecfb68acd0a0cdbe555e67a24390b6b, [
  string,
  { name: string; age: number; sex: 1 | 2; short_name: "john" | "doe"; favorite: { name: "Calbee Lightly Salted"; price: 120 } | { name: "Koikeya Pride Potato"; price: 150 }; mostFav: { name: "Pringles Sour Cream & Onion 😀"; price: 200 }; func: {  }; undefinedKey: undefined; anyKey: any; nullKey: null; optionalKey: string; unknownKey: unknown; thisKey: {  }; conditionalKey: { name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔"; price: 250 }; objectKey: object; voidKey: void; indexedKey: string; intersectionKey: { name: "Lay's Classic"; price: 130 } & { taste: string }; arrayKey: Array<ref_d0e0b50e67f90f23aa09ea002ded975a35d19e554975e0ab57bc3c9dd06f7f5d> }
]]; // Extracted from typeAlias

type main = ref_14e478215b56dd6597f3a29e11b812e4cecfb68acd0a0cdbe555e67a24390b6b;
class ref_14e478215b56dd6597f3a29e11b812e4cecfb68acd0a0cdbe555e67a24390b6b {
    name: string;
    chips: ref_63b05f5a4435eb3731f44feb34eb80b97673a40f853b284e4993078b8deacae5;
    constructor(name: string, chips: ref_02ea464fa0f914f5883ad6827fc2053c503f3434c9ab0c4a846adb1d2b872f03) {
        this.name = name;
        this.chips = chips;
    }
}
interface ref_63b05f5a4435eb3731f44feb34eb80b97673a40f853b284e4993078b8deacae5 {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_32711620aed78c75881e2236efdff59f9e49d46e7e73de06775662be5168351c | ref_f423c2e189dda775a9086d7101e11f0d603118db61f09caa648b863c3c4243de;
    mostFav: ref_83bb3ad7063b2bda0aa31b716a5df3324cbc7eeea708ee77d50bbaa8b82fd0d7;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_3420ac96fb2523568f9090a4d3e62210e7955ededa9080b23d4f0f907d65fd6b<ref_cbfe55e28410efd9d3c8e3bb0616ad7aaa1e3b1bc33a680a3851de314a257793>;
    conditionalKey: ref_df92cee771fe0b498933553989d941d1e05e67ae402209cb2d061f608fb27e52 extends ref_bc7b1e155e1682173a0b327c38a85e282c33bad7bcc459a3b471037a19329e74 ? ref_db6104076e7d337d4971b0983c040d322998c70c5e7e5161d159f1bf56f71813 : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_53c293023364fb947997a8ec7cef66c386e54f6f6a753c950c66e83bb5470f19["name"];
    intersectionKey: ref_eb1a08e1a55fdfab4f1526c01d138a963787c4edaf7587c427749242c95053ba & {
        taste: string;
    };
    arrayKey: Array<ref_d0e0b50e67f90f23aa09ea002ded975a35d19e554975e0ab57bc3c9dd06f7f5d>;
}
interface ref_32711620aed78c75881e2236efdff59f9e49d46e7e73de06775662be5168351c extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_f423c2e189dda775a9086d7101e11f0d603118db61f09caa648b863c3c4243de extends ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: string;
    price: number;
}
interface ref_83bb3ad7063b2bda0aa31b716a5df3324cbc7eeea708ee77d50bbaa8b82fd0d7 extends ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: string;
    price: number;
}
interface ref_cbfe55e28410efd9d3c8e3bb0616ad7aaa1e3b1bc33a680a3851de314a257793 extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_3420ac96fb2523568f9090a4d3e62210e7955ededa9080b23d4f0f907d65fd6b<T> {
}
interface ref_df92cee771fe0b498933553989d941d1e05e67ae402209cb2d061f608fb27e52 extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_bc7b1e155e1682173a0b327c38a85e282c33bad7bcc459a3b471037a19329e74 {
    name: string;
    price: number;
}
interface ref_db6104076e7d337d4971b0983c040d322998c70c5e7e5161d159f1bf56f71813 extends ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}
interface ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: string;
    price: number;
}
interface ref_53c293023364fb947997a8ec7cef66c386e54f6f6a753c950c66e83bb5470f19 {
    name: string;
    price: number;
}
interface ref_eb1a08e1a55fdfab4f1526c01d138a963787c4edaf7587c427749242c95053ba extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_d0e0b50e67f90f23aa09ea002ded975a35d19e554975e0ab57bc3c9dd06f7f5d {
    name: string;
    price: number;
}
interface ref_02ea464fa0f914f5883ad6827fc2053c503f3434c9ab0c4a846adb1d2b872f03 {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_32711620aed78c75881e2236efdff59f9e49d46e7e73de06775662be5168351c | ref_f423c2e189dda775a9086d7101e11f0d603118db61f09caa648b863c3c4243de;
    mostFav: ref_83bb3ad7063b2bda0aa31b716a5df3324cbc7eeea708ee77d50bbaa8b82fd0d7;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_3420ac96fb2523568f9090a4d3e62210e7955ededa9080b23d4f0f907d65fd6b<ref_cbfe55e28410efd9d3c8e3bb0616ad7aaa1e3b1bc33a680a3851de314a257793>;
    conditionalKey: ref_df92cee771fe0b498933553989d941d1e05e67ae402209cb2d061f608fb27e52 extends ref_bc7b1e155e1682173a0b327c38a85e282c33bad7bcc459a3b471037a19329e74 ? ref_db6104076e7d337d4971b0983c040d322998c70c5e7e5161d159f1bf56f71813 : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_53c293023364fb947997a8ec7cef66c386e54f6f6a753c950c66e83bb5470f19["name"];
    intersectionKey: ref_eb1a08e1a55fdfab4f1526c01d138a963787c4edaf7587c427749242c95053ba & {
        taste: string;
    };
    arrayKey: Array<ref_d0e0b50e67f90f23aa09ea002ded975a35d19e554975e0ab57bc3c9dd06f7f5d>;
}
interface ref_32711620aed78c75881e2236efdff59f9e49d46e7e73de06775662be5168351c extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_f423c2e189dda775a9086d7101e11f0d603118db61f09caa648b863c3c4243de extends ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_07049923c2115335864f127eb4636c428c271743b0c876ef8bf5e966045172ee {
    name: string;
    price: number;
}
interface ref_83bb3ad7063b2bda0aa31b716a5df3324cbc7eeea708ee77d50bbaa8b82fd0d7 extends ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_45f34e1dbc3e1f40d9b6c0cbe3e0a30871b9dd5ef4039232eb80aa29a1cda91c {
    name: string;
    price: number;
}
interface ref_cbfe55e28410efd9d3c8e3bb0616ad7aaa1e3b1bc33a680a3851de314a257793 extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_3420ac96fb2523568f9090a4d3e62210e7955ededa9080b23d4f0f907d65fd6b<T> {
}
interface ref_df92cee771fe0b498933553989d941d1e05e67ae402209cb2d061f608fb27e52 extends ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_64b0ea34323335e077fb625032eff258ef732157e83cdd043193d9593c6370b2 {
    name: string;
    price: number;
}
interface ref_bc7b1e155e1682173a0b327c38a85e282c33bad7bcc459a3b471037a19329e74 {
    name: string;
    price: number;
}
interface ref_db6104076e7d337d4971b0983c040d322998c70c5e7e5161d159f1bf56f71813 extends ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}
interface ref_4ec30f4735376d209955b44562c144733ce92a914c28092fcc8ddc13b6cde661 {
    name: string;
    price: number;
}
interface ref_53c293023364fb947997a8ec7cef66c386e54f6f6a753c950c66e83bb5470f19 {
    name: string;
    price: number;
}
interface ref_eb1a08e1a55fdfab4f1526c01d138a963787c4edaf7587c427749242c95053ba extends ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: "Lay's Classic";
    price: 130;
}
interface ref_0daf41b34fbf8372cc7593fb4d39b572823cde796777459063ffd58b1ff64d19 {
    name: string;
    price: number;
}
interface ref_d0e0b50e67f90f23aa09ea002ded975a35d19e554975e0ab57bc3c9dd06f7f5d {
    name: string;
    price: number;
}