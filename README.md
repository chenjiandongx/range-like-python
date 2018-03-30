# range-like-python

习惯了 Python 的 range 写法，也想给 Nodejs 也模仿一个。

## 安装

```shell
$ npm install range-like-python
```


## 使用
``` javascript
const range = require('range-like-python');

for (let i of range(5)) {
    console.log(i);
}

// 输出
0
1
2
3
4

for (let i of range(1， 5)) {
    console.log(i);
}

// 输出
1
2
3
4

for (let i of range(2, 10, 2)) {
    console.log(i);
}

// 输出
2
4
6
8
```

## LICENSE

MIT [@chenjiandongx](https://github.com/chenjiandongx)
