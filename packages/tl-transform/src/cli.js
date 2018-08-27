// @flow

import fs from 'fs'
import { transform } from './transform'

const input = process.argv[2]
const src = fs.readFileSync(input).toString()

const output = transform(src)

console.log(output)
