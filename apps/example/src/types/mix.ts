import ComplexInterfaceChips from './deepfiles/lib/comp_interface';
export type { ComplexChipsType as MixCompTSAlias } from './deepfiles/lib/comp_type_alias';

interface MixInterface {
  name: string;
  chips: ComplexInterfaceChips;
}

type MixTSAlias = {
  name: string;
  chips: ComplexInterfaceChips;
};

export type { MixInterface as AnoMixInterface, MixTSAlias as default };
