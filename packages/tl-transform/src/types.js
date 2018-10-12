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
  buildBuiltinTypes(): string;
  beforeConstructors(): string;
  buildConstructor(TLComb): string;
  beforeFunctions(): string;
  buildFunction(TLComb): string;
  beforeTypes(): string;
  buildTLType(TLType): string;
  buildInvokeType(string[]): string;
  isValidId(string): boolean;
}
