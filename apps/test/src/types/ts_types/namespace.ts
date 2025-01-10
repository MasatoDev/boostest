export declare namespace RefTypeNamespace {
  type NoneExportAliasType = RefClass;

  export type RefTypeAlias = {
    name: string;
    ver: number;
    interfaceRef: RefTypeInterface;
  };
}

interface RefTypeInterface {
  name: string;
  ver: number;
}

class RefClass {
  name: string;
  ver: number;
  option: RefTypeInterface;

  constructor(name: string, ver: number, option: RefTypeInterface) {
    this.name = name;
    this.ver = ver;
    this.option = option;
  }
}
