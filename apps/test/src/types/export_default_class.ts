import ComplexInterfaceChips from './deepfiles/lib/comp_interface';

class ExportDefaultClass {
  name: string;
  chips: ComplexInterfaceChips;

  constructor(name: string, chips: ComplexInterfaceChips) {
    this.name = name;
    this.chips = chips;
  }
}

export default ExportDefaultClass;
