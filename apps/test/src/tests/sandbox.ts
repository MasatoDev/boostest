type main =
  ref_1c2b9426c50d3f1f8345680161a3e1a61225791b558c5036de2fd4d93b6164ff;
type ref_1c2b9426c50d3f1f8345680161a3e1a61225791b558c5036de2fd4d93b6164ff = {
  date: ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1;
  set: ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<string>;
  map: ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<
    string,
    number
  >;
  array: Array<string>;
  object: ref_6dd8a5b4ccb0ea5e09742813050cd1fbfb758b170fb30f52a04435079772754b;
  string: ref_394cf924e53ef238de8a6cf93934d8a0019d1715d2d78f385093831b9b321b89;
  number: ref_8087eb48cb01a60080bae68c3f2faddeac11e5d302730997215727c40c49c692;
  boolean: ref_3e8489bdec0e6afa4fcab3d6ae0f893a981dff7c670e8095b9980918be359e9a;
  symbol: ref_411498107742cc4c4f4bcdb9764309b8aa60f2c41bd81e326ea57606d67be365;
  function: Function;
  regexp: ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e;
  error: ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9;
  promise: Promise<string>;
  arrayBuffer: ref_7e184e08047c339d239b8cfdbf0db1ee96851dba9fd16fbdda0637b3c4d9819c;
  dataView: ref_8e25fad86f3f03713aafaf9c9166d902be81875fdaca8474259578feca50e14e;
  int8Array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
  uint8Array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
  uint8ClampedArray: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
  int16Array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
  uint16Array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
  int32Array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
  uint32Array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
  float32Array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
  float64Array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
  bigInt64Array: ref_3248ef5f4b4047debc8c76cc0ac4a2c4090adf5cd5ba81f8e614d9efa447db17;
  bigUint64Array: ref_09f57b9e2a37dd133d20c6e73186c731638110cb70debe82d51923be233ce2de;
  mapIterator: ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<
    [string, number]
  >;
  setIterator: ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<string>;
  arrayIterator: ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<string>;
  stringIterator: ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<string>;
  sharedArrayBuffer: ref_8b824e61ff5f15340ca9d87feb9341d5227a1c53f42be4bf67bb36833429318f;
  atomics: ref_af1ec3013fd74bdf3f83e61acf59e58f067e76e2428fc8a6fa67c5f00af5fe0d;
};
interface ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 {
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
interface ref_972fef1e2658d0c901c26985d69cd43d927a76b14aeb2311027d9986384a8bf1 {
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
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<
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
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<
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
interface ref_5cc761379cb7e5552c819b17d9abd9d8d577d5382655914d874c6b19f1843fd2<
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
interface ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<
  T,
> {
  [Symbol.iterator](): ref_016b24e4422f91f6a25688e52b3f5659dff0b7e12cf9731c5f6718ae2abae957<T>;
}
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<
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
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<
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
interface ref_6a5db54b03e98796442c8aa029163f3d70344b6f6d45bfa0470394b69d63b615<
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
interface ref_6dd8a5b4ccb0ea5e09742813050cd1fbfb758b170fb30f52a04435079772754b {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
  constructor: Function;
  /** Returns a string representation of an object. */
  toString(): string;
  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_6dd8a5b4ccb0ea5e09742813050cd1fbfb758b170fb30f52a04435079772754b;
  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(
    v: ref_7dd6e05bd33ef4aee94a4975b45c9d69043322939ad5128e8d2c5d3954dcd0ef,
  ): boolean;
  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(
    v: ref_6dd8a5b4ccb0ea5e09742813050cd1fbfb758b170fb30f52a04435079772754b,
  ): boolean;
  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(
    v: ref_7dd6e05bd33ef4aee94a4975b45c9d69043322939ad5128e8d2c5d3954dcd0ef,
  ): boolean;
}
declare type ref_7dd6e05bd33ef4aee94a4975b45c9d69043322939ad5128e8d2c5d3954dcd0ef =
  string | number | symbol;
interface ref_394cf924e53ef238de8a6cf93934d8a0019d1715d2d78f385093831b9b321b89 {
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
interface ref_394cf924e53ef238de8a6cf93934d8a0019d1715d2d78f385093831b9b321b89 {
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
interface ref_df316930e33dd8c70ce446a1269ebd0fc8c83648e97cba491329daddc19aef5e {
  /**
   * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
   * @param string The String object or string literal on which to perform the search.
   */
  exec(
    string: string,
  ): ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 | null;
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
interface ref_23fa0c841a57bf38f7d312b179d4bf4f1ae9a2038b2283150dc322460f3c1535 {
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
interface ref_ff31ef111dfa97c35912e3bf44127cdd571e12c971deb0ef0298bf2494e87afc {
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
interface ref_8087eb48cb01a60080bae68c3f2faddeac11e5d302730997215727c40c49c692 {
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
interface ref_8087eb48cb01a60080bae68c3f2faddeac11e5d302730997215727c40c49c692 {
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
interface ref_3e8489bdec0e6afa4fcab3d6ae0f893a981dff7c670e8095b9980918be359e9a {
  /** Returns the primitive value of the specified object. */
  valueOf(): boolean;
}
interface ref_411498107742cc4c4f4bcdb9764309b8aa60f2c41bd81e326ea57606d67be365 {
  /** Returns a string representation of an object. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}
interface ref_6fc26db0f9bd373b8bf42ef6e057d8f0024095c72ad45ac21cbb5ea0d91c1ef9 {
  name: string;
  message: string;
  stack?: string;
}
interface ref_7e184e08047c339d239b8cfdbf0db1ee96851dba9fd16fbdda0637b3c4d9819c {
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
  ): ref_7e184e08047c339d239b8cfdbf0db1ee96851dba9fd16fbdda0637b3c4d9819c;
}
interface ref_8e25fad86f3f03713aafaf9c9166d902be81875fdaca8474259578feca50e14e {
  readonly buffer: ref_7e184e08047c339d239b8cfdbf0db1ee96851dba9fd16fbdda0637b3c4d9819c;
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
interface ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
    ) => any,
    thisArg?: any,
  ): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
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
      obj: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      obj: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
    ) => number,
    thisArg?: any,
  ): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
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
      array: ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444,
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
  ): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_79a46e4af612fd7ad87b6f90c9a2582473b9f638bc5dc1056ecbe034433b4444;
  [index: number]: number;
}
type ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4 =
  ref_14caa56f75cc12839f319d0466ef0c34d6fed637cff4e2f798e08e8cfce5fff7[keyof ref_018751233f5a457d4e372c6e953141a891288d343910c2d58719a1c3d1ebc5aa];
interface ref_14caa56f75cc12839f319d0466ef0c34d6fed637cff4e2f798e08e8cfce5fff7 {
  ArrayBuffer: ArrayBuffer;
}
interface ref_14caa56f75cc12839f319d0466ef0c34d6fed637cff4e2f798e08e8cfce5fff7 {
  ArrayBuffer: ArrayBuffer;
}
interface ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<
  T,
> {
  readonly length: number;
  readonly [n: number]: T;
}
interface ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
    ) => any,
    thisArg?: any,
  ): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
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
      obj: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      obj: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
    ) => number,
    thisArg?: any,
  ): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
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
      array: ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491,
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
  ): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_9c7cfc1c0fc53bcbfd14ebe3753c2b50967d8619024d54d25ffdb48fbd5e4491;
  [index: number]: number;
}
interface ref_b71e24f4e1f96483aab0599ba2c674ce16a07534e5fd8bc6f906987ea159bbb4 {
  /**
   * Read-only. The length of the ArrayBuffer (in bytes).
   */
  readonly byteLength: number;
  /**
   * Returns a section of an ArrayBuffer.
   */
  slice(begin: number, end?: number): ArrayBuffer;
}
interface ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
    ) => any,
    thisArg?: any,
  ): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
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
      obj: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      obj: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
    ) => number,
    thisArg?: any,
  ): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
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
      array: ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b,
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
  ): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_b250039e27129ee34818466c1227c80d05ce3613b63946f52b7ab0d19241a52b;
  [index: number]: number;
}
interface ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
    ) => any,
    thisArg?: any,
  ): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
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
      obj: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      obj: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
    ) => number,
    thisArg?: any,
  ): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
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
      array: ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e,
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
  ): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_0168a30b48a79da9fc949baf503ca741b9220a5553a967dec31ea63375cec37e;
  [index: number]: number;
}
interface ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
    ) => any,
    thisArg?: any,
  ): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
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
      obj: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      obj: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
    ) => number,
    thisArg?: any,
  ): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
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
      array: ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77,
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
  ): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_ad1c010abb10faaf8cb6e1243de064f96d01db4486cf787e9a07bb0e1a710e77;
  [index: number]: number;
}
interface ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
    ) => any,
    thisArg?: any,
  ): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
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
      obj: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      obj: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
    ) => number,
    thisArg?: any,
  ): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
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
      array: ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05,
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
  ): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_1aef9991d982e810efe37e54117d4fc61023960f584a3aeca9c88e7b378c9f05;
  [index: number]: number;
}
interface ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
    ) => any,
    thisArg?: any,
  ): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
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
      obj: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      obj: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
    ) => number,
    thisArg?: any,
  ): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
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
      array: ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401,
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
  ): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_8ef7cceb643f3e32cddfe8f0f0971f1f469b8f83a4b44af12aaf369f7c0a0401;
  [index: number]: number;
}
interface ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
    ) => any,
    thisArg?: any,
  ): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
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
      obj: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      obj: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
    ) => number,
    thisArg?: any,
  ): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
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
      array: ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224,
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
  ): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_7647d2e880a334aa39c4449d79c3bcbe6bf4598b7433d49027c564062e9ee224;
  [index: number]: number;
}
interface ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8 {
  /**
   * The size in bytes of each element in the array.
   */
  readonly BYTES_PER_ELEMENT: number;
  /**
   * The ArrayBuffer instance referenced by the array.
   */
  readonly buffer: ref_475ccdf0e93a6b6ea300d6c268748a89878c3de7e92429bd81d20353d34d01b4;
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
    ) => any,
    thisArg?: any,
  ): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
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
      obj: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      obj: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
    ) => number,
    thisArg?: any,
  ): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
    ) => number,
  ): number;
  reduce(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
    ) => number,
  ): number;
  reduceRight(
    callbackfn: (
      previousValue: number,
      currentValue: number,
      currentIndex: number,
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
    ) => U,
    initialValue: U,
  ): U;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
  /**
   * Sets a value or an array of values.
   * @param array A typed or untyped array of values to set.
   * @param offset The index in the current array at which the values are to be written.
   */
  set(
    array: ref_8c46666a4f1598a02b981d1e5cf2f349de3af1c48c0457866b791517c6c0486c<number>,
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
  ): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
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
      array: ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8,
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
  ): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
  /**
   * Converts a number to a string by using the current locale.
   */
  toLocaleString(): string;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): ref_0136d70ba70860fb23f67c1459e516e961267e3f3cfebb820b31606c00c4ced8;
  [index: number]: number;
}
interface ref_3248ef5f4b4047debc8c76cc0ac4a2c4090adf5cd5ba81f8e614d9efa447db17 {
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
interface ref_3248ef5f4b4047debc8c76cc0ac4a2c4090adf5cd5ba81f8e614d9efa447db17 {
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
interface ref_3248ef5f4b4047debc8c76cc0ac4a2c4090adf5cd5ba81f8e614d9efa447db17 {
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
interface ref_f6f17c5e1e680131f10006aad38b762441fe14d7831ca911d0feb08983235f79<
  T,
> {
  [Symbol.iterator](): IterableIterator<T>;
}
interface ref_c5d50e998355430c875d91d39d4625a4248469c99ddefd990bbb25c332edd103<
  T,
> {
  readonly length: number;
  readonly [n: number]: T;
}
interface ref_d2242e31fef16af86bebf6ad1cfca9cccc68d492469ad4823349069fa3193564 {
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
interface ref_09f57b9e2a37dd133d20c6e73186c731638110cb70debe82d51923be233ce2de {
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
interface ref_09f57b9e2a37dd133d20c6e73186c731638110cb70debe82d51923be233ce2de {
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
interface ref_09f57b9e2a37dd133d20c6e73186c731638110cb70debe82d51923be233ce2de {
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
interface ref_8b824e61ff5f15340ca9d87feb9341d5227a1c53f42be4bf67bb36833429318f {
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
  ): ref_8b824e61ff5f15340ca9d87feb9341d5227a1c53f42be4bf67bb36833429318f;
  readonly [Symbol.species]: ref_8b824e61ff5f15340ca9d87feb9341d5227a1c53f42be4bf67bb36833429318f;
  readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}
interface ref_af1ec3013fd74bdf3f83e61acf59e58f067e76e2428fc8a6fa67c5f00af5fe0d {
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
interface ref_af1ec3013fd74bdf3f83e61acf59e58f067e76e2428fc8a6fa67c5f00af5fe0d {
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
interface ref_af1ec3013fd74bdf3f83e61acf59e58f067e76e2428fc8a6fa67c5f00af5fe0d {
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
interface ref_c3aa52bc0a38aea00a10818a2f0d776e131ce581de77e2cac7298072d68f8eb7 {
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
interface ref_c3aa52bc0a38aea00a10818a2f0d776e131ce581de77e2cac7298072d68f8eb7 {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_fe391c4d11087e6b2ec016069a95a19c6b963be7cf6d9be7e8b0bbd4aa34ba01 {
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
interface ref_fe391c4d11087e6b2ec016069a95a19c6b963be7cf6d9be7e8b0bbd4aa34ba01 {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): bigint | undefined;
}
interface ref_e6bd375ddf6cfd6b4d38b04626e1b9c36c0b5ed2066809635bd62a70d0539e47 {
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
interface ref_6374f45e2457c0d4e8f3576afc69e74f20280bb0fa2db72836d27d8ae91c08dc {
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
