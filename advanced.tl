user {flags:#} id:flags.0?string first_name:flags.1?string last_name:flags.2?string reserved3:flags.3?False reserved4:flags.4?False = User flags;
user_present {flags:#} info:%(User flags) = UserInfo flags;
user_absent {flags:#} = UserInfo flags;
getUser flags:# id:int = !UserInfo flags;

matrix {m n : #} a : m* [ n* [ double ] ] = Matrix m n;
aux_type {n : #} (_ : %Tuple double n) = AuxType n;
matrix {m : #} {n : #} (a : %Tuple %(AuxType n) m) = Matrix m n;

tnil {X : Type} = Tuple X 0;
tcons {X : Type} {n : #} hd:X tl:%(Tuple X n) = Tuple X (S n);
vector {X : Type} (n : #) (v : %(Tuple X n)) = Vector X;

vector {t : Type} # [ t ] = Vector t;
user {fields:#} id:int first_name:(fields.0?string) last_name:(fields.1?string) friends:(fields.2?%(Vector int)) = User fields;
get_users req_fields:# ids:%(Vector int) = Vector %(User req_fields);
