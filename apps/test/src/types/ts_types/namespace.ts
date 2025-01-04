export namespace RefTypeNamespace {
  export type RefTypeAlias = {
    name: string;
    ver: number;
    interfaceRef: RefTypeInterface;
  };

  export class Hoge {
    name: string;
    ver: number;
    constructor(name: string, ver: number) {
      this.name = name;
      this.ver = ver;
    }
  }
}

interface RefTypeInterface {
  name: string;
  ver: number;
}
