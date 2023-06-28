class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`Welcome back ${this.name}`);
    }
}

let userZ = new User('James');
userZ.sayHi();

// extended child class
class Student extends User {
    grade: string;
    constructor(name: string, grade: string) {
        super(name);
        this.grade = grade;
    }

    study() {
        console.log(`Get back to studying ${this.name}, you are in ${this.grade} grade!`);
    }
}

let studentA = new Student('Johnny', '12th');
studentA.study();

/*
- public(default) : accessible anywhere
- protected : child class can access it
- private : only itself can acces it 
- readonly : variable cannot be redeclared after initialization
*/

class Clock {
    readonly hr: number; // hr variable is made 'readonly'
    min: number;
    constructor(hr: number, min: number) {
        this.hr = hr;
        this.min = min;
    }

    private printTime() {
        console.log(`It is ${this.hr}:${this.min} right now.`);
    }
}

let clock = new Clock(12, 55);
// clock.printTime(); --> not accessible because printTime() is designated as 'private'

class FulLDate extends Clock {
    month: string;
    day: number;
    constructor(hr: number, min: number, month: string, day: number) {
        super(hr, min);
        this.month = month;
        this.day = day;
    }

    printDate() {
        console.log(`It is ${this.month} ${this.day}, ${this.hr}:${this.min}.`);
    }

    privacyCheck() {
        // this.printTime() --> Not accessible because printTime() is designated as 'private'
    }
}

let nowDate = new FulLDate(12, 55, 'Jan', 31);
nowDate.printDate();

console.log(nowDate.hr);
// nowDate.hr = 16 --> Doesn't work because 'hr' is a read-only property 

// static
class Smartphone {
    static company = 'Samsung';

    static ring() {
        console.log(`Your ${Smartphone.company} is ringing!`);
    }
}

console.log(Smartphone.company);
Smartphone.ring();

// abstract
abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract getName(): string;

    printName() {
        console.log('Hello, ' + this.getName());
    }
}

class Customer extends Person {
    constructor(name: string) {
        super(name);
    }

    getName() {
        return this.name;
    }

    sayBye() {
        return `Bye, ${this.name}!`;
    }
}

let me = new Customer('James Sohn');
console.log(me.getName());
console.log(me.sayBye());