// @flow

export type TypeName = string

export type TLExpr = TypeName[]

export type TLParam = {
  name: string,
  type: TLExpr,
  optional: boolean
}

export type Mode = 'Constructor' | 'Function'

export type TLComb = {
  name: string,
  params: TLParam[],
  resultType: TLExpr,
  mode: Mode
}

export type TL = {
  constructors: TLComb[],
  functions: TLComb[]
}

export type TLType = {
  name: TypeName,
  constrNames: string[]
}

// ---

export type Builder = {
  buildFileHeader(): string;
  buildComment(string): string;
  buildBuiltinTypes(): string;
  buildConstructor(TLComb): string;
  buildFunction(TLComb): string;
  buildTLType(TLType): string;
  buildInvokeType(string[]): string;
  isValidId(string): boolean;
}
