import { JOB, User } from './anotherTypeFile';
import { Customer } from './anotherClassFile';

const boostestMock = <T>(arg?: any): T => {
  return arg;
};

export const user: User = {
  name: 'John Doe',
  age: 30,
};

const mock1 = boostestMock<User>();
const mock2 = boostestMock<JOB>();
const mock3 = boostestMock(Customer);

/**
 * generic type
 * generic interface
 *
 * value class
 */
