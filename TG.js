function getThisBinding() {
    return this;
}

const thisArg = { a: 1 };
console.log(getThisBinding()); // window 

console.log(getThisBinding.apply(thisArg)); // { a: 1 }
console.log(getThisBinding.call(thisArg)); // { a: 1 }