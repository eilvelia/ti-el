{
  const makeNode = (type, body = {}) => ({
    type,
    ...location(),
    ...body,
  })

  const makeFinalDecl = (finalization, id) =>
    makeNode('FinalDeclaration', { finalization, id })

  const makeDeclarationsNode = (type, declarations, initial = []) =>
    makeNode(type, {
      declarations: declarations
        .filter(e => e.type === type)
        .reduce((acc, { declarations }) => {
          acc.push(...declarations)
          return acc
        }, initial)
    })

  const makeArgsNode = ({
    id = null,
    conditionalDef = null,
    term = null,
    multiplicity = null,
    subargs = null,
    ids = null
  } = {}) =>
    makeNode('Argument', {
      id, conditionalDef, term,
      multiplicity, subargs, ids
    })

  // [[a,b],[c,d]] -> [a,c]
  const extractFirst = list =>
    list.map(list2 => list2 && list2[0])

  // [[a,b],[c,d]] -> [b,d]
  const extractLast = list =>
    list.map(list2 => list2 && list2[list2.length - 1])

  const safeFirst = list => list ? list[0] : null
  const safeLast = list => list ? list[list.length - 1] : null
}

Start
  = __ program:TLProgram __ { return program }

// ---Character classes---

LcLetter
  = letter:[a-z] { return letter }

UcLetter
  = letter:[A-Z] { return letter }

Digit
  = digit:[0-9] { return Number(digit) }

HexDigit
  = hexDigit:[0-9a-f] { return hexDigit }

Underscore = "_"

Letter = LcLetter / UcLetter
IdentChar = Letter / Digit / Underscore

// ---Simple identifiers and keywords---

LcIdent = LcLetter IdentChar* { return text() }
UcIdent = UcLetter IdentChar* { return text() }
NamespaceIdent = LcIdent
LcIdentNs = (NamespaceIdent ".")? LcIdent { return text() }
UcIdentNs = (NamespaceIdent ".")? UcIdent { return text() }
LcIdentFull =
  LcIdentNs ("#"
    HexDigit HexDigit HexDigit HexDigit
    HexDigit HexDigit HexDigit HexDigit
  )? { return text() }

// ---Other tokens---

NatConst = Digit+ { return Number(text()) }

// ---General syntax of a TL program---

TLProgram
  = head:ConstrDeclarations tail:(
      "---" "functions" "---" __ FunDeclarations
      / "---" "types" "---" __ ConstrDeclarations
    )* {
      const declarations = extractLast(tail)
      const constructors = makeDeclarationsNode(
        'ConstructorDeclarations', declarations, head.declarations)
      const functions = makeDeclarationsNode(
        'FunctionDeclarations', declarations)
      return makeNode('TLProgram', {
        constructors,
        functions
      })
    }

ConstrDeclarations
  = decls:(Declaration __)*
    { return makeNode('ConstructorDeclarations', {
        declarations: extractFirst(decls) }) }

FunDeclarations
  = decls:(Declaration __)*
    { return makeNode('FunctionDeclarations', {
        declarations: extractFirst(decls) }) }

Declaration
  // order changed
  = FinalDecl
  / CombinatorDecl
  / BuiltinCombinatorDecl
  / PartialAppDecl

// ---Syntactical categories and constructions---

TypeExpr
  = expression:Expr
    { return makeNode('TypeExpression', { expression }) }
NatExpr
  = expression:Expr
    { return makeNode('NatExpression', { expression }) }
Expr
  = subexprs:(__ Subexpr)* {
      return makeNode('Expression', {
        subexpressions: extractLast(subexprs)
      })
    }
Subexpr
  = Term
  / NatConst "+" Subexpr
  // / Subexpr "+" NatConst
// Possible infinite loop when parsing
// (left recursion: TypeExpr -> Expr -> Subexpr -> Subexpr).
Term
  // order changed
  = "(" __ expr:Expr __ ")" { return expr }
  / id:TypeIdent __ "<" __ head:Expr tail:(__ "," __ Expr)* __ ">" {
      return makeNode('Term', {
        id,
        expressions: [head].concat(extractLast(tail))
      })
    }
  / TypeIdent
  / VarIdent
  / NatConst
  / "%" term:Term { return term } // TODO
TypeIdent
  = name:(BoxedTypeIdent / LcIdentNs / "#")
    { return makeNode('TypeIdentifier', { name }) }
BoxedTypeIdent
  = name:UcIdentNs
    { return makeNode('BoxedTypeIdentifier', { name }) }
VarIdent
  = name:(LcIdent / UcIdent)
    { return makeNode('VariableIdentifier', { name }) }
