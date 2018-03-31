# range-like-python

[![Build Status](https://travis-ci.org/chenjiandongx/range-like-python.svg?branch=master)](https://travis-ci.org/chenjiandongx/range-like-python)  [![NPM](https://img.shields.io/npm/v/range-like-python.svg)](https://www.npmjs.org/package/range-like-python) 

Python range() 函数的 Nodejs 实现。

### 安装

```shell
$ npm install range-like-python
```


### 示例
``` javascript
const range = require('range-like-python');

for (let i of range(5)) {
    console.log(i);
}
//
0
1
2
3
4

for (let i of range(1， 5)) {
    console.log(i);
}
//
1
2
3
4

for (let i of range(2, 10, 2)) {
    console.log(i);
}
//
2
4
6
8

实际上 range() 是一个生成器函数

r = range(10);
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
//
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
```

### 测试
``` shell
$ mocha
```

## LICENSE

MIT [@chenjiandongx](https://github.com/chenjiandongx)
