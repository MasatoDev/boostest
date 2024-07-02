export interface PotatoChip {
  name: string;
  price: number; // 円
}

export interface CalbeeLightlySalted extends PotatoChip {
  name: 'Calbee Lightly Salted';
  price: 120;
}

export interface KoikeyaPridePotato extends PotatoChip {
  name: 'Koikeya Pride Potato';
  price: 150;
}

export interface PringlesSourCreamAndOnion extends PotatoChip {
  name: 'Pringles Sour Cream & Onion';
  price: 200;
}

export interface KettleBrandSeaSaltAndVinegar extends PotatoChip {
  name: 'Kettle Brand Sea Salt & Vinegar';
  price: 250;
}

export interface LayClassic extends PotatoChip {
  name: "Lay's Classic";
  price: 130;
}
