// Arrays with value(s) with just one unified type
const array1: string[] = ['Korea', 'Portugal', 'Uruguay', 'Ghana'];
const array2: number[] = [1, 2, 3, 4];
const array3: boolean[] = [false, true, true, false];

//Arrays that contain values of multiple types 
const array4: (string | boolean)[] = ['James', true, true];
const array5: (string | number)[] = ['James', 8888, 22];

//Tuple types
const arrayTuple: [string, number, boolean] = ['James', 23, true];
const arrayTuple2: [number, number, string] = [3, 3, 'James'];

/*
while tuple type arrays are declared with specific types and lengths,
additional values can be added onto them 
*/
arrayTuple.push('Here is a test');
console.log(arrayTuple); // ['James', 23, true, 'Here is a test'];

