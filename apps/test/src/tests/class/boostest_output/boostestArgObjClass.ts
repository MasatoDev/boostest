export function boostestArgObjClass<T>(isArray = false) {
	return new ref_8b1f032a31f451eaa6c486f4a27f624eabfdce3ab41dba1b437f870f9c0d87c9({
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
type main_output_target = ["classReference", ref_8b1f032a31f451eaa6c486f4a27f624eabfdce3ab41dba1b437f870f9c0d87c9, [
  { name: string; age: number },
  { obj_key: { obj_name: string; obj_val: number }; obj_key2: { obj_name: string; obj_val: number } }
]]; // Extracted from typeAlias

type main = ref_8b1f032a31f451eaa6c486f4a27f624eabfdce3ab41dba1b437f870f9c0d87c9;
class ref_8b1f032a31f451eaa6c486f4a27f624eabfdce3ab41dba1b437f870f9c0d87c9 {
    name: string;
    age: number;
    obj_key: ref_50ec5588fcd8c41006ad27e12c6455a2197ff42a40d2fba44960888556a17bfb;
    obj_key2: ref_50ec5588fcd8c41006ad27e12c6455a2197ff42a40d2fba44960888556a17bfb;
    constructor({ name, age }: {
        name: string;
        age: number;
    }, { obj_key, obj_key2 }: {
        obj_key: ref_50ec5588fcd8c41006ad27e12c6455a2197ff42a40d2fba44960888556a17bfb;
        obj_key2: ref_50ec5588fcd8c41006ad27e12c6455a2197ff42a40d2fba44960888556a17bfb;
    }) {
        this.name = name;
        this.age = age;
        this.obj_key = obj_key;
        this.obj_key2 = obj_key2;
    }
}
type ref_50ec5588fcd8c41006ad27e12c6455a2197ff42a40d2fba44960888556a17bfb = {
    obj_name: string;
    obj_val: number;
};