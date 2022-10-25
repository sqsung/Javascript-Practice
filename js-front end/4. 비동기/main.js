// 1. callback function
const A = (callback) => {
    const a = 'result of function A';
    console.log('A executed!')
    callback(a);
}

const B = (a) => {
    console.log(`B executed!`);
}

A(B);

// 2. promise 
const A2 = () => new Promise((resolve, reject) => {
    const a = 'result of function A2';
    resolve(a);
});

const B2 = (a) => {
    console.log(`B2 executed!`);
}

A2()
.then((a) => { 
    console.log('A2 has been successfully executed!');
    B2(a);
})
.catch((error) => {
    console.log(error.message);
});

// 3. async await 
const A3 = async() => {
    const a = 'result of A3';
    return a;
}

const B3 = (a) => {
    console.log(`B3 executed, a is ${a}`);
}

A3()
.then((a) => { 
    console.log('A3 has been successfully executed!');
    B3(a);

    console.log('------------');
})
.catch((error) => {
    console.log(error.message);
});

const func = async () => {
    const a = await A3();
    console.log(`A3 executed!`);
    B3(a);
}

func();