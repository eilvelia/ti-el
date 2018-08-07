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
  | CombinatorDeclaration | BuiltinCombinatorDeclaration
  | PartialApplicationDeclaration
  | FinalDeclaration

export type CombinatorDeclaration = {
  ...Node,
  type: 'CombinatorDeclaration',
  id: FullCombinatorIdentifier,
  optionalArgs: OptionalArgument[],
  args: Argument[],
  excl: boolean,
  resultType: ResultType
}

export type PartialApplicationDeclaration =
  | PartialTypeApplicationDeclaration
  | PartialCombinatorApplicationDeclaration

export type PartialTypeApplicationDeclaration =
  {
    ...Node,
    type: 'PartialTypeApplicationDeclaration',
    subexpressions: Subexpression[]
  } | {
    ...Node,
    type: 'PartialTypeApplicationDeclaration',
    expressions: Expression[]
  }

export type PartialCombinatorApplicationDeclaration = {
  ...Node,
  type: 'PartialCombinatorApplicationDeclaration',
  id: CombinatorIdentifier,
  subexpressions: Subexpression[]
}

export type FinalDeclaration = {
  ...Node,
  type: 'FinalDeclaration',
  finalization: 'New' | 'Final' | 'Empty',
  id: BoxedTypeIdentifier
}

export type FullCombinatorIdentifier = {
  ...Node,
  type: 'FullCombinatorIdentifier',
  name: string
}

export type CombinatorIdentifier = {
  ...Node,
  type: 'CombinatorIdentifier',
  name: string
}

export type TypeIdentifier = {
  ...Node,
  type: 'TypeIdentifier',
  name: BoxedTypeIdentifier | string // | '#'
}

export type BoxedTypeIdentifier = {
  ...Node,
  type: 'BoxedTypeIdentifier',
  name: string
}

export type VariableIdentifier = {
  ...Node,
  type: 'VariableIdentifier',
  name: string
}

export type VariableIdentifierOpt = {
  ...Node,
  type: 'VariableIdentifierOpt',
  name: string // | '_'
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

export type Expression = {
  ...Node,
  type: 'Expression',
  subexpressions: Subexpression[]
}

export type Subexpression = Term // TODO

export type Term =
  // TODO
  | Expression
  | TypeIdentifier
  | VariableIdentifier
  | number
  | { ...Node, type: 'Term', id: TypeIdentifier, expressions: Expression[] }
  | { ...Node, type: 'PercentTerm' /* the best name lol */, terms: Term[] }

export type TypeTerm = {
  ...Node,
  type: 'TypeTerm',
  term: Term
}

export type NatTerm = {
  ...Node,
  type: 'NatTerm',
  term: Term
}

export type OptionalArgument = {
  ...Node,
  type: 'OptionalArgument',
  ids: VariableIdentifier[],
  expression: TypeExpression
}

export type Argument = {
  ...Node,
  type: 'Argument',
  id: VariableIdentifierOpt | null,
  conditionalDef: ConditionalDefinition | null,
  term: TypeTerm | null,
  multiplicity: Multiplicity | null,
  subargs: Argument[] | null,
  ids: VariableIdentifierOpt[] | null
}

export type Multiplicity = {
  ...Node,
  type: 'Multiplicity',
  term: NatTerm
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
  subexpressions: Subexpression[]
}

export type BuiltinCombinatorDeclaration = {
  ...Node,
  type: 'BuiltinCombinatorDeclaration',
  id: FullCombinatorIdentifier,
  result: BoxedTypeIdentifier
}
