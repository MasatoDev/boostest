import ComplexInterfaceChips from './deepfiles/lib/comp_interface';

class ClassObj {
  name: string;
  chips: ComplexInterfaceChips;
  anoChips: ComplexInterfaceChips;

  constructor({ name, chips }: { name: string; chips: ComplexInterfaceChips }, huga: { anoChips: ComplexInterfaceChips }) {
    this.name = name;
    this.chips = chips;
    this.anoChips = huga.anoChips;
  }
}

export default ClassObj;
