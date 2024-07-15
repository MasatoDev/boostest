export type SingleCallSignature = (name: string, age: number) => null;

export type CallSignature = {
  (name: string, age: number): void;
  (contents: string): string;
  (): void;

  // TODO: this is not working
  // name: string;
};

export type MathOperations = {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
};

export interface CallSignatureInterface {
  (name: string, age: number): void;
  (): void;

  // TODO: this is not working
  // name: string;
}
