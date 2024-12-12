type main =
  ref_e15dfb6895878c7b191369e0ecbee785639ac9498de513804eaeb0a31034b00c;
type ref_e15dfb6895878c7b191369e0ecbee785639ac9498de513804eaeb0a31034b00c = {
  date: ref_7352b9cffadade4f4e36b5e3a6bd6cdb1868cb3f3b555bfca5d94704bd32c6b7;
  set: ref_d6b9e87231aaeae4033794ff4eb7ca20ecac905022a89ca8f7a40f6135fed95d<string>;
  map: ref_f9871b35496b2afd5da5eb9a18e06e79687798366a134bb9c0e1b2b74f531888<
    string,
    number
  >;
  array: Array<string>;
  object: ref_1c777d0d0629201eac723655aa3b6fc99c0c0c4b4af6543f2595c1dd7feafd09;
  string: ref_0823d6916e883ec606df8d9e812a147d07c02d8eb05f7ba0062f6b61adfa2fd1;
  number: ref_2209f86e7f8d68896a59ee3b9a69c483cb3ea06fbc490d7fc8644cb00c96f399;
  boolean: ref_25a920e43c075a5035704b7ded9aa77cf95b4bbf7173e108278d42407de4b4fc;
  symbol: ref_52a01b28ce3cdbd9ca08ff7f3ddf92ed580939a611d28c93630e7ea961337f5e;
  function: Function;
  regexp: ref_43bb44f56591822e3d510d6be9bcf76d7834a12a7e1d65b8e7c0bd449710c621;
  error: ref_b6d4f6f02ee95076d97b5a32ed480b2aada47affbcca266dbd670bafb779e50c;
  promise: Promise<string>;
  arrayBuffer: ref_21f5cf4f3d187077a990d596856c3e7d9ceb090b5c039782e947f47a2c5a28d2;
};
interface ref_7352b9cffadade4f4e36b5e3a6bd6cdb1868cb3f3b555bfca5d94704bd32c6b7 {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: ref_a807896bc225e10ccd46a35afecb7e237f6745fbebd06d99e2cb666ff73afebd,
  ): string;
  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | Array<string>,
    options?: ref_a807896bc225e10ccd46a35afecb7e237f6745fbebd06d99e2cb666ff73afebd,
  ): string;
  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | Array<string>,
    options?: ref_a807896bc225e10ccd46a35afecb7e237f6745fbebd06d99e2cb666ff73afebd,
  ): string;
}
interface ref_a807896bc225e10ccd46a35afecb7e237f6745fbebd06d99e2cb666ff73afebd {
  localeMatcher?: "best fit" | "lookup" | undefined;
  weekday?: "long" | "short" | "narrow" | undefined;
  era?: "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  timeZoneName?:
    | "short"
    | "long"
    | "shortOffset"
    | "longOffset"
    | "shortGeneric"
    | "longGeneric"
    | undefined;
  formatMatcher?: "best fit" | "basic" | undefined;
  hour12?: boolean | undefined;
  timeZone?: string | undefined;
}
interface ref_d6b9e87231aaeae4033794ff4eb7ca20ecac905022a89ca8f7a40f6135fed95d<
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
      set: ref_ab11170a4abe9a51260f63467694b89b6f1e2f0be47b13f4237614173810bb82<T>,
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
declare var ref_ab11170a4abe9a51260f63467694b89b6f1e2f0be47b13f4237614173810bb82;
interface ref_f9871b35496b2afd5da5eb9a18e06e79687798366a134bb9c0e1b2b74f531888<
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
      map: ref_302516919979031b059425919840bd9df188046262c62d37fbdb7e2abdfb7be7<
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
declare var ref_302516919979031b059425919840bd9df188046262c62d37fbdb7e2abdfb7be7;
declare var ref_1c777d0d0629201eac723655aa3b6fc99c0c0c4b4af6543f2595c1dd7feafd09;
declare type ref_299fd5d79893be1f75fb8103ba1d48e154763a18f4d70e48f9d554081d182aa3 =
  string | number | symbol;
