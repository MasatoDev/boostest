export class ArgObjClass {
  name: string;
  age: number;

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }
}
