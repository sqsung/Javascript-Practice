// 1. Partial<T> : Make every property optional 

interface User {
    id: number;
    name: string;
    username: string;
    address: {
        road: string;
        zip: number;
        lat: number;
        lng: number;
    };
    phone: string;
    isAdmin: boolean;
    isStaff: boolean;
    level: number;
}

type UserFormType = Partial<User>;


// 2. Readyonly<T> : Make every property readonly 
interface SomeType {
    a: string;
    b: number;
}

type ReadOnlyType = Readonly<SomeType>;

let value:ReadOnlyType = {
    a: 'Hello',
    b: 100
}

// value.a = 'Change' // property a cannot be changed because it is readonly


// 3. Record<K, T> : returns [key: K] : T
type test = Record<'name', string>;
type aa = Record<'a' | 'b' | 'c', number>;
type bb = Record<'a' | 'b' | 'c', { name: string, age: number }>;

// 4. Pick<K, T> : gets T from K 
interface Todo {
    title: string;
    description: string;
    isComplete: boolean;
} 

type TodoPreview = Pick<Todo, 'title' | 'isComplete'>;

const todo: TodoPreview = {
    title: 'Workout',
    isComplete: false,
}

// 5. Omit<T, K> : removes K properties from T
interface SomeTypeB {
    a: string;
    b: number;
    c: string;
    d: boolean;
    e: number;
}

type OmitType = Omit<SomeTypeB, 'b' | 'c'>;

 // 6. Exclude<T, U> : excludes U from T (union)
 type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

 type T1 = Exclude<'A' | 'B' | (() => void), Function>;

// 7. Extract<T, U> : grabs possible U from T 
type T = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // out of a | f, only a is extractable from a | b | c 

type T2 = Extract<'A' | 'B' | (() => void), Function>;

// 8. NonNullable<T> : removes undefined and null from T
type NNType = NonNullable<string | number | undefined>;
type NNType2 = NonNullable<string[] | null | undefined>;

// 9. Parameters<T> : returns tuple of parameters' type
type ParamT = Parameters<(s: string) => void>; // [s: string]
type EmptyParamT = Parameters<() => string>; // []

 // 10. ReturnType<T> :  returns return type of function T
 type RetType = ReturnType<() => string>; //string
 type RetType2 = ReturnType<(s:string) => void>; //void
 type RetType3 = ReturnType<<T>() => T>; // unknown

 // 11. Required<T> : makes every property required 
 interface ReqTest {
    a?: string;
    b?: number;
    c?: {
        name?: string;
        age?: number;
    }
 }

 type RequiredType = Required<ReqTest>; // doesnt change inner properties of c, only properties of called type
