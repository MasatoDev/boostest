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
  parentName: string;
}

export interface User {
  name: string;
  age: number;
  sex: 1 | 2;
  shor_name: 'john' | 'doe';
  from: From | AbroadFrom;
  details: Details;
  func: () => void;
  undefinedKey: undefined;
  anyKey: any;
  nullKey: null;
  optionalKey?: string;
  unknownKey: unknown;
  thisKey: ThisType<From>;
  conditionalKey: User extends From ? string : number;
  objectKey: object;
  voidKey: void;
  indexedKey: AbroadFrom['country'];
  intersectionKey: AbroadFrom & From;
  arrayKey: string[];
}
