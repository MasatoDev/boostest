import { User } from './anotherTypeFile';
import type JOB from './anotherTypeFile2.ts';
import { LegendMan } from './bet.ts';
import { Customer as NamedWorker } from './anotherClassFile';

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
};

interface Agree {
  name: string;
  age: number;
}

class Hello {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const mock1 = boostestUserMock<User>();
const mock2 = boostestJOBMock<JOB>();
const mock3 = boostestClassNamedWorkerMock(NamedWorker);
const mock4 = boostestLegendManMock<LegendMan>();
const mock5 = boostestClassHelloMock(Hello);
const mock6 = boostestBusMock<Bus>();
