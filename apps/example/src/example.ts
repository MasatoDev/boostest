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

class Hello {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const mock1 = boostestMock<User>();
const mock2 = boostestMock<JOB>();
const mock3 = boostestMock(NamedWorker);
const mock4 = boostestMock<LegendMan>();
const mock5 = boostestMock(Hello);
const mock6 = boostestMock<Bus>();
