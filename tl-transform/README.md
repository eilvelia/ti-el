# tl-transform

This is an old package that translates TL to Typescript / Flow, now deprecated.

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

### Examples

See [l82.js](l82.js).
