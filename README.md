# ti-el

[![npm](https://img.shields.io/npm/v/tl-parser.svg)](https://www.npmjs.com/package/tl-parser)

[TL](https://core.telegram.org/mtproto/TL) (Type Language) parser.  
Uses [pegjs](https://github.com/pegjs/pegjs).

wip

## Installation

```console
$ npm i tl-parser
```

## Usage

From JavaScript:

```js
const { parse } = require('tl-parser')
const ast = parse('req_pq#60469778 nonce:int128 = ResPQ;')
console.dir(ast, { depth: null })
```

[AST typings](packages/tl-parser/ast.h.js)  
[Grammar](packages/tl-parser/src/tl.pegjs)

Import Flow typings:

```js
import type { TLProgram, CombinatorDeclaration/* ... */} from 'tl-parser/ast.h'
```

Import TypeScript typings:

```js
import { TLProgram, CombinatorDeclaration/* ... */} from 'tl-parser/ast'
```

### Example

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
