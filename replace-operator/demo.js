import { transform } from '@babel/core';
import currentPlugin from './index';

const code = `
    if (3 > 5) {}
`
const result = transform(code, {
  plugins: [
    [ currentPlugin ]
  ]
})

console.log('After transform:', result.code)

// 转化后 => 
// `
//     if (3 <= 5) {}
// `