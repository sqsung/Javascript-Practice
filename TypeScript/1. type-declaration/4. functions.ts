// types of parameters and return value can be declared
const priceAddFunc = (a: number, b: number): string => {
    return `The final price is $${a + b}.`;
}

console.log(priceAddFunc(20, 10)); //"The final price is $30."

// in case multiple functions have the identical type-case, type alias can be used
type priceFuncType = (firstParam: number, secParam: number) => string;

const priceAddFunc2: priceFuncType = (a, b) => {
    return `The final price is $${a + b}.`;
}

const priceSubtFunc: priceFuncType = (a, b) => {
    return `The final price is $${a - b}`;
}

console.log(priceAddFunc2(20, 10)); //"The final price is $30."
console.log(priceSubtFunc(20, 10)); //"The final price is $10."