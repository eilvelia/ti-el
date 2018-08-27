// @flow

type Node = {|
  start: { offset: number, line: number, column: number },
  end: { offset: number, line: number, column: number }
|}

export type TLProgram = {
  ...Node,
  type: 'TLProgram',
  constructors: ConstructorDeclarations,
  functions: FunctionDeclarations,
  // comments: Comment[] // TODO
}

// export type Comment = {
//   ...Node,
//   type: 'Comment',
//   value: string
// }

export type ConstructorDeclarations = {
  ...Node,
  type: 'ConstructorDeclarations',
  declarations: Declaration[]
}

export type FunctionDeclarations = {
  ...Node,
  type: 'FunctionDeclarations',
  declarations: Declaration[]
}

export type Declaration =
  | CombinatorDeclaration
  | BuiltinCombinatorDeclaration
  | PartialApplicationDeclaration
  | FinalDeclaration

export type CombinatorDeclaration = {
  ...Node,
  type: 'CombinatorDeclaration',
  id: FullCombinatorIdentifier,
  optionalArgs: OptionalArgument[],
  args: Argument[],
  bang: boolean,
  resultType: ResultType
}

export type PartialApplicationDeclaration =
  | PartialTypeApplicationDeclaration
  | PartialCombinatorApplicationDeclaration

export type PartialTypeApplicationDeclaration = {
  ...Node,
  type: 'PartialTypeApplicationDeclaration',
  expression: EExpression
}

export type PartialCombinatorApplicationDeclaration = {
  ...Node,
  type: 'PartialCombinatorApplicationDeclaration',
  id: CombinatorIdentifier,
  expression: EExpression
}

export type FinalDeclaration = {
  ...Node,
  type: 'FinalDeclaration',
  finalization: 'New' | 'Final' | 'Empty',
  id: BoxedTypeIdentifier
}

export type FullCombinatorIdentifier =
  | FullCombinatorName
  | CombinatorIdentifier

export type CombinatorIdentifier =
  | ShortCombinatorName
  | EmptyCombinatorName

export type FullCombinatorName = {
  ...Node,
  type: 'FullCombinatorName',
  name: string, // namespace + lc name
  magic: string // /[0-9a-f]{4,8}/
}

export type ShortCombinatorName = {
  ...Node,
  type: 'ShortCombinatorName',
  name: string // namespace + lc name
}

export type EmptyCombinatorName = { // underscore
  ...Node,
  type: 'EmptyCombinatorName',
  name: string // '_'
}

export type TypeIdentifier = // lc / uc / #
  | BoxedTypeIdentifier
  | SimpleTypeIdentifier
  | HashTypeIdentifier

export type BoxedTypeIdentifier = {
  ...Node,
  type: 'BoxedTypeIdentifier',
  name: string // uc
}

export type SimpleTypeIdentifier = {
  ...Node,
  type: 'SimpleTypeIdentifier',
  name: string // lc
}

export type HashTypeIdentifier = {
  ...Node,
  type: 'HashTypeIdentifier',
  name: string // '#'
}

export type OptionalVariableIdentifier =
  | VariableIdentifier
  | EmptyVariableIdentifier

export type VariableIdentifier = {
  ...Node,
  type: 'VariableIdentifier',
  name: string // lc / uc
}

export type EmptyVariableIdentifier = { // underscore
  ...Node,
  type: 'EmptyVariableIdentifier',
  name: string // '_'
}

export type TypeExpression = {
  ...Node,
  type: 'TypeExpression',
  expression: Expression
}

export type NatExpression = {
  ...Node,
  type: 'NatExpression',
  expression: Expression
}

export type Expression =
  | ETypeIdentifier
  // | EVariableIdentifier
  | ENat
  | EOperator
  | EExpression
  | EMultiArg

export type ETypeIdentifier = {
  ...Node,
  type: 'ETypeIdentifier',
  id: TypeIdentifier
}

// export type EVariableIdentifier = {
//   ...Node,
//   type: 'EVariableIdentifier'
//   id: VariableIdentifier
// }

export type ENat = {
  ...Node,
  type: 'ENat',
  value: number
}

export type EOperator = {
  ...Node,
  type: 'EOperator',
  kind: '%' | '!' | '+',
  expression: Expression
}

export type EExpression = {
  ...Node,
  type: 'EExpression',
  subexpressions: Expression[]
}

export type EMultiArg = {
  ...Node,
  type: 'EMultiArg',
  multiplicity: NatExpression | null,
  subargs: Argument[]
}

// export type TypeTerm = {
//   ...Node,
//   type: 'TypeTerm',
//   term: Term
// }
//
// export type NatTerm = {
//   ...Node,
//   type: 'NatTerm',
//   term: Term
// }

export type OptionalArgument = {
  ...Node,
  type: 'OptionalArgument',
  id: VariableIdentifier,
  argType: TypeExpression
}

export type Argument = {
  ...Node,
  type: 'Argument',
  id: OptionalVariableIdentifier,
  conditionalDef: ConditionalDefinition | null,
  argType: TypeExpression
}

export type ConditionalDefinition = {
  ...Node,
  type: 'ConditionalDefinition',
  id: VariableIdentifier,
  nat: number | null
}

export type ResultType = {
  ...Node,
  type: 'ResultType',
  id: BoxedTypeIdentifier,
  expression: EExpression
}

export type BuiltinCombinatorDeclaration = {
  ...Node,
  type: 'BuiltinCombinatorDeclaration',
  id: FullCombinatorIdentifier,
  result: BoxedTypeIdentifier
}
