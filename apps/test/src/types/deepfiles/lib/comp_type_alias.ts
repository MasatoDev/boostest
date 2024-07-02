import { PotatoChip, CalbeeLightlySalted, KoikeyaPridePotato, PringlesSourCreamAndOnion, KettleBrandSeaSaltAndVinegar, LayClassic } from './chips';

export type ComplexChipsType = {
  name: string;
  age: number;
  sex: 1 | 2;
  short_name: 'john' | 'doe';
  favorite: CalbeeLightlySalted | KoikeyaPridePotato;
  mostFav: PringlesSourCreamAndOnion;
  func: () => void;
  undefinedKey: undefined;
  anyKey: any;
  nullKey: null;
  optionalKey?: string;
  unknownKey: unknown;
  thisKey: ThisType<LayClassic>;
  conditionalKey: CalbeeLightlySalted extends PotatoChip ? KettleBrandSeaSaltAndVinegar : false;
  objectKey: object;
  voidKey: void;
  indexedKey: PotatoChip['name'];
  intersectionKey: LayClassic & KoikeyaPridePotato;
  arrayKey: PotatoChip[];
};
