type main =
  ref_58fe66756e13c3e7dd64e8b4e0e593d06cbb113635eb635d3f44e636a64d99fc;
type ref_58fe66756e13c3e7dd64e8b4e0e593d06cbb113635eb635d3f44e636a64d99fc = {
  date: ref_1cf2bbc05a738650dcab620d9eecc8bc158de4f87ced0a8c01d85c5e7340341a;
  set: ref_89ba3ede9543b7aff28ae2371fe4e9579a4d7096ecc01ba78d2be7dd40e42d12<string>;
  map: ref_89cc8e840ede64aa7d0d3a5be8b76d0c5fd970aac2b493e49cda13a4f2e86f8c<
    string,
    number
  >;
  array: Array<string>;
  object: ref_1f2d839eedef6f7f272663016fe102ef385dfa7beb647117bfed16d49d4c28f7;
  string: ref_8a620553f8d2e6f281842619c519b18b1fd828ebc7a1e748ef6b03a3eed7fec3;
  number: ref_1abd53902f531472e22f7c9cba94c76a1483b0ddebb1e41d01347f1fa603b4b1;
  boolean: ref_c5d387e0d4621cbf97033d01265743d604358963a55d3e397c3ca834b6384a01;
  symbol: ref_a2b8d5aebb119fbab461d447877ee7c4fdaf37de8006d663f9b95a7d86dd43fa;
  function: Function;
  regexp: ref_edefc980c8b4025253e80d1a4de1003efbddc096f9e39007767c87556fea7ff1;
  error: ref_5944fdbf739e1f942462b49217d4174e7c94f0485e1d174a4fa8a70092db3881;
  promise: Promise<string>;
  arrayBuffer: ref_eaa5eb7598b5348a336434756972ca8cafe3cffdb6918bb4cbe5e1e7e02ecadc;
  dataView: ref_81c5fa679f56ef4e310253c69994554ab11b51c149d6ea37d6bb442bb08a2c50;
  int8Array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca;
  uint8Array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  uint8ClampedArray: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  int16Array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  uint16Array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  int32Array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  uint32Array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  float32Array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  float64Array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  bigInt64Array: ref_6b72cd87a6d008de14f0371e06e6b00b2fec1eb1a6f7b9d6743ca75d0410a6d9;
  bigUint64Array: ref_b46b9ca2bd41099ee58c4f3db438f6bcabe8ac5cae059dd3a913710869fc5b84;
  mapIterator: ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<
    [string, number]
  >;
  setIterator: ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<string>;
  arrayIterator: ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<string>;
  stringIterator: ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<string>;
  sharedArrayBuffer: ref_d827535fd8dd0dbf22cfb3a2e1e24411ce6b0fbd10cec66935d25632db990b4a;
  atomics: ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782;
};
interface ref_1cf2bbc05a738650dcab620d9eecc8bc158de4f87ced0a8c01d85c5e7340341a {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
}
interface ref_1cf2bbc05a738650dcab620d9eecc8bc158de4f87ced0a8c01d85c5e7340341a {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions.DateTimeFormatOptions,
  ): string;
}
interface ref_89ba3ede9543b7aff28ae2371fe4e9579a4d7096ecc01ba78d2be7dd40e42d12<
  T,
> {
  /**
   * Appends a new element with a specified value to the end of the Set.
   */
  add(value: T): this;
  clear(): void;
  /**
   * Removes a specified value from the Set.
   * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
   */
  delete(value: T): boolean;
  /**
   * Executes a provided function once per each value in the Set object, in insertion order.
   */
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any,
  ): void;
  /**
   * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
   */
  has(value: T): boolean;
  /**
   * @returns the number of (unique) elements in Set.
   */
  readonly size: number;
}
interface ref_89ba3ede9543b7aff28ae2371fe4e9579a4d7096ecc01ba78d2be7dd40e42d12<
  T,
> {
  /** Iterates over values in the set. */
  [Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Despite its name, returns an iterable of the values in the set.
   */
  keys(): IterableIterator<T>;
  /**
   * Returns an iterable of values in the set.
   */
  values(): IterableIterator<T>;
}
interface ref_89ba3ede9543b7aff28ae2371fe4e9579a4d7096ecc01ba78d2be7dd40e42d12<
  T,
> {
  /**
   * Appends a new element with a specified value to the end of the Set.
   */
  add(value: T): this;
  clear(): void;
  /**
   * Removes a specified value from the Set.
   * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
   */
  delete(value: T): boolean;
  /**
   * Executes a provided function once per each value in the Set object, in insertion order.
   */
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any,
  ): void;
  /**
   * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
   */
  has(value: T): boolean;
  /**
   * @returns the number of (unique) elements in Set.
   */
  readonly size: number;
}
interface ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<
  T,
