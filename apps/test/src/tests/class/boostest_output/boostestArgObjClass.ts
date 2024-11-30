export function boostestArgObjClass<T>(isArray = false) {
	return new ref_ebe4c4afb7e0212ef93ff0c9bfeb5e5c5998d47c4b2ceb129f00edc14cde71ae({
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
type main_output_target = ["classReference", ref_ebe4c4afb7e0212ef93ff0c9bfeb5e5c5998d47c4b2ceb129f00edc14cde71ae, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_ebe4c4afb7e0212ef93ff0c9bfeb5e5c5998d47c4b2ceb129f00edc14cde71ae;
class ref_ebe4c4afb7e0212ef93ff0c9bfeb5e5c5998d47c4b2ceb129f00edc14cde71ae {
    name: string;
    age: number;
    obj_key: ref_2f59db0354ce736f82cc30b6523dbbf1e0c1edd8f726d4b3c12696871e278d18;
    obj_key2: ref_2f59db0354ce736f82cc30b6523dbbf1e0c1edd8f726d4b3c12696871e278d18;
    constructor({ name, age }: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_2f59db0354ce736f82cc30b6523dbbf1e0c1edd8f726d4b3c12696871e278d18;
        obj_key2: ref_2f59db0354ce736f82cc30b6523dbbf1e0c1edd8f726d4b3c12696871e278d18;
    }) {
        this.name = name;
        this.age = age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_2f59db0354ce736f82cc30b6523dbbf1e0c1edd8f726d4b3c12696871e278d18 = {
    obj_name: string;
    obj_val: number;
};