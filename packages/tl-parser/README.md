# tl-parser

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

[AST typings](ast.h.js)  
[Grammar](src/tl.pegjs)

Import Flow typings:

```js
import type { TLProgram, CombinatorDeclaration/* ... */} from 'tl-parser/ast.h'
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
  start: { offset: 0, line: 1, column: 1 },
  end: { offset: 67, line: 4, column: 1 },
  constructors: 
   { type: 'ConstructorDeclarations',
     start: { offset: 0, line: 1, column: 1 },
     end: { offset: 67, line: 4, column: 1 },
     declarations: 
      [ { type: 'BuiltinCombinatorDeclaration',
          start: { offset: 0, line: 1, column: 1 },
          end: { offset: 12, line: 1, column: 13 },
          id: 
           { type: 'FullCombinatorIdentifier',
             start: { offset: 0, line: 1, column: 1 },
             end: { offset: 3, line: 1, column: 4 },
             name: 'int' },
          result: 
           { type: 'BoxedTypeIdentifier',
             start: { offset: 8, line: 1, column: 9 },
             end: { offset: 11, line: 1, column: 12 },
             name: 'Int' } } ] },
  functions: 
   { type: 'FunctionDeclarations',
     start: { offset: 0, line: 1, column: 1 },
     end: { offset: 67, line: 4, column: 1 },
     declarations: 
      [ { type: 'CombinatorDeclaration',
          start: { offset: 29, line: 3, column: 1 },
          end: { offset: 66, line: 3, column: 38 },
          id: 
           { type: 'FullCombinatorIdentifier',
             start: { offset: 29, line: 3, column: 1 },
             end: { offset: 44, line: 3, column: 16 },
             name: 'req_pq#60469778' },
          optionalArgs: [],
          args: 
           [ { type: 'Argument',
               start: { offset: 45, line: 3, column: 17 },
               end: { offset: 57, line: 3, column: 29 },
               id: 
                { type: 'VariableIdentifierOpt',
                  start: { offset: 45, line: 3, column: 17 },
                  end: { offset: 50, line: 3, column: 22 },
                  name: 'nonce' },
               conditionalDef: null,
               term: 
                { type: 'TypeTerm',
                  start: { offset: 51, line: 3, column: 23 },
                  end: { offset: 57, line: 3, column: 29 },
                  term: 
                   { type: 'TypeIdentifier',
                     start: { offset: 51, line: 3, column: 23 },
                     end: { offset: 57, line: 3, column: 29 },
                     name: 'int128' } },
               multiplicity: null,
               subargs: null,
               ids: null } ],
          resultType: 
           { type: 'ResultType',
             start: { offset: 60, line: 3, column: 32 },
             end: { offset: 65, line: 3, column: 37 },
             id: 
              { type: 'BoxedTypeIdentifier',
                start: { offset: 60, line: 3, column: 32 },
                end: { offset: 65, line: 3, column: 37 },
                name: 'ResPQ' },
             subexpressions: [] } } ] } }
```
