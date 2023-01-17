const obj = { 
    name: "James Sohn",
    sayHi: () => console.log(`Hi ${this.name}`)    
}

obj.sayHi(); // Hi 

const obj2 = {
    name: "Steven Park",
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

obj2.sayHi(); // Hi Steven Park