> {
  [Symbol.iterator](): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<T>;
}
interface ref_f9c811bb97e0f98933971643a2ba432b24d9c4bdbe8cc75d78a2c58edebffec8<
  T,
> {
  /**
   * Appends a new element with a specified value to the end of the Set.
   */
  add(value: T): this;
  clear(): void;
  /**
   * Removes a specified value from the Set.
   * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
   */
  delete(value: T): boolean;
  /**
   * Executes a provided function once per each value in the Set object, in insertion order.
   */
  forEach(
    callbackfn: (
      value: T,
      value2: T,
      set: ref_f9c811bb97e0f98933971643a2ba432b24d9c4bdbe8cc75d78a2c58edebffec8<T>,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * @returns a boolean indicating whether an element with the specified value exists in the Set or not.
   */
  has(value: T): boolean;
  /**
   * @returns the number of (unique) elements in Set.
   */
  readonly size: number;
}
interface ref_89cc8e840ede64aa7d0d3a5be8b76d0c5fd970aac2b493e49cda13a4f2e86f8c<
  K,
  V,
> {
  clear(): void;
  /**
   * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get(key: K): V | undefined;
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  set(key: K, value: V): this;
  /**
   * @returns the number of elements in the Map.
   */
  readonly size: number;
}
interface ref_89cc8e840ede64aa7d0d3a5be8b76d0c5fd970aac2b493e49cda13a4f2e86f8c<
  K,
  V,
> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;
  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}
interface ref_89cc8e840ede64aa7d0d3a5be8b76d0c5fd970aac2b493e49cda13a4f2e86f8c<
  K,
  V,
> {
  clear(): void;
  /**
   * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get(key: K): V | undefined;
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  set(key: K, value: V): this;
  /**
   * @returns the number of elements in the Map.
   */
  readonly size: number;
}
interface ref_111f2c52f681d69bd96dc1954aa7d2375b03db40a09bc775a590d755385a1f89<
  K,
  V,
> {
  clear(): void;
  /**
   * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  forEach(
    callbackfn: (
      value: V,
      key: K,
      map: ref_111f2c52f681d69bd96dc1954aa7d2375b03db40a09bc775a590d755385a1f89<
        K,
        V
      >,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get(key: K): V | undefined;
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  set(key: K, value: V): this;
  /**
   * @returns the number of elements in the Map.
   */
  readonly size: number;
}
interface ref_1f2d839eedef6f7f272663016fe102ef385dfa7beb647117bfed16d49d4c28f7 {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;
  /** Returns a string representation of an object. */
  toString(): string;
  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_1f2d839eedef6f7f272663016fe102ef385dfa7beb647117bfed16d49d4c28f7;
  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(
    v: ref_fdd20324f049c75abe11c126f848bc34f03f3cd6fe2353a606fb2555bdea67b9,
  ): boolean;
  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(
    v: ref_1f2d839eedef6f7f272663016fe102ef385dfa7beb647117bfed16d49d4c28f7,
  ): boolean;
  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(
    v: ref_fdd20324f049c75abe11c126f848bc34f03f3cd6fe2353a606fb2555bdea67b9,
  ): boolean;
}
declare type ref_fdd20324f049c75abe11c126f848bc34f03f3cd6fe2353a606fb2555bdea67b9 =
  string | number | symbol;
interface ref_8a620553f8d2e6f281842619c519b18b1fd828ebc7a1e748ef6b03a3eed7fec3 {
  /**
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that String to compare to target string
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(
    that: string,
    locales?: string | Array<string>,
    options?: Intl.CollatorOptions.CollatorOptions,
  ): number;
}
interface ref_8a620553f8d2e6f281842619c519b18b1fd828ebc7a1e748ef6b03a3eed7fec3 {
  /**
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that String to compare to target string
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(
    that: string,
    locales?: string | Array<string>,
    options?: Intl.CollatorOptions.CollatorOptions,
  ): number;
}
interface ref_edefc980c8b4025253e80d1a4de1003efbddc096f9e39007767c87556fea7ff1 {
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(
    string: string,
  ): ref_f31eb5e4b8833279d19bffab3b1d19f332492bf59923aefc957b74c430ad7187 | null;
  /**
   * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
   * @param string String on which to perform the search.
   */
  test(string: string): boolean;
  /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
  readonly source: string;
  /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
  readonly global: boolean;
  /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
  readonly ignoreCase: boolean;
  /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
  readonly multiline: boolean;
  lastIndex: number;
  /** @deprecated A legacy feature for browser compatibility */
  compile(pattern: string, flags?: string): this;
}
interface ref_f31eb5e4b8833279d19bffab3b1d19f332492bf59923aefc957b74c430ad7187 {
  /**
   * The index of the search at which the result was found.
   */
  index: number;
  /**
   * A copy of the search string.
   */
  input: string;
  /**
   * The first match. This will always be present because `null` will be returned if there are no matches.
   */
  0: string;
}
interface ref_c48bddcaba064013b31176ae72cab16764ba3dfbb8be1cf815303acc4cd560cc {
  /**
   * The index of the search at which the result was found.
   */
  index?: number;
  /**
   * A copy of the search string.
   */
  input?: string;
  /**
   * The first match. This will always be present because `null` will be returned if there are no matches.
   */
  0: string;
}
interface ref_1abd53902f531472e22f7c9cba94c76a1483b0ddebb1e41d01347f1fa603b4b1 {
  /**
   * Converts a number to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: Intl.NumberFormatOptions.NumberFormatOptions,
  ): string;
}
interface ref_1abd53902f531472e22f7c9cba94c76a1483b0ddebb1e41d01347f1fa603b4b1 {
  /**
   * Converts a number to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: Intl.NumberFormatOptions.NumberFormatOptions,
  ): string;
}
interface ref_c5d387e0d4621cbf97033d01265743d604358963a55d3e397c3ca834b6384a01 {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}
interface ref_a2b8d5aebb119fbab461d447877ee7c4fdaf37de8006d663f9b95a7d86dd43fa {
  /** Returns a string representation of an object. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}
interface ref_5944fdbf739e1f942462b49217d4174e7c94f0485e1d174a4fa8a70092db3881 {
  name: string;
  message: string;
  stack?: string;
}
interface ref_eaa5eb7598b5348a336434756972ca8cafe3cffdb6918bb4cbe5e1e7e02ecadc {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;
  /**
   * Returns a section of an ArrayBuffer.
   */
  slice(
    begin: number,
    end?: number,
  ): ref_eaa5eb7598b5348a336434756972ca8cafe3cffdb6918bb4cbe5e1e7e02ecadc;
}
interface ref_81c5fa679f56ef4e310253c69994554ab11b51c149d6ea37d6bb442bb08a2c50 {
  readonly buffer: ref_eaa5eb7598b5348a336434756972ca8cafe3cffdb6918bb4cbe5e1e7e02ecadc;
  readonly byteLength: number;
  readonly byteOffset: number;
  /**
   * Gets the Float32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getFloat32(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Float64 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getFloat64(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Int8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getInt8(byteOffset: number): number;
  /**
   * Gets the Int16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getInt16(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Int32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getInt32(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Uint8 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   */
  getUint8(byteOffset: number): number;
  /**
   * Gets the Uint16 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getUint16(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Gets the Uint32 value at the specified byte offset from the start of the view. There is
   * no alignment constraint; multi-byte values may be fetched from any offset.
   * @param byteOffset The place in the buffer at which the value should be retrieved.
   * @param littleEndian If false or undefined, a big-endian value should be read.
   */
  getUint32(byteOffset: number, littleEndian?: boolean): number;
  /**
   * Stores an Float32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
  /**
   * Stores an Float64 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
  /**
   * Stores an Int8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setInt8(byteOffset: number, value: number): void;
  /**
   * Stores an Int16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
  /**
   * Stores an Int32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
  /**
   * Stores an Uint8 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   */
  setUint8(byteOffset: number, value: number): void;
  /**
   * Stores an Uint16 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
  /**
   * Stores an Uint32 value at the specified byte offset from the start of the view.
   * @param byteOffset The place in the buffer at which the value should be set.
   * @param value The value to set.
   * @param littleEndian If false or undefined, a big-endian value should be written.
   */
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}
interface ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => any,
    thisArg?: any,
  ): ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => number,
    thisArg?: any,
  ): ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_9ea5397902ce26c17ee88d57c8880232feb33e7140532febfeb6a013319a31e0<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_d1a27a7ba8a7488d74478002cfd1e454c90dcb7e7a07247ebb0dbe2091b13cca;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b;
  [index: number]: number;
}
type ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052 =
  ref_f48bc729d3547f6c4a104b804d0af1e61562c433122f17b32ae9ea2ecfd4e0de[keyof ref_f48bc729d3547f6c4a104b804d0af1e61562c433122f17b32ae9ea2ecfd4e0de];
