export function boostestRenamedNestedPropClass<T>(isArray = false) {
	return ref_d89d93d9a7e529530d1db4f1989467a008561b222d8427c446fd89f17ce55da0;
}
type main_output_target = ["classTypeofReference", ref_d89d93d9a7e529530d1db4f1989467a008561b222d8427c446fd89f17ce55da0]; // Extracted from typeAlias

type main = typeof ref_d89d93d9a7e529530d1db4f1989467a008561b222d8427c446fd89f17ce55da0;
class ref_d89d93d9a7e529530d1db4f1989467a008561b222d8427c446fd89f17ce55da0 {
    anoChips: ref_0de49e12c0950e4fd23b61ce33ce089603710a35718a275d2745a8c11bcaba66;
    constructor(huga: {
        anoChips: ref_1c350b7d9c0c135fb8c6caa12c2bfa902160ceae0edc55888c23e0f588bd6474;
    }) {
        this.anoChips = huga.anoChips;
    }
}
interface ref_1c350b7d9c0c135fb8c6caa12c2bfa902160ceae0edc55888c23e0f588bd6474 {
    name: string;
    age: number;
    sex: 1 | 2;
    short_name: "john" | "doe";
    favorite: ref_9c1e53dc5e20932fe9e22ae03a1dfb181fe3aedc83da1309307017e30564a2f3 | ref_0393b06c8f52a2583e5759de8974722e3a57013b5f5a16aede1fb8dedc6afb16;
    mostFav: ref_218f728c9938517f4ba6b5cc141b3ff7b5b023f781eef71255642dbf4d5e4c48;
    func: () => void;
    undefinedKey: undefined;
    anyKey: any;
    nullKey: null;
    optionalKey?: string;
    unknownKey: unknown;
    thisKey: ref_70b50ec2711015bd483ea4e0005ddce2ca84212c3482520207deb71ac0242dd1<ref_dc41433ae3f100e0a4b50bdb63bdcb1cd33c4f9db14753c57afed70bd0271a54>;
    conditionalKey: ref_63827ea9312989e66c045a44cfc440e01af46ba81c4ddb949f94ad42b842cc9a extends ref_baf08a67ed8f4718ad16d563b22471d5802d782336055c7b7d8835aa24931439 ? ref_edc74e0e18eb48fbb7a1ac3f6a4ec6d6efa23cb288621757b8964e61491075a9 : false;
    objectKey: object;
    voidKey: void;
    indexedKey: ref_1e2f80d178bfacae902fc7dd6503a36536379874af59bf7e14f06972234f6f1e["name"];
    intersectionKey: ref_a3b7c9446eb0f0d5dac38dfdd14f3e0c096977bcaef8013eed8d7405abda2c97 & ref_e11cf3e45d9078a353e8c523f90508866b70fc0c96462ea302fb4569752d876e;
    arrayKey: ref_d7a28ec11dd88e91460859dd5da010434d8a35fb6760880dc25039bb26fc2374[];
}
interface ref_9c1e53dc5e20932fe9e22ae03a1dfb181fe3aedc83da1309307017e30564a2f3 extends PotatoChip {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_0393b06c8f52a2583e5759de8974722e3a57013b5f5a16aede1fb8dedc6afb16 extends PotatoChip {
    name: "Koikeya Pride Potato";
    price: 150;
}
interface ref_218f728c9938517f4ba6b5cc141b3ff7b5b023f781eef71255642dbf4d5e4c48 extends PotatoChip {
    name: "Pringles Sour Cream & Onion 😀";
    price: 200;
}
interface ref_dc41433ae3f100e0a4b50bdb63bdcb1cd33c4f9db14753c57afed70bd0271a54 extends PotatoChip {
    name: "Lay's Classic";
    price: 130;
}
interface ref_70b50ec2711015bd483ea4e0005ddce2ca84212c3482520207deb71ac0242dd1<T> {
}
interface ref_63827ea9312989e66c045a44cfc440e01af46ba81c4ddb949f94ad42b842cc9a extends PotatoChip {
    name: "Calbee Lightly Salted";
    price: 120;
}
interface ref_baf08a67ed8f4718ad16d563b22471d5802d782336055c7b7d8835aa24931439 {
    name: string;
    price: number;
}
interface ref_edc74e0e18eb48fbb7a1ac3f6a4ec6d6efa23cb288621757b8964e61491075a9 extends PotatoChip {
    name: "Kettle Brand Sea Salt & Vinegar 日本語が入るとどう？🤔";
    price: 250;
}
interface ref_1e2f80d178bfacae902fc7dd6503a36536379874af59bf7e14f06972234f6f1e {
    name: string;
    price: number;
}
interface ref_a3b7c9446eb0f0d5dac38dfdd14f3e0c096977bcaef8013eed8d7405abda2c97 extends PotatoChip {
    name: "Lay's Classic";
    price: 130;
}
interface ref_e11cf3e45d9078a353e8c523f90508866b70fc0c96462ea302fb4569752d876e extends PotatoChip {
    name: "Koikeya Pride Potato";
    price: 150;
}