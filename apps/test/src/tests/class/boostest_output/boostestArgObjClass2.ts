export function boostestArgObjClass2<T>(isArray = false) {
	return new ref_84bcb9cf69dd893778781e879711f4dd8af8f4e4abd2e5b9f95aba43caa1f5f9({
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
type main_output_target = ["classReference", ref_84bcb9cf69dd893778781e879711f4dd8af8f4e4abd2e5b9f95aba43caa1f5f9, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_84bcb9cf69dd893778781e879711f4dd8af8f4e4abd2e5b9f95aba43caa1f5f9;
class ref_84bcb9cf69dd893778781e879711f4dd8af8f4e4abd2e5b9f95aba43caa1f5f9 {
    name: string;
    age: number;
    obj_key: ref_b45c835a8a6557932cb5b306a452bbbb009f32356e547263b81b5af9cf151aad;
    obj_key2: ref_b45c835a8a6557932cb5b306a452bbbb009f32356e547263b81b5af9cf151aad;
    constructor(hoge: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_b45c835a8a6557932cb5b306a452bbbb009f32356e547263b81b5af9cf151aad;
        obj_key2: ref_b45c835a8a6557932cb5b306a452bbbb009f32356e547263b81b5af9cf151aad;
    }) {
        this.name = hoge.name;
        this.age = hoge.age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_b45c835a8a6557932cb5b306a452bbbb009f32356e547263b81b5af9cf151aad = {
    obj_name: string;
    obj_val: number;
};