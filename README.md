# Hadamard matrix

<!-- ![Last version](https://img.shields.io/github/tag/Tommytrg/sudoku-validate.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Tommytrg/sudoku-validate/master.svg?style=flat-square)](https://travis-ci.org/Tommytrg/sudoku-validate)
[![Coverage Status](https://img.shields.io/coveralls/Tommytrg/sudoku-validate.svg?style=flat-square)](https://coveralls.io/github/Tommytrg/sudoku-validate)
[![Dependency status](https://img.shields.io/david/Tommytrg/sudoku-validate.svg?style=flat-square)](https://david-dm.org/Tommytrg/sudoku-validate)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Tommytrg/sudoku-validate.svg?style=flat-square)](https://david-dm.org/Tommytrg/sudoku-validate#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/sudoku-validate.svg?style=flat-square)](https://www.npmjs.org/package/sudoku-validate)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Tommytrg)

**NOTE:** more badges availables in [shields.io](https://shields.io/) -->

> A Hadamard matrix generator of order n using memoization. 

## Install

```bash
$ npm install hadamard-matrix --save
```

 ## Usage

```js
var hadamard = require('hadamard-matrix')

hadamard(1)
//=> return [1]

hadamard(2)
//=> return [
//           [ 1,  1 ],  
//           [ 1, -1 ]
//          ]

hadamard(4)
//=> return [
//           [ 1,  1,  1,  1 ],  
//           [ 1, -1,  1, -1 ],
//           [ 1,  1, -1, -1 ],  
//           [ 1, -1, -1,  1 ],
//          ]
```


## API

### hadamard(order)

#### order
*Required*<br>
Type: `number`

Order of the Hadamard matrix it will return. It could´t be a odd number.

#### result

Type: `object`<br>

Result will be a matrix with entries ± 1. 



## Information

You can read information about Hadamard matrix in [https://en.wikipedia.org/wiki/Hadamard_matrix](https://en.wikipedia.org/wiki/Hadamard_matrix)



## License

MIT © [tommytrg](https://github.com/Tommytrg).
