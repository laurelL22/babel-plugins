import { transform } from '@babel/core';
import currentPlugin from './index';

const code = `
    class Page {
        onLoad() {
            console.log('Hello')
        }
    }
`
const result = transform(code, {
  plugins: [
    [currentPlugin, {
        "functionName": "onLoad" // 插件选项
    }]
  ]
})

console.log('After transform:', result.code)

// 转化后 => 
// `
//     class Page {
//         onLoad() {
//             console.log('Hello')
//             console.log('World')
//         }
//     }
// `