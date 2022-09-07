/////
//
// Common Types
//
/////

// Built-in types
int ? = Int;
long ? = Long;
double ? = Double;
string ? = String;

// Boolean emulation
boolFalse = Bool;
boolTrue = Bool;

// Boolean for diagonal queries
boolStat statTrue:int statFalse:int statUnknown:int = BoolStat;

// Vector
vector {t:Type} # [t] = Vector t;
tuple {t:Type} {n:#} [t] = Tuple t n;
vectorTotal {t:Type} total_count:int vector:%(Vector t) = VectorTotal t;

/////
//
// Result- (Maybe-) types
//
/////

resultFalse {t:Type} = Maybe t;
resultTrue {t:Type} result:t = Maybe t;

pair {X:Type} {Y:Type} a:X b:Y = Pair X Y;
map {X:Type} {Y:Type} key:X value:Y = Map X Y;

Empty False;
true = True;

unit = Unit;
