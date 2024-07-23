type ObjKey = {
  obj_name: string;
  obj_val: number;
};

export class ArgObjClass2 {
  name: string;
  age: number;
  obj_key: ObjKey;
  obj_key2: ObjKey;

  constructor(hoge: { name: string; age: number }, { obj_key, obj_key2 }: { obj_key: ObjKey; obj_key2: ObjKey }) {
    this.name = hoge.name;
    this.age = hoge.age;
    this.obj_key = obj_key;
    this.obj_key2 = obj_key2;
  }
}