interface ref_0823d6916e883ec606df8d9e812a147d07c02d8eb05f7ba0062f6b61adfa2fd1 {
  /**
   * Determines whether two strings are equivalent in the current or specified locale.
   * @param that String to compare to target string
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
   * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
   */
  localeCompare(
    that: string,
    locales?: string | Array<string>,
    options?: ref_26ae66116fca4dfb55781ef9945f593bbfcfef1713d2829659323f0a0ad2b1e6,
  ): number;
}
declare var ref_43bb44f56591822e3d510d6be9bcf76d7834a12a7e1d65b8e7c0bd449710c621;
interface ref_5ca6667bf718e26e250b54fdcd9ae316402c52d8105c034b31859dfab2073af7 {
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
interface ref_676adf24b098014898298ddd17bee77a6d923e9b4b418fa62497e9e81836662e {
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
interface ref_26ae66116fca4dfb55781ef9945f593bbfcfef1713d2829659323f0a0ad2b1e6 {
  usage?: "sort" | "search" | undefined;
  localeMatcher?: "lookup" | "best fit" | undefined;
  numeric?: boolean | undefined;
  caseFirst?: "upper" | "lower" | "false" | undefined;
  sensitivity?: "base" | "accent" | "case" | "variant" | undefined;
  collation?:
    | "big5han"
    | "compat"
    | "dict"
    | "direct"
    | "ducet"
    | "emoji"
    | "eor"
    | "gb2312"
    | "phonebk"
    | "phonetic"
    | "pinyin"
    | "reformed"
    | "searchjl"
    | "stroke"
    | "trad"
    | "unihan"
    | "zhuyin"
    | undefined;
  ignorePunctuation?: boolean | undefined;
}
interface ref_2209f86e7f8d68896a59ee3b9a69c483cb3ea06fbc490d7fc8644cb00c96f399 {
  /**
   * Converts a number to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: ref_fbb84353fc81be8ae65ef8d1e49f949d37915154f618c36f3bffa311e815987b,
  ): string;
}
interface ref_fbb84353fc81be8ae65ef8d1e49f949d37915154f618c36f3bffa311e815987b {
  localeMatcher?: "lookup" | "best fit" | undefined;
  style?:
    | ref_165181e0c92b74750002aac77ef72dac85fd288e67726416cbc8a3765a113498
    | undefined;
  currency?: string | undefined;
  currencyDisplay?:
    | ref_1dbf263ee7e316e9563fc4aba69e108d0f38ea880036b6be2752e384367ec503
    | undefined;
  useGrouping?:
    | ref_03650dd22177dd896e48dae4a51e995141486974d50a29188dcb63892630354c
    | undefined;
  minimumIntegerDigits?: number | undefined;
  minimumFractionDigits?: number | undefined;
  maximumFractionDigits?: number | undefined;
  minimumSignificantDigits?: number | undefined;
  maximumSignificantDigits?: number | undefined;
}
type ref_165181e0c92b74750002aac77ef72dac85fd288e67726416cbc8a3765a113498 =
  keyof ref_d449c1bae9483d716dbda60ee51f051863084baa0e6b3b2b074d75a9386d2568;
interface ref_d449c1bae9483d716dbda60ee51f051863084baa0e6b3b2b074d75a9386d2568 {
  unit: never;
}
type ref_1dbf263ee7e316e9563fc4aba69e108d0f38ea880036b6be2752e384367ec503 =
  keyof ref_48f2f89e3124486bfe49399d0311c71b740d46b5ff4197815c833d3860e9e7e6;
interface ref_48f2f89e3124486bfe49399d0311c71b740d46b5ff4197815c833d3860e9e7e6 {
  narrowSymbol: never;
}
type ref_03650dd22177dd896e48dae4a51e995141486974d50a29188dcb63892630354c =
  {} extends ref_ed326535a3ffc7253e940f1d44be46cd549509d14a85d9f4e1a56e43082a12f0
    ? boolean
    :
        | keyof ref_ed326535a3ffc7253e940f1d44be46cd549509d14a85d9f4e1a56e43082a12f0
        | "true"
        | "false"
        | boolean;
interface ref_ed326535a3ffc7253e940f1d44be46cd549509d14a85d9f4e1a56e43082a12f0 {}
declare var ref_25a920e43c075a5035704b7ded9aa77cf95b4bbf7173e108278d42407de4b4fc;
interface ref_52a01b28ce3cdbd9ca08ff7f3ddf92ed580939a611d28c93630e7ea961337f5e {
  /** Returns a string representation of an object. */
  toString(): string;
  /** Returns the primitive value of the specified object. */
  valueOf(): symbol;
}
declare var ref_b6d4f6f02ee95076d97b5a32ed480b2aada47affbcca266dbd670bafb779e50c;
declare var ref_21f5cf4f3d187077a990d596856c3e7d9ceb090b5c039782e947f47a2c5a28d2;