interface ref_f48bc729d3547f6c4a104b804d0af1e61562c433122f17b32ae9ea2ecfd4e0de {
  ArrayBuffer: ref_eaa5eb7598b5348a336434756972ca8cafe3cffdb6918bb4cbe5e1e7e02ecadc;
}
interface ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int8Array) => any,
    thisArg?: any,
  ): Int8Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int8Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any,
  ): Int8Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int8Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int8Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int8Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int8Array;
  [index: number]: number;
}
interface ref_1deb51dc1dffd0b19465ad5451b8bc90ea7074191bbb17674ef64d854422078b {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int8Array) => any,
    thisArg?: any,
  ): Int8Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int8Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int8Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int8Array) => number,
    thisArg?: any,
  ): Int8Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int8Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int8Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int8Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int8Array;
  [index: number]: number;
}
interface ref_9ea5397902ce26c17ee88d57c8880232feb33e7140532febfeb6a013319a31e0<
  T,
> {
  readonly length: number;
  readonly [n: number]: T;
}
interface ref_9ea5397902ce26c17ee88d57c8880232feb33e7140532febfeb6a013319a31e0<
  T,
> {
  readonly length: number;
  readonly [n: number]: T;
}
interface ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => any,
    thisArg?: any,
  ): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => number,
    thisArg?: any,
  ): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_5c1eeb70364949be4d57f71d0e3ec6dba791257e3035293a6790b68f5865ec6a;
  [index: number]: number;
}
interface ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<
  T,
