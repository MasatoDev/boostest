import { PotatoChip, CalbeeLightlySalted, KoikeyaPridePotato, PringlesSourCreamAndOnion, KettleBrandSeaSaltAndVinegar, LayClassic } from './chips';

export default class ComplexClass {
  name: string;
  calbeeLightlySalted: CalbeeLightlySalted;
  koikeyaPridePotato: KoikeyaPridePotato;
  pringlesSourCreamAndOnion: PringlesSourCreamAndOnion;
  kettleBrandSeaSaltAndVinegar: KettleBrandSeaSaltAndVinegar;
  layClassic: LayClassic;
  chips: PotatoChip[];

  constructor(
    name: string,
    calbeeLightlySalted: CalbeeLightlySalted,
    koikeyaPridePotato: KoikeyaPridePotato,
    pringlesSourCreamAndOnion: PringlesSourCreamAndOnion,
    kettleBrandSeaSaltAndVinegar: KettleBrandSeaSaltAndVinegar,
    layClassic: LayClassic,
    chips: PotatoChip[]
  ) {
    this.name = name;
    this.calbeeLightlySalted = calbeeLightlySalted;
    this.koikeyaPridePotato = koikeyaPridePotato;
    this.pringlesSourCreamAndOnion = pringlesSourCreamAndOnion;
    this.kettleBrandSeaSaltAndVinegar = kettleBrandSeaSaltAndVinegar;
    this.layClassic = layClassic;
    this.chips = chips;
  }
}
