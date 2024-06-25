import { User } from '../types/user';
import Job from '../types/job';

const userInterfaceTestData = boostestUser<User>({
  name: 'override_name',
  age: 42,
});
const JobTypeTestData = boostestJOB<Job>({
  name: 'override_name',
  salary: 100,
});

console.log('\n\n------------------------');
console.log('userInterfaceMock', userInterfaceTestData);
console.log('------------------------');
console.log('JobTypeMock', JobTypeTestData);
console.log('------------------------');

/**
 * TODO:
 * - export defaultへの対応
 */
