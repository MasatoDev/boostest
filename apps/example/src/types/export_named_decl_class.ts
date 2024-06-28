import ComplexInterfaceChips from './deepfiles/lib/comp_interface';

class ExportNamedDeclClass {
  name: string;
  chips: ComplexInterfaceChips;

  constructor(name: string, chips: ComplexInterfaceChips) {
    this.name = name;
    this.chips = chips;
  }
}

export { ExportNamedDeclClass as AnoExportNamedDeclClass };
