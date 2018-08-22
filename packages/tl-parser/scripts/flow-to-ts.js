// @flow

const fs = require('fs')

const inputFile = process.argv[2]
const outputFile = process.argv[3]

const input = fs.readFileSync(inputFile).toString()

const nodeRegexp = /type Node = {\|\r?\n([\S\s]+?)\r?\n\|}/
const [, node] = input.match(nodeRegexp) || []

if (!node) throw new Error('Node not found')

const output = input
  .replace('// @flow', '')
  .replace(nodeRegexp, '')
  // .replace('{|', '{')
  // .replace('|}', '}')
  .replace(/^ *?\/\/ *?\.\.\.Node,?/gm, '')
  .replace(/  \.\.\.Node/g, node)

fs.writeFileSync(outputFile, output)
