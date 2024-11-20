export type SingleCallSignature = (name: string, age: number) => null;

export type CallSignature = {
  // TODO: support first fucnction type only
  (name: string, age: number): void;
  (contents: string): string;
  (): void;

  // TODO: this is not working
  name: string;
};

export type MathOperations = {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
};

export interface CallSignatureInterface {
  // TODO: support first fucnction type only
  (name: string, age: number): void;
  (): void;

  // TODO: this is not working
  // name: string;
}
