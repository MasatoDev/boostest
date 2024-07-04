import { expect } from '@jest/globals';
const fs = require('fs');

it.only('boostest main file output correctly', () => {
  try {
    const data = fs.readFileSync('./src/main_test_test_data.ts', 'utf-8');

    expect(data).toMatchSnapshot();
  } catch (err) {
    console.log('err', err);
  }
});
