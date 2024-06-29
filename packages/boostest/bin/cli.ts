import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { boostest } from '../index';

const path = process.argv[2]; // 0: node, 1: スクリプト名, 2: 引数
if (path) {
  boostest(path);
} else {
  boostest('');
}

// const argv = yargs(hideBin(process.argv))
//   .command(
//     'boostest ./src/hoge.ts',
//     'create function that makes test data',
//     () => {},
//     (argv) => {
//       console.log('aaaaa');
//       console.log(argv._);
//       console.log(argv);
//       // createMock(argv._);
//     }
//   )
//   .option('target path', {
//     alias: 'p',
//     description: 'target file path to create boostest function',
//     type: 'string',
//   })
//   .parse();
