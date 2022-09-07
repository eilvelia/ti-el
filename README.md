# ti-el

[![npm](https://img.shields.io/npm/v/ti-el.svg)](https://www.npmjs.com/package/ti-el)

A [TL](https://core.telegram.org/mtproto/TL) (Type Language) parser.
Uses [pegjs](https://github.com/pegjs/pegjs).

## Installation

```console
$ npm install ti-el
```

## Usage

```js
const { parse, tldoc } = require('ti-el')
const ast = parse('req_pq#60469778 nonce:int128 = ResPQ;')
console.dir(ast, { depth: null })
```

- [The AST types](ast.js)
- [The PEG.js grammar](src/tl.pegjs)

You can import Flow or TypeScript types for the AST:

```typescript
import type { TLProgram, CombinatorDeclaration /* ... */ } from 'tl-parser/ast'
```

The `tldoc` function can parse documentation comments like the following, which
are used in TDLib:

```tl
//@class MaskPoint @description Part of the face, relative to which a mask should be placed

//@description A mask should be placed relatively to the mouth
maskPointMouth = MaskPoint;

//@description A mask should be placed relatively to the chin
maskPointChin = MaskPoint;

//@description Position on a photo where a mask should be placed @point Part of the face, relative to which the mask should be placed
//@x_shift Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)
//@y_shift Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)
//@scale Mask scaling coefficient. (For example, 2.0 means a doubled size)
maskPosition point:MaskPoint x_shift:double y_shift:double scale:double = MaskPosition;
```

This package also provides a `ti-el` console utility.

## Example

```tl
int ? = Int;
---functions---
req_pq#60469778 nonce:int128 = ResPQ;
```

--->

```js
{ type: 'TLProgram',
  start: { offset: 1, line: 2, column: 1 },
  end: { offset: 68, line: 5, column: 1 },
  constructors:
   { type: 'ConstructorDeclarations',
     start: { offset: 1, line: 2, column: 1 },
     end: { offset: 68, line: 5, column: 1 },
     declarations:
      [ { type: 'BuiltinCombinatorDeclaration',
          start: { offset: 1, line: 2, column: 1 },
          end: { offset: 13, line: 2, column: 13 },
          id:
           { type: 'ShortCombinatorName',
             start: { offset: 1, line: 2, column: 1 },
             end: { offset: 4, line: 2, column: 4 },
             name: 'int' },
          result:
           { type: 'BoxedTypeIdentifier',
             start: { offset: 9, line: 2, column: 9 },
             end: { offset: 12, line: 2, column: 12 },
             name: 'Int' } } ] },
  functions:
   { type: 'FunctionDeclarations',
     start: { offset: 1, line: 2, column: 1 },
     end: { offset: 68, line: 5, column: 1 },
     declarations:
      [ { type: 'CombinatorDeclaration',
          start: { offset: 30, line: 4, column: 1 },
          end: { offset: 67, line: 4, column: 38 },
          id:
           { type: 'FullCombinatorName',
             start: { offset: 30, line: 4, column: 1 },
             end: { offset: 45, line: 4, column: 16 },
             name: 'req_pq',
             magic: '60469778' },
          optionalArgs: [],
          args:
           [ { type: 'Argument',
               start: { offset: 46, line: 4, column: 17 },
               end: { offset: 58, line: 4, column: 29 },
               id:
                { type: 'VariableIdentifier',
                  start: { offset: 46, line: 4, column: 17 },
                  end: { offset: 51, line: 4, column: 22 },
                  name: 'nonce' },
               conditionalDef: null,
               argType:
                { type: 'TypeExpression',
                  start: { offset: 52, line: 4, column: 23 },
                  end: { offset: 58, line: 4, column: 29 },
                  expression:
                   { type: 'SimpleTypeIdentifier',
                     start: { offset: 52, line: 4, column: 23 },
                     end: { offset: 58, line: 4, column: 29 },
                     name: 'int128' } } } ],
          bang: false,
          resultType:
           { type: 'ResultType',
             start: { offset: 61, line: 4, column: 32 },
             end: { offset: 66, line: 4, column: 37 },
             id:
              { type: 'BoxedTypeIdentifier',
                start: { offset: 61, line: 4, column: 32 },
                end: { offset: 66, line: 4, column: 37 },
                name: 'ResPQ' },
             expression:
              { type: 'EExpression',
                start: { offset: 61, line: 4, column: 32 },
                end: { offset: 66, line: 4, column: 37 },
                subexpressions: [] } } } ] } }
```

---

This library was written in 2018. Previously, the `ti-el` package was named
`tl-parser` on npm. This library is meant to be replaced by
[camlproto/tl](https://github.com/Bannerets/camlproto/tree/2644e33bc7c86e5308514b8734b9e602c279b80a/src/tl)
(written in OCaml) in the future, but that one cannot parse tldoc yet.

See [this](https://github.com/Bannerets/ti-el/tree/f5b25c659d7c4c3efe7dccdaab5f38e6d42fd96f)
for the old structure of this repository.

For transforming TDLib's `td_api.tl` into TypeScript and Flow typings using
`tldoc`, see `tdlib-types` in the `tdl` repository.

There's also [tl-transform](tl-transform/), but it's currently not used anywhere
and deprecated.

The project is not actively maintained.
