type From = {
  country: string;
  city: string;
};

type AbroadFrom = {
  country: string;
  city: string;
  abroad: boolean;
};

interface Details {
  ownerName: string;
}

export class Store {
  name: string;
  from: From | AbroadFrom;
  condition: Details extends Details ? Details : Store;
  sex: 1 | 2;
  shor_name: 'john' | 'doe';
  details: Details;
  func: () => void;
  undefinedKey: undefined;
  anyKey: any;
  nullKey: null;
  optionalKey?: string;
  unknownKey: unknown;
  thisKey: ThisType<From>;
  objectKey: object;
  voidKey: void;
  indexedKey: AbroadFrom['country'];
  intersectionKey: AbroadFrom & From;
  arrayKey: string[];

  constructor(
    name: string,
    from: From | AbroadFrom,
    condition: Details extends Details ? Details : Store,
    sex: 1 | 2,
    shor_name: 'john' | 'doe',
    details: Details,
    func: () => void,
    undefinedKey: undefined,
    anyKey: any,
    nullKey: null,
    // optionalKey?: string,
    unknownKey: unknown,
    thisKey: ThisType<From>,
    objectKey: object,
    voidKey: void,
    indexedKey: AbroadFrom['country'],
    intersectionKey: AbroadFrom & From,
    arrayKey: string[]
  ) {
    this.name = name;
    this.from = from;
    this.condition = condition;
    this.sex = sex;
    this.shor_name = shor_name;
    this.details = details;
    this.undefinedKey = undefinedKey;
    this.anyKey = anyKey;
    this.nullKey = nullKey;
    // this.optionalKey = optionalKey;
    this.unknownKey = unknownKey;
    this.thisKey = thisKey;
    this.objectKey = objectKey;
    this.voidKey = voidKey;
    this.indexedKey = indexedKey;
    this.intersectionKey = intersectionKey;
    this.arrayKey = arrayKey;
  }
}
