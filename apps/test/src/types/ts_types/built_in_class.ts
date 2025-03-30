export type BuiltInType = {
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

  dataView: DataView;

  mapIterator: IterableIterator<[string, number]>;
  setIterator: IterableIterator<string>;
  arrayIterator: IterableIterator<string>;
  stringIterator: IterableIterator<string>;

  sharedArrayBuffer: SharedArrayBuffer;
  atomics: Atomics;
  webAssembly: typeof WebAssembly;

  webAssemblyCompileError: WebAssembly.CompileError;
  webAssemblyLinkError: WebAssembly.LinkError;
  webAssemblyRuntimeError: WebAssembly.RuntimeError;
  webAssemblyInstance: WebAssembly.Instance;
  webAssemblyMemory: WebAssembly.Memory;
  webAssemblyModule: WebAssembly.Module;
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

  dataView: DataView;

  mapIterator: IterableIterator<[string, number]>;
  setIterator: IterableIterator<string>;
  arrayIterator: IterableIterator<string>;
  stringIterator: IterableIterator<string>;

  sharedArrayBuffer: SharedArrayBuffer;
  atomics: Atomics;
  webAssembly: typeof WebAssembly;

  webAssemblyCompileError: WebAssembly.CompileError;
  webAssemblyLinkError: WebAssembly.LinkError;
  webAssemblyRuntimeError: WebAssembly.RuntimeError;
  webAssemblyInstance: WebAssembly.Instance;
  webAssemblyMemory: WebAssembly.Memory;
  webAssemblyModule: WebAssembly.Module;
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
    // public mapIterator: IterableIterator<[string, number]>,
    // public setIterator: IterableIterator<string>,
    // public arrayIterator: IterableIterator<string>,
    // public stringIterator: IterableIterator<string>,
    // public sharedArrayBuffer: SharedArrayBuffer,
    // public atomics: Atomics,

    // public webAssembly: typeof WebAssembly,
    // public webAssemblyCompileError: WebAssembly.CompileError,
    // public webAssemblyLinkError: WebAssembly.LinkError,
    // public webAssemblyRuntimeError: WebAssembly.RuntimeError,
    // public webAssemblyInstance: WebAssembly.Instance,
    // public webAssemblyMemory: WebAssembly.Memory,
    // public webAssemblyModule: WebAssembly.Module,
  ) {}
}

// export const builtInTypeValue: BuiltInType = {
//   date: new Date(),
//   set: new Set(),
//   map: new Map(),
//   array: [],
//   object: {},
//   string: new String(),
//   number: new Number(),
//   boolean: new Boolean(),
//   symbol: Symbol(),
//   function: function () {},
//   regexp: new RegExp(""),
//   error: new Error(),
//   promise: Promise.resolve(),
//   arrayBuffer: new ArrayBuffer(0),
//   dataView: new DataView(new ArrayBuffer(0)),
//   int8Array: new Int8Array(),
//   uint8Array: new Uint8Array(),
//   uint8ClampedArray: new Uint8ClampedArray(),
//   int16Array: new Int16Array(),
//   uint16Array: new Uint16Array(),
//   int32Array: new Int32Array(),
//   uint32Array: new Uint32Array(),
//   float32Array: new Float32Array(),
//   float64Array: new Float64Array(),
//   bigInt64Array: new BigInt64Array(),
//   bigUint64Array: new BigUint64Array(),
//   mapIterator: new Map().entries(),
//   setIterator: new Set().values(),
//   arrayIterator: [].values(),
//   stringIterator: ""[Symbol.iterator](),
//   sharedArrayBuffer: new SharedArrayBuffer(0),
//   atomics: Atomics,
//   webAssembly: WebAssembly,
//   webAssemblyCompileError: new WebAssembly.CompileError(),
//   webAssemblyLinkError: new WebAssembly.LinkError(),
//   webAssemblyRuntimeError: new WebAssembly.RuntimeError(),
//   webAssemblyInstance: new WebAssembly.Instance(
//     new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0])),
//   ),
//   webAssemblyMemory: new WebAssembly.Memory({ initial: 1 }),
//   webAssemblyModule: new WebAssembly.Module(
//     new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]),
//   ),
// };
//
// builtInTypeValue.map.set(1, 1);
