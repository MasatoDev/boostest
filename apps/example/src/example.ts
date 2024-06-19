import { User } from './anotherTypeFile';
import type JOB from './anotherTypeFile2.ts';
import { LegendMan } from './bet.ts';
import { Customer as NamedWorker } from './anotherClassFile';
import { GoodMorning } from './good';
import { boostestClassHelloMock, boostestClassNamedWorkerMock } from './boostest.ts';

const boostestMock = <T>(arg?: any): T => {
  return arg;
};

export const user: User = {
  name: 'John Doe',
  age: 30,
};

type Bus = {
  name: string;
  maxSpeed: number;
  additional: GoodMorning;
};

interface Agree {
  name: string;
  age: number;
  user: User;
}

class Hello {
  name: string;
  age: number;
  additional: GoodMorning;

  constructor(name: string, additional: GoodMorning) {
    this.name = name;
    this.age = 30;
    this.additional = additional;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}

// const mock1 = boostestUserMock<User>();
const mock2 = boostestClassNamedWorkerMock<typeof NamedWorker>(NamedWorker);
const mock3 = boostestClassHelloMock<typeof Hello>(Hello);
// const mock4 = boostestBusMock<Bus>();
// const mock5 = boostestLegendManMock<LegendMan>();
// const mock6 = boostestLegendManMock<Agree>();

// TODO: export defaultへの対応
// const mock2 = boostestJOBMock<JOB>();
