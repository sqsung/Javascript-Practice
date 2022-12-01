interface userInfoType {
    name: string;
    age: number;
    employmentStatus: boolean;
}

// valid
const userA: userInfoType = {
    name: 'James',
    age: 23,
    employmentStatus: true
}

// not valid: 1 or more properties have a value different from the one declared
// const userB: userInfoType = {
//     name: 'James',
//     age: true,
//     employmentStatus: false
// }

/*
- not valid: missing a property promised in interface userInfoType
- can be fixed with edits to interface 
*/

// const userC: userInfoType = {
//     name: 'James',
//     age: 10
// }

//valid 
interface userInfoType2 {
    name: string;
    age: number;
    employmentStatus?: boolean; //employmentStatus requires a boolean value only when it exists
}

const fixedUserC = {
    name: 'James',
    age: 23
}




