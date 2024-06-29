#!/usr/bin/env node

import { boostest } from '../index';

const path = process.argv[2]; // 0: node, 1: スクリプト名, 2: 引数
if (path) {
  boostest(path);
} else {
  boostest('');
}
