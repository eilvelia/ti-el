import { TLProgram } from './ast'

export type Location = {
	line: number,
	column: number,
	offset: number
}

export type LocationRange = {
	start: Location,
	end: Location
}

export class SyntaxError {
	line: number
	column: number
	offset: number
	location: LocationRange
	expected: any[]
	found: any
	name: string
	message: string
}

export type ParserOptions = {
  startRule?: string,
  tracer?: any,
  [key: string]: any
}

export function parse(str: string, options?: ParserOptions): TLProgram
