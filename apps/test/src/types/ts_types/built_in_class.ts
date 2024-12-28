export type BuiltInType = {
  date: Date;
  set: Set<string>;
  map: Map<string, number>;
  // array: Array<string>;
  object: Object;
  // string: String;
  // number: Number;
  // boolean: Boolean;
  // symbol: Symbol;
  // function: Function;
  // regexp: RegExp;
  // error: Error;
  // promise: Promise<string>;
  // arrayBuffer: ArrayBuffer;
  // dataView: DataView;
  // int8Array: Int8Array;
  // uint8Array: Uint8Array;
  // uint8ClampedArray: Uint8ClampedArray;
  // int16Array: Int16Array;
  // uint16Array: Uint16Array;
  // int32Array: Int32Array;
  // uint32Array: Uint32Array;
  // float32Array: Float32Array;
  // float64Array: Float64Array;
  // bigInt64Array: BigInt64Array;
  // bigUint64Array: BigUint64Array;
  // mapIterator: IterableIterator<[string, number]>;
  // setIterator: IterableIterator<string>;
  // arrayIterator: IterableIterator<string>;
  // stringIterator: IterableIterator<string>;
  // sharedArrayBuffer: SharedArrayBuffer;
  // atomics: Atomics;
  // TODO
  // webAssembly: typeof WebAssembly;
  // webAssemblyCompileError: WebAssembly.CompileError;
  // webAssemblyLinkError: WebAssembly.LinkError;
  // webAssemblyRuntimeError: WebAssembly.RuntimeError;
  // webAssemblyInstance: WebAssembly.Instance;
  // webAssemblyMemory: WebAssembly.Memory;
  // webAssemblyModule: WebAssembly.Module;
};

export interface BuiltInInterface {
  date: Date;
  set: Set<string>;
  map: Map<string, number>;
  array: Array<string>;
  object: Object;
  string: String;
  number: Number;
  boolean: Boolean;
  symbol: Symbol;
  function: Function;
  regexp: RegExp;
  error: Error;
  promise: Promise<string>;
  arrayBuffer: ArrayBuffer;
  dataView: DataView;
  int8Array: Int8Array;
  uint8Array: Uint8Array;
  uint8ClampedArray: Uint8ClampedArray;
  int16Array: Int16Array;
  uint16Array: Uint16Array;
  int32Array: Int32Array;
  uint32Array: Uint32Array;
  float32Array: Float32Array;
  float64Array: Float64Array;
  bigInt64Array: BigInt64Array;
  bigUint64Array: BigUint64Array;
  mapIterator: IterableIterator<[string, number]>;
  setIterator: IterableIterator<string>;
  arrayIterator: IterableIterator<string>;
  stringIterator: IterableIterator<string>;
  sharedArrayBuffer: SharedArrayBuffer;
  atomics: Atomics;
  // TODO
  // webAssembly: typeof WebAssembly;
  // webAssemblyCompileError: WebAssembly.CompileError;
  // webAssemblyLinkError: WebAssembly.LinkError;
  // webAssemblyRuntimeError: WebAssembly.RuntimeError;
  // webAssemblyInstance: WebAssembly.Instance;
  // webAssemblyMemory: WebAssembly.Memory;
  // webAssemblyModule: WebAssembly.Module;
}

export class BuiltInClass {
  constructor(
    public date: Date,
    public set: Set<string>,
    public map: Map<string, number>,
    public array: Array<string>,
    public object: Object,
    public string: String,
    public number: Number,
    public boolean: Boolean,
    public symbol: Symbol,
    public function_class: Function,
    public regexp: RegExp,
    public error: Error,
    public promise: Promise<string>,
    public arrayBuffer: ArrayBuffer,
    public dataView: DataView,
    public int8Array: Int8Array,
    public uint8Array: Uint8Array,
    public uint8ClampedArray: Uint8ClampedArray,
    public int16Array: Int16Array,
    public uint16Array: Uint16Array,
    public int32Array: Int32Array,
    public uint32Array: Uint32Array,
    public float32Array: Float32Array,
    public float64Array: Float64Array,
    public bigInt64Array: BigInt64Array,
    public bigUint64Array: BigUint64Array,
    public mapIterator: IterableIterator<[string, number]>,
    public setIterator: IterableIterator<string>,
    public arrayIterator: IterableIterator<string>,
    public stringIterator: IterableIterator<string>,
    public sharedArrayBuffer: SharedArrayBuffer,
    public atomics: Atomics,

    // TODO
    // webAssembly: typeof WebAssembly;
    // webAssemblyCompileError: WebAssembly.CompileError;
    // webAssemblyLinkError: WebAssembly.LinkError;
    // webAssemblyRuntimeError: WebAssembly.RuntimeError;
    // webAssemblyInstance: WebAssembly.Instance;
    // webAssemblyMemory: WebAssembly.Memory;
    // webAssemblyModule: WebAssembly.Module;
  ) {}
}
