import ComplexInterfaceChips from './deepfiles/lib/comp_interface';

class ClassObj {
  name: string;
  chips: ComplexInterfaceChips;

  constructor({ name, chips }: { name: string; chips: ComplexInterfaceChips }) {
    this.name = name;
    this.chips = chips;
  }
}

export default ClassObj;
