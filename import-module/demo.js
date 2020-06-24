import { transform } from '@babel/core';
import currentPlugin from './index';

const code = `import { unqi, sort as _sort } from 'lodash'`
const result = transform(code, {
  plugins: [
    [currentPlugin]
  ]
})

console.log('After transform:', result.code)

// 转化后 => 
// import uniq from 'lodash/uniq'
// import _sort from 'lodash/sort'