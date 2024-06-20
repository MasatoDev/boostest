// TODO: auto add import statement
import { boostestUser, boostestJOB, boostestOS, boostestCustomer } from './boostest';

import { User } from './types/user';
import type Job from './types/job';
import { Windows } from './types/windows';
import { Customer } from './types/customer';

const userInterfaceMock = boostestUser<User>();
const JobTypeMock = boostestJOB<Job>();
const deepFileMock = boostestOS<Windows>();
const customerClassMock = boostestCustomer<typeof Customer>(Customer);

console.log('\n\n------------------------');
console.log('userInterfaceMock', userInterfaceMock);
console.log('------------------------');
console.log('JobTypeMock', JobTypeMock);
console.log('------------------------');
console.log('deepFileMock', deepFileMock);
console.log('------------------------');
console.log('customerClassMock', customerClassMock);

/**
 * TODO:
 * - export defaultへの対応
 */
