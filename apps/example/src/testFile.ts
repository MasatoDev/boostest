import { Customer as NamedWorker } from './anotherClassFile';

class Job {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  tellMySalary() {
    return `Hey, I gain ${this.salary},000 dollars`;
  }
}

const mock2 = boostestClassNamedWorkerMock<typeof NamedWorker>(NamedWorker);
const jobMock = boostestClassJobMock<typeof Job>(Job);
