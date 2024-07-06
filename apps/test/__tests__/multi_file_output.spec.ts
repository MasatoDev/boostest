import { expect } from '@jest/globals';
const fs = require('fs');

test('boostest multi file 1 output correctly', () => {
  try {
    const data = fs.readFileSync('./src/multi_file_test/multi_file_test_test_data.ts', 'utf-8');

    expect(data).toMatchSnapshot();
  } catch (err) {
    console.log('err', err);
  }
});

test('boostest multi file 2 output correctly', () => {
  try {
    const data = fs.readFileSync('./src/multi_file_test/multi_file_test2_test_data.ts', 'utf-8');

    expect(data).toMatchSnapshot();
  } catch (err) {
    console.log('err', err);
  }
});
