const boostestMock = <T>(arg?: any): T => {
  return arg;
};

export interface User {
  name: string;
  age: number;
}

type JOB = {
  name: string;
  salary: number;
};

class Customer implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const user: User = {
  name: 'John Doe',
  age: 30,
};

const mock1 = boostestMock<User>();
const mock2 = boostestMock(Customer);
