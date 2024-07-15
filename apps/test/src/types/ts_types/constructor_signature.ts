class Person {
  constructor(public name: string) {}
}

export type ConstructorSignature = new (name: string) => Person;

export type InnerConstructorSignature = {
  new (name: string): Person;
};

export interface ConstructorSignatureInterface {
  new (name: string): Person;
}
