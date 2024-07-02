import ComplexInterfaceChips from './deepfiles/lib/comp_interface';

export default class ExportDefaultClassWithDecl {
  name: string;
  chips: ComplexInterfaceChips;

  constructor(name: string, chips: ComplexInterfaceChips) {
    this.name = name;
    this.chips = chips;
  }
}
