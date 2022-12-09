interface User {
    name: string;
}

interface Student extends User {
    studentId: number;
}

type Example1 = Student extends User ? number : string;

// with generic 
interface IdLabel {
    id: number;
}

interface NameLabel {
    name: string;
}

type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw 'unimplemented';
}

let a = createLabel('typescript'); // <-- NameLabel
let b = createLabel(2.9); // <-- IdLabel

//----------------

type LengthType<T> = T extends { length: infer U } ? U : never;

// type A = LengthType<{length: string}>;
// type A = LengthType<number[]>; // has length property so accessible
// type A = LengthType<string>; // same as above
type A = LengthType<boolean>; // unlike string or array, boolean values have no length, therefore type A = never;


type GetParamType<T> = T extends (x: infer U) => void ? U : never;

type AFunc = (x: string) => void;
type a = GetParamType<AFunc>;

type BFunc = (x: string, y: number) => void;
type b = GetParamType<BFunc>; //number of params don't match, therefore returns false --> never

type CFunc = (x: string | number) => void;
type c = GetParamType<CFunc>;
