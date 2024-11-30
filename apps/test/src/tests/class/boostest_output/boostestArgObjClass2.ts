export function boostestArgObjClass2<T>(isArray = false) {
	return new ref_0eee201ce1d8d7d3a385c852a409be49b3f342299f92879a4aebcc3957c840a0({
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
type main_output_target = ["classReference", ref_0eee201ce1d8d7d3a385c852a409be49b3f342299f92879a4aebcc3957c840a0, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_0eee201ce1d8d7d3a385c852a409be49b3f342299f92879a4aebcc3957c840a0;
class ref_0eee201ce1d8d7d3a385c852a409be49b3f342299f92879a4aebcc3957c840a0 {
    name: string;
    age: number;
    obj_key: ref_30c6c79bee7a8eeb822e827072bd70226e6426b178d4224746778ba993e1ebb6;
    obj_key2: ref_30c6c79bee7a8eeb822e827072bd70226e6426b178d4224746778ba993e1ebb6;
    constructor(hoge: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_30c6c79bee7a8eeb822e827072bd70226e6426b178d4224746778ba993e1ebb6;
        obj_key2: ref_30c6c79bee7a8eeb822e827072bd70226e6426b178d4224746778ba993e1ebb6;
    }) {
        this.name = hoge.name;
        this.age = hoge.age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_30c6c79bee7a8eeb822e827072bd70226e6426b178d4224746778ba993e1ebb6 = {
    obj_name: string;
    obj_val: number;
};