> {
  readonly length: number;
  readonly [n: number]: T;
}
interface ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => any,
    thisArg?: any,
  ): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => number,
    thisArg?: any,
  ): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_8d5c20b1abfe1dadf444ca75f96bb4d3f79f3d4aedfea9b63f62813a93411ab2;
  [index: number]: number;
}
interface ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => any,
    thisArg?: any,
  ): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => number,
    thisArg?: any,
  ): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_46178d3741c8fbb887d082abfd3fa5a951fa2b5c5a89a02a24adb1651526d5a9;
  [index: number]: number;
}
interface ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => any,
    thisArg?: any,
  ): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => number,
    thisArg?: any,
  ): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_754eefa3fe1bd4504699b710f8e4bab18cd34de7de2fc0af93953cbe88a6673e;
  [index: number]: number;
}
interface ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => any,
    thisArg?: any,
  ): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => number,
    thisArg?: any,
  ): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_a7176791cca209bd63a094cab678fc8bdb2243a2f6d8c5ff43e9350c5c302f1c;
  [index: number]: number;
}
interface ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => any,
    thisArg?: any,
  ): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => number,
    thisArg?: any,
  ): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_7f9bb9a5221f21afa555bc2931c89cf7f0422e8f4f2ed6cffdcdbdae27af9733;
  [index: number]: number;
}
interface ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => any,
    thisArg?: any,
  ): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => number,
    thisArg?: any,
  ): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_80af107a1908187281d22cb5366018fcb8f640b6e6d32bf442e94703dad507d8;
  [index: number]: number;
}
interface ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: number,
      index: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: number,
      index: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => any,
    thisArg?: any,
  ): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: number,
      index: number,
      obj: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: number,
      index: number,
      obj: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: number,
      index: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: number,
      index: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => number,
    thisArg?: any,
  ): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<number>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: number,
      index: number,
      array: ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8,
    ) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Float64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_fd69b0f11b8ce9f286e06a2593ea899dd3615219fc01325049dc5c9476f6f9b8;
  [index: number]: number;
}
interface ref_6b72cd87a6d008de14f0371e06e6b00b2fec1eb1a6f7b9d6743ca75d0410a6d9 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_6b72cd87a6d008de14f0371e06e6b00b2fec1eb1a6f7b9d6743ca75d0410a6d9 {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_6b72cd87a6d008de14f0371e06e6b00b2fec1eb1a6f7b9d6743ca75d0410a6d9 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297 {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (
      value: bigint,
      index: number,
      array: ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297,
    ) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (
      value: bigint,
      index: number,
      array: ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297,
    ) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(
    compareFn?: (a: bigint, b: bigint) => number,
  ): ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(
    index: number,
    value: bigint,
  ): ref_4f645cfb26a56b1b63b6de1ff9b82aff2b6c9db73042abba3a016968ee9ec297;
}
interface ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<
    [number, bigint]
  >;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => any,
    thisArg?: any,
  ): ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => bigint,
    thisArg?: any,
  ): ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_9ea5397902ce26c17ee88d57c8880232feb33e7140532febfeb6a013319a31e0<bigint>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_1243316a37a435ae119575c5a240268dedcf356582169c7cd62ced37664e36b8;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: bigint,
      index: number,
      array: ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025,
    ) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_37a376c11a42ef2962e8c00a84ae4dd11b8c5ef98ed5c8e9fd8b0c4ec574c025;
  /** Yields each value in the array. */
  values(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<bigint>;
  [Symbol.iterator](): ref_5bae06c03b8d785045354a6f2f75cf85547c05d24d140e066dfb9415e6bf4f05<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_1243316a37a435ae119575c5a240268dedcf356582169c7cd62ced37664e36b8 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_1243316a37a435ae119575c5a240268dedcf356582169c7cd62ced37664e36b8 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_5bae06c03b8d785045354a6f2f75cf85547c05d24d140e066dfb9415e6bf4f05<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_5bae06c03b8d785045354a6f2f75cf85547c05d24d140e066dfb9415e6bf4f05<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_b46b9ca2bd41099ee58c4f3db438f6bcabe8ac5cae059dd3a913710869fc5b84 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigUint64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_b46b9ca2bd41099ee58c4f3db438f6bcabe8ac5cae059dd3a913710869fc5b84 {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigUint64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigUint64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigUint64Array.from([11n, 2n, 22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigUint64Array(4) [1n, 2n, 11n, 22n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigUint64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigUint64Array;
}
interface ref_b46b9ca2bd41099ee58c4f3db438f6bcabe8ac5cae059dd3a913710869fc5b84 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigUint64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee,
    ) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee,
    ) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigUint64Array.from([11n, 2n, 22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigUint64Array(4) [1n, 2n, 11n, 22n]
   * ```
   */
  toSorted(
    compareFn?: (a: bigint, b: bigint) => number,
  ): ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(
    index: number,
    value: bigint,
  ): ref_c1eac5f17d0a57283f5c7c5f97a07413f40fafe16741ccd953e533a25a7724ee;
}
interface ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ref_769f2c73f509e15a85440637d2ee2299b93916a28fd773eaa4206a39161e6052;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<
    [number, bigint]
  >;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => any,
    thisArg?: any,
  ): ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => bigint,
    thisArg?: any,
  ): ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_bc57a4e97a82a690537c5be482819e4888201ad1ce4d1bc80e2aa5e9720fc21d<bigint>,
    offset?: number,
  ): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(
    start?: number,
    end?: number,
  ): ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (
      value: bigint,
      index: number,
      array: ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6,
    ) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(
    begin?: number,
    end?: number,
  ): ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_c4d3a496d5c902ddc182873886e84e66c8118f1becfb8e7ce9749fbc0ae462c6;
  /** Yields each value in the array. */
  values(): ref_bc9d94b88cd1fd4b9170d146c4da6294212f3e5e883410e011929f3efbcc7fe8<bigint>;
  [Symbol.iterator](): ref_e7a9e0fd3e089fa7b6d8af098c1bbd62b610ab0dc25b783c6e4c8baee0ade683<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_e7a9e0fd3e089fa7b6d8af098c1bbd62b610ab0dc25b783c6e4c8baee0ade683<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_e7a9e0fd3e089fa7b6d8af098c1bbd62b610ab0dc25b783c6e4c8baee0ade683<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_e7a9e0fd3e089fa7b6d8af098c1bbd62b610ab0dc25b783c6e4c8baee0ade683<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_d827535fd8dd0dbf22cfb3a2e1e24411ce6b0fbd10cec66935d25632db990b4a {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;
  /**
   * Returns a section of an SharedArrayBuffer.
   */
  slice(
    begin: number,
    end?: number,
  ): ref_d827535fd8dd0dbf22cfb3a2e1e24411ce6b0fbd10cec66935d25632db990b4a;
  readonly [Symbol.species]: ref_d827535fd8dd0dbf22cfb3a2e1e24411ce6b0fbd10cec66935d25632db990b4a;
  readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: BigInt64Array,
    index: number,
    value: bigint,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    expectedValue: number,
    replacementValue: number,
  ): number;
  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Returns a value indicating whether high-performance algorithms can use atomic operations
   * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
   * array.
   */
  isLockFree(size: number): boolean;
  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
  ): number;
  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
   * `"not-equal"`.
   */
  wait(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number,
  ): "ok" | "not-equal" | "timed-out";
  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   * @param typedArray A shared Int32Array.
   * @param index The position in the typedArray to wake up on.
   * @param count The number of sleeping agents to notify. Defaults to +Infinity.
   */
  notify(typedArray: Int32Array, index: number, count?: number): number;
  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  readonly [Symbol.toStringTag]: "Atomics";
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: BigInt64Array,
    index: number,
    value: bigint,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    expectedValue: bigint,
    replacementValue: bigint,
  ): bigint;
  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(typedArray: BigInt64Array | BigUint64Array, index: number): bigint;
  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
   * `"not-equal"`.
   */
  wait(
    typedArray: BigInt64Array,
    index: number,
    value: bigint,
    timeout?: number,
  ): "ok" | "not-equal" | "timed-out";
  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   * @param typedArray A shared BigInt64Array.
   * @param index The position in the typedArray to wake up on.
   * @param count The number of sleeping agents to notify. Defaults to +Infinity.
   */
  notify(typedArray: BigInt64Array, index: number, count?: number): number;
  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(
    typedArray: BigInt64Array | BigUint64Array,
    index: number,
    value: bigint,
  ): bigint;
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * Adds a value to the value at the given position in the array, returning the original value.
   * Until this atomic operation completes, any other read or write operation against the array
   * will block.
   */
  add(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Stores the bitwise AND of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or
   * write operation against the array will block.
   */
  and(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Replaces the value at the given position in the array if the original value equals the given
   * expected value, returning the original value. Until this atomic operation completes, any
   * other read or write operation against the array will block.
   */
  compareExchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    expectedValue: number,
    replacementValue: number,
  ): number;
  /**
   * Replaces the value at the given position in the array, returning the original value. Until
   * this atomic operation completes, any other read or write operation against the array will
   * block.
   */
  exchange(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Returns a value indicating whether high-performance algorithms can use atomic operations
   * (`true`) or must use locks (`false`) for the given number of bytes-per-element of a typed
   * array.
   */
  isLockFree(size: number): boolean;
  /**
   * Returns the value at the given position in the array. Until this atomic operation completes,
   * any other read or write operation against the array will block.
   */
  load(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
  ): number;
  /**
   * Stores the bitwise OR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  or(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Stores a value at the given position in the array, returning the new value. Until this
   * atomic operation completes, any other read or write operation against the array will block.
   */
  store(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * Subtracts a value from the value at the given position in the array, returning the original
   * value. Until this atomic operation completes, any other read or write operation against the
   * array will block.
   */
  sub(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  /**
   * If the value at the given position in the array is equal to the provided value, the current
   * agent is put to sleep causing execution to suspend until the timeout expires (returning
   * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
   * `"not-equal"`.
   */
  wait(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number,
  ): "ok" | "not-equal" | "timed-out";
  /**
   * Wakes up sleeping agents that are waiting on the given index of the array, returning the
   * number of agents that were awoken.
   * @param typedArray A shared Int32Array.
   * @param index The position in the typedArray to wake up on.
   * @param count The number of sleeping agents to notify. Defaults to +Infinity.
   */
  notify(typedArray: Int32Array, index: number, count?: number): number;
  /**
   * Stores the bitwise XOR of a value with the value at the given position in the array,
   * returning the original value. Until this atomic operation completes, any other read or write
   * operation against the array will block.
   */
  xor(
    typedArray:
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array,
    index: number,
    value: number,
  ): number;
  readonly [Symbol.toStringTag]: "Atomics";
}
interface ref_ecd40173dcf08858bc005f23ec14b6efcfff5ed0bbe7a628a29e93e8cb8e6782 {
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: Int32Array,
    index: number,
    value: number,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
  /**
   * A non-blocking, asynchronous version of wait which is usable on the main thread.
   * Waits asynchronously on a shared memory location and returns a Promise
   * @param typedArray A shared Int32Array or BigInt64Array.
   * @param index The position in the typedArray to wait on.
   * @param value The expected value to test.
   * @param [timeout] The expected value to test.
   */
  waitAsync(
    typedArray: BigInt64Array,
    index: number,
    value: bigint,
    timeout?: number,
  ):
    | {
        async: false;
        value: "not-equal" | "timed-out";
      }
    | {
        async: true;
        value: Promise<"ok" | "timed-out">;
      };
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigUint64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigUint64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigUint64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigUint64Array.from([11n, 2n, 22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigUint64Array(4) [1n, 2n, 11n, 22n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigUint64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigUint64Array;
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigUint64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigUint64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigUint64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigUint64Array.from([11n, 2n, 22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigUint64Array(4) [1n, 2n, 11n, 22n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigUint64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigUint64Array;
}
interface ref_26541314b0bc2d269bbf315e032068a8947c862ef6d85196f00604ab3790b9d5 {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigUint64Array) => any,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint,
    thisArg?: any,
  ): BigUint64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigUint64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigUint64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigUint64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigUint64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigUint64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigUint64Array";
  [index: number]: bigint;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_780fc2dd6d855de383f074c323ab72d3ff6b7a4a3fd38bc1da2357a971a1d0ed {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /**
   * Returns the value of the last element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate findLast calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found, findLast
   * immediately returns that element value. Otherwise, findLast returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLast<S extends bigint>(
    predicate: (
      value: bigint,
      index: number,
      array: BigInt64Array,
    ) => value is S,
    thisArg?: any,
  ): S | undefined;
  findLast(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the last element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate findLastIndex calls predicate once for each element of the array, in descending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findLastIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => unknown,
    thisArg?: any,
  ): number;
  /**
   * Copies the array and returns the copy with the elements in reverse order.
   */
  toReversed(): BigInt64Array;
  /**
   * Copies and sorts the array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * const myNums = BigInt64Array.from([11n, 2n, -22n, 1n]);
   * myNums.toSorted((a, b) => Number(a - b)) // BigInt64Array(4) [-22n, 1n, 2n, 11n]
   * ```
   */
  toSorted(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array;
  /**
   * Copies the array and inserts the given bigint at the provided index.
   * @param index The index of the value to overwrite. If the index is
   * negative, then it replaces from the end of the array.
   * @param value The value to insert into the copied array.
   * @returns A copy of the original array with the inserted value.
   */
  with(index: number, value: bigint): BigInt64Array;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_adc2c36a346d130822c7ac020c80e79a1818126f997feb821f5c37ab767e219f {
  /** The size in bytes of each element in the array. */
  readonly BYTES_PER_ELEMENT: number;
  /** The ArrayBuffer instance referenced by the array. */
  readonly buffer: ArrayBufferLike;
  /** The length in bytes of the array. */
  readonly byteLength: number;
  /** The offset in bytes of the array. */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /** Yields index, value pairs for every entry in the array. */
  entries(): IterableIterator<[number, bigint]>;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns false,
   * or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: bigint, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: bigint, index: number, array: BigInt64Array) => any,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): bigint | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: bigint, fromIndex?: number): boolean;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  indexOf(searchElement: bigint, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /** Yields each index in the array. */
  keys(): IterableIterator<number>;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: bigint, fromIndex?: number): number;
  /** The length of the array. */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint,
    thisArg?: any,
  ): BigInt64Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: bigint,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => bigint,
  ): bigint;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: bigint,
      currentIndex: number,
      array: BigInt64Array,
    ) => U,
    initialValue: U,
  ): U;
  /** Reverses the elements in the array. */
  reverse(): this;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<bigint>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start?: number, end?: number): BigInt64Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls the
   * predicate function for each element in the array until the predicate returns true, or until
   * the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: bigint, index: number, array: BigInt64Array) => boolean,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts the array.
   * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
   */
  sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
  /**
   * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): BigInt64Array;
  /** Converts the array to a string by using the current locale. */
  toLocaleString(): string;
  /** Returns a string representation of the array. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): BigInt64Array;
  /** Yields each value in the array. */
  values(): IterableIterator<bigint>;
  [Symbol.iterator](): IterableIterator<bigint>;
  readonly [Symbol.toStringTag]: "BigInt64Array";
  [index: number]: bigint;
}
interface ref_ff00cdc893a0932d77897d48efa460385f67427cb6b9a3ecf9ed74a70949d14d {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int32Array) => any,
    thisArg?: any,
  ): Int32Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int32Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int32Array) => number,
    thisArg?: any,
  ): Int32Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int32Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int32Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int32Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int32Array;
  [index: number]: number;
}
interface ref_ff00cdc893a0932d77897d48efa460385f67427cb6b9a3ecf9ed74a70949d14d {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int32Array) => any,
    thisArg?: any,
  ): Int32Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int32Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int32Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int32Array) => number,
    thisArg?: any,
  ): Int32Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int32Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int32Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int32Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int32Array;
  [index: number]: number;
}
interface ref_700f81750d4b2c3bf4173519a0f050edd2fbdbacd1a6392d0d339ca789908637 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint32Array) => any,
    thisArg?: any,
  ): Uint32Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint32Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint32Array) => number,
    thisArg?: any,
  ): Uint32Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint32Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint32Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint32Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint32Array;
  [index: number]: number;
}
interface ref_700f81750d4b2c3bf4173519a0f050edd2fbdbacd1a6392d0d339ca789908637 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint32Array) => any,
    thisArg?: any,
  ): Uint32Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint32Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint32Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint32Array) => number,
    thisArg?: any,
  ): Uint32Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint32Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint32Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint32Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint32Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint32Array;
  [index: number]: number;
}
interface ref_663412ca5702543ffc9f9c76cc326ff5b62ff8a39814b417c2877ae32be18900 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int16Array) => any,
    thisArg?: any,
  ): Int16Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int16Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int16Array) => number,
    thisArg?: any,
  ): Int16Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int16Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int16Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int16Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int16Array;
  [index: number]: number;
}
interface ref_663412ca5702543ffc9f9c76cc326ff5b62ff8a39814b417c2877ae32be18900 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Int16Array) => any,
    thisArg?: any,
  ): Int16Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Int16Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Int16Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Int16Array) => number,
    thisArg?: any,
  ): Int16Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Int16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Int16Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Int16Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Int16Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Int16Array;
  [index: number]: number;
}
interface ref_ce22d768c8c71b932500036985d8411f5638999e4edd8740b77fe4f62f7e096e {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint8Array) => any,
    thisArg?: any,
  ): Uint8Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint8Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint8Array) => number,
    thisArg?: any,
  ): Uint8Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint8Array;
  [index: number]: number;
}
interface ref_ce22d768c8c71b932500036985d8411f5638999e4edd8740b77fe4f62f7e096e {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint8Array) => any,
    thisArg?: any,
  ): Uint8Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint8Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint8Array) => number,
    thisArg?: any,
  ): Uint8Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint8Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint8Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint8Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint8Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint8Array;
  [index: number]: number;
}
interface ref_bb94cbadce7514609d75de984abe6bd5226e923dcbb0da888233a36efe5f7085 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint16Array) => any,
    thisArg?: any,
  ): Uint16Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint16Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint16Array) => number,
    thisArg?: any,
  ): Uint16Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint16Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint16Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint16Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint16Array;
  [index: number]: number;
}
interface ref_bb94cbadce7514609d75de984abe6bd5226e923dcbb0da888233a36efe5f7085 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ArrayBufferLike;
  /**
   * The length in bytes of the array.
   */
  readonly byteLength: number;
  /**
   * The offset in bytes of the array.
   */
  readonly byteOffset: number;
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end?: number): this;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: number, start?: number, end?: number): this;
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls
   * the predicate function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: number, index: number, array: Uint16Array) => any,
    thisArg?: any,
  ): Uint16Array;
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any,
  ): number | undefined;
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: number, index: number, obj: Uint16Array) => boolean,
    thisArg?: any,
  ): number;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: number, index: number, array: Uint16Array) => void,
    thisArg?: any,
  ): void;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   *  search starts at index 0.
   */
  indexOf(searchElement: number, fromIndex?: number): number;
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the
   * resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Returns the index of the last occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
   * search starts at index 0.
   */
  lastIndexOf(searchElement: number, fromIndex?: number): number;
  /**
   * The length of the array.
   */
  readonly length: number;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that
   * contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the
   * callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: number, index: number, array: Uint16Array) => number,
    thisArg?: any,
  ): Uint16Array;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of
   * the callback function is the accumulated result, and is provided as an argument in the next
   * call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
   * callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an
   * argument instead of an array value.
   */
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => number,
    initialValue: number,
  ): number;
  /**
   * Calls the specified callback function for all the elements in an array, in descending order.
   * The return value of the callback function is the accumulated result, and is provided as an
   * argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
   * the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start
   * the accumulation. The first call to the callbackfn function provides this value as an argument
   * instead of an array value.
   */
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: number,
      currentIndex: number,
      array: Uint16Array,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Uint16Array;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(array: ArrayLike<number>, offset?: number): void;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Uint16Array;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the array until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: number, b: number) => number): this;
  /**
   * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
   * at begin, inclusive, up to end, exclusive.
   * @param begin The index of the beginning of the array.
   * @param end The index of the end of the array.
   */
  subarray(begin?: number, end?: number): Uint16Array;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): Uint16Array;
  [index: number]: number;
}
