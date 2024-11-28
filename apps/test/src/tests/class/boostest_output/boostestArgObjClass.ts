export function boostestArgObjClass<T>(isArray = false) {
	return new ref_d2b3456491cbf528b75a57c231e7aaa4201ffabbf013fea4c3a7abbc99f45246({
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
type main_output_target = ["classReference", ref_d2b3456491cbf528b75a57c231e7aaa4201ffabbf013fea4c3a7abbc99f45246, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_d2b3456491cbf528b75a57c231e7aaa4201ffabbf013fea4c3a7abbc99f45246;
class ref_d2b3456491cbf528b75a57c231e7aaa4201ffabbf013fea4c3a7abbc99f45246 {
    name: string;
    age: number;
    obj_key: ref_15e804f9fe887c23c97afb9024f9ded533079f0382cda17ebcac3ef40a139685;
    obj_key2: ref_76dd277c4409b272f55063611e04240bf9f4c58da28a762ee68b0649f1ecadcf;
    constructor({ name, age }: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_5a1e267f7f52720bde7e86e1abb5214e01bd52f152ef6a839e476c343e6a7c0a;
        obj_key2: ref_1093c5cf3ca9955e64fd4548c62e346699ec38bee6d5ab317f0f147d4b065e46;
    }) {
        this.name = name;
        this.age = age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_15e804f9fe887c23c97afb9024f9ded533079f0382cda17ebcac3ef40a139685 = {
    obj_name: string;
    obj_val: number;
};
type ref_76dd277c4409b272f55063611e04240bf9f4c58da28a762ee68b0649f1ecadcf = {
    obj_name: string;
    obj_val: number;
};
type ref_5a1e267f7f52720bde7e86e1abb5214e01bd52f152ef6a839e476c343e6a7c0a = {
    obj_name: string;
    obj_val: number;
};
type ref_1093c5cf3ca9955e64fd4548c62e346699ec38bee6d5ab317f0f147d4b065e46 = {
    obj_name: string;
    obj_val: number;
};