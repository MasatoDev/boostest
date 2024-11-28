export function boostestArgObjClass2<T>(isArray = false) {
	return new ref_ff44cc1de56bf613295ac198147befec5a1f993f4159e559a556e666f9e3ce0e({
		name: "test string data",
		age: 10
	}, {
		obj_key: {
			obj_name: "test string data",
			obj_val: 10
		},
		obj_key2: {
			obj_name: "test string data",
			obj_val: 10
		}
	});
}
type main_output_target = ["classReference", ref_ff44cc1de56bf613295ac198147befec5a1f993f4159e559a556e666f9e3ce0e, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_ff44cc1de56bf613295ac198147befec5a1f993f4159e559a556e666f9e3ce0e;
class ref_ff44cc1de56bf613295ac198147befec5a1f993f4159e559a556e666f9e3ce0e {
    name: string;
    age: number;
    obj_key: ref_5462d8299ef31c95ce1993c05d61a341c9279a6e38c96a46b932484d2dfdbc61;
    obj_key2: ref_e6ebfc75ba5a3e8e4fd64dc43c42847f439e8ea01530f9df74b1f7025b010d5b;
    constructor(hoge: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_6dcf08b44951ca5e7ce2410d2ca1d53e5c3be7ebbdfe427316dab8905e1b7ffc;
        obj_key2: ref_98dd52bb849e45812401e32052149723c8f7d8aeff413845c0f4ea0bd85c3fac;
    }) {
        this.name = hoge.name;
        this.age = hoge.age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_5462d8299ef31c95ce1993c05d61a341c9279a6e38c96a46b932484d2dfdbc61 = {
    obj_name: string;
    obj_val: number;
};
type ref_e6ebfc75ba5a3e8e4fd64dc43c42847f439e8ea01530f9df74b1f7025b010d5b = {
    obj_name: string;
    obj_val: number;
};
type ref_6dcf08b44951ca5e7ce2410d2ca1d53e5c3be7ebbdfe427316dab8905e1b7ffc = {
    obj_name: string;
    obj_val: number;
};
type ref_98dd52bb849e45812401e32052149723c8f7d8aeff413845c0f4ea0bd85c3fac = {
    obj_name: string;
    obj_val: number;
};