TypeTerm
  = term:Term
    { return makeNode('TypeTerm', { term }) }
NatTerm
  = term:Term
    { return makeNode('NatTerm', { term }) }

// ---Combinator declarations---

CombinatorDecl
  = id:FullCombinatorId __
    optionalArgs:(OptArgs __)*
    args:(Args __)*
    "=" __
    resultType:ResultType __ ";"
    {
      return makeNode('CombinatorDeclaration', {
        id,
        optionalArgs: extractFirst(optionalArgs),
        args: extractFirst(args),
        resultType
      })
    }
FullCombinatorId
  = name:(LcIdentFull / "_")
    { return makeNode('FullCombinatorIdentifier', { name }) }
CombinatorId
  = name:(LcIdentNs / "_")
    { return makeNode('CombinatorIdentifier', { name }) }
OptArgs
  = "{" __ ids:VarIdent+ __ ":" __ "!"? __ expression:TypeExpr __ "}"
    { return makeNode('OptionalArgument', { ids, expression }) }
Args
  = id:VarIdentOpt __ ":" __ cond:ConditionalDef? "!"? __ term:TypeTerm {
      return makeArgsNode({
        id,
        conditionalDef: cond,
        term
      })
    }
  / id:(VarIdentOpt __ ":")?
    __ mult:(Multiplicity "*")? __
    "[" __ subargs:(__ Args)* __ "]" {
      return makeArgsNode({
        id: safeFirst(id),
        multiplicity: safeFirst(mult),
        subargs: extractLast(subargs)
      })
    }
  / "(" __ ids:VarIdentOpt+ __ ":" __ "!"? __ term:TypeTerm __ ")"
    { return makeArgsNode({ ids, term }) }
  / "!"? __ term:TypeTerm
    { return makeArgsNode({ term }) }
Multiplicity
  = term:NatTerm
    { return makeNode('Multiplicity', { term }) }
VarIdentOpt
  = id:(VarIdent / "_") {
      return makeNode('VariableIdentifierOpt', {
        name: (typeof id === 'object' && id) ? id.name : id
      })
    }
ConditionalDef
  = id:VarIdent __ nat:("." NatConst)? __ "?" {
      return makeNode('ConditionalDefinition', {
        id,
        nat: safeLast(nat)
      })
    }
ResultType
  // order changed
  = id:BoxedTypeIdent __ "<" __ head:Subexpr tail:(__ "," __ Subexpr)* __ ">" {
      return makeNode('ResultType', {
        id,
        subexpressions: [head].concat(extractLast(tail))
      })
    }
  / id:BoxedTypeIdent subexprs:(__ Subexpr)* {
      return makeNode('ResultType', {
        id,
        subexpressions: extractLast(subexprs)
      })
    }

BuiltinCombinatorDecl
  = id:FullCombinatorId __
    "?" __ "=" __
    result:BoxedTypeIdent __ ";"
    { return makeNode('BuiltinCombinatorDeclaration', { id, result }) }

// ---Partial applications (patterns)---

PartialAppDecl
  = PartialTypeAppDecl
  / PartialCombAppDecl
PartialTypeAppDecl
  // order changed
  = id:BoxedTypeIdent __ "<" __ head:Expr tail:(__ "," __ Expr)* __ ">" __ ";" {
      return makeNode('PartialTypeApplicationDeclaration', {
        id,
        expressions: [head].concat(extractLast(tail))
      })
    }
  / id:BoxedTypeIdent __ subexpressions:Subexpr+ __ ";" {
      return makeNode('PartialTypeApplicationDeclaration', {
        id, subexpressions
      })
    }
PartialCombAppDecl
  = id:CombinatorId subexpressions:Subexpr+ __ ";" {
      return makeNode('PartialCombinatorApplicationDeclaration', {
        id, subexpressions
      })
    }

// ---Type finalization---

FinalDecl
  = "New" _ ident:BoxedTypeIdent __ ";"
    { return makeFinalDecl('New', ident) }
  / "Final" _ ident:BoxedTypeIdent __ ";"
    { return makeFinalDecl('Final', ident) }
  / "Empty" _ ident:BoxedTypeIdent __ ";"
    { return makeFinalDecl('Empty', ident) }

// --- ---

Comment
  = "//" comment:[^\r\n]* "\n"? {
      return makeNode('Comment', {
        value: comment.join('')
      })
    }

// --- ---

Ws "whitespace"
  = " "
  / "\t"
  / "\r"
  / "\n"

__ "skip whitespace and comments"
  = (Ws / Comment)*

_ "one or more whitespace"
  = Ws+
