export type { ComplexChipsType as MixCompTSAlias } from '@/deepfiles/lib/comp_type_alias';

interface MixInterfaceFirst {
  name: 'MixInterfaceFirst';
}

interface MixInterfaceSecond {
  name: 'MixInterfaceSecond';
}

export type { MixInterfaceFirst };
export default MixInterfaceSecond;
