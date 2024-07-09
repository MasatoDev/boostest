type ObjKey = {
  obj_name: string;
  obj_val: number;
};

export class ArgObjClass {
  name: string;
  age: number;
  obj_key: ObjKey;
  obj_key2: ObjKey;

  constructor({ name, age, obj_key, obj_key2 }: { name: string; age: number; obj_key: ObjKey; obj_key2: ObjKey }) {
    this.name = name;
    this.age = age;
    this.obj_key = obj_key;
    this.obj_key2 = obj_key2;
  }
}
