# tl-transform

[![npm](https://img.shields.io/npm/v/tl-transform.svg)](https://www.npmjs.com/package/tl-transform)

Translates TL to TypeScript / Flow.

## Installation

```console
$ npm i tl-transform
```


## Usage

### From command line

#### Flow / TypeScript

```sh
$ npx tl-transform schema.tl > a.js
# or
$ npx tl-transform schema.tl > a.ts
```

### From JavaScript

```js
import fs from 'fs'
import { transform } from 'tl-transform'
// function transform: (src: string, cfg?: Config) => string

const source = fs.readFileSync('schema.tl').toString()
const output = transform(source)
console.log(output)
```

See also [config.js](src/config.js).
