import { boostestUser, boostestJOB, boostestOS, boostestCustomer, boostestCafe, boostestRank, boostestCustomer2 } from './boostest';

import { User } from './types/user';
import type Job from './types/job';
import { Windows } from './types/windows';
import { Customer, Rank } from './types/customer';
import Cafe from './types/caffe';

const userInterfaceTestData = boostestUser<User>({
  name: 'override_name',
  age: 42,
});
const JobTypeTestData = boostestJOB<Job>({
  name: 'override_name',
  salary: 100,
});
const deepFileTestData = boostestOS<Windows>();

const rank = boostestRank<Rank>({
  name: 'override_name',
});
const customerClassTestData = boostestCustomer<typeof Customer>(Customer);
const customerClassTestData2 = boostestCustomer2<typeof Customer>(Customer);
const cafeTestData = boostestCafe<typeof Cafe>(Cafe);

console.log('\n\n------------------------');
console.log('userInterfaceMock', userInterfaceTestData);
console.log('------------------------');
console.log('JobTypeMock', JobTypeTestData);
console.log('------------------------');
console.log('deepFileMock', deepFileTestData);
console.log('------------------------');
console.log('customerClassMock', customerClassTestData);
console.log('------------------------');
console.log('customerClassMock2', customerClassTestData2);
console.log('------------------------');
console.log('cafeClassMock', cafeTestData);
