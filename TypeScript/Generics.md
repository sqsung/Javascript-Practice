# Generics (제네릭)

## 제네릭을 사용하는 이유

한 가지 타입보단느 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용하여, 보다 재사용성이 높은 함수, 클래스 등을 생성할 수 있다.

## 1. 함수에서 사용하기

- 배열을 인수로 받아 배열 길이를 반환하는 `getSize` 함수가 존재한다. 아래 예제에서는 숫자 값으로만 이루어진 `arr1`, 문자열로만 이루어진 `arr2` 인수로 전달하기 때문에 유니온 타입을 사용해서 함수의 타입을 작성할 수 있다.
- 하지만 인수로 받을 배열이 무조건 숫자와 문자열 값으로만 구성되어 있지 않을 확률이 더 높다. 그렇다고 모든 타입 종류를 유니온으로 묶어서 작성할 수도 없다. 이럴 때 사용하기 좋은 게 제네릭이다.

```TS
function getSize(arr: number[] | string[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
console.log(getSize(arr1)); // -> 3

const arr2 = ['a', 'b', 'c'];
console.log(getSize(arr2)); // -> 3
```

- 제네릭을 사용해 `getSize` 함수를 아래처럼 수정하여, `T`라는 타입을 마치 함수의 인수처럼 받을 수 있다.
- 제네릭을 사용한 덕분에 무한으로 늘어나는 유니온 타입 없이도 숫자로만 이루어진 `arr1`도, 문자열로 이루어진 `arr2`도, 혹은 객체들로 이루어진 `arr3`을 인수로 `getSize` 함수를 호출할 수 있다.

```TS
function getSize<T>(arr: T[]): number {
  return arr.length;
};

const arr1 = [1, 2, 3];
console.log(getSize<number>(arr1)); // -> 3

const arr2 = ['a', 'b', 'c'];
console.log(getSize<string>(arr2)); // -> 3

const arr3 = [{ name: 'James' }, { name: 'Ryan' }, { name: 'Jake' }];
console.log(getSize<Object>(arr3)); // -> 3
```

- 화살표 함수의 경우 제네릭 타입을 사용하기 번거로운 점이 있다. 일반 `.ts` 확장자 파일에서는 괜찮지만, `.tsx` 확장자 파일에서는 `<>`가 TSX 태그로 인식되어 오류가 발생한다.
- 이때 `extends {}`를 뒤에 제네릭 뒤에 붙이면 일반 제네릭으로 인식한다 (아래 예제 참고).
- 또한, 제네릭 타입을 한 개 이상 사용하는 경우에는 괜찮다. `eg: <T, U>` 같은 이유로 _좋은 모습은 아니지만_ `<T, >` 라고 작성해도, 쉼표로 태그가 아닌 제네릭 타입으로 구분되기 때문에 정상 동작한다.

```TS
const errorGenericFunc = <T>(arr: T[]): number => arr.length; // -> Error: JSX element 'T' has no corresponding closing tag.

const genericFunc2 = <T, >(arr: T[]): number => arr.length; // Ok
const genericFunc3 = <T, U>(arr: T[]): number => arr.length; // Ok
const genericFunc4 = <T extends {}>(arr: T[]): number => arr.length; // Ok
```

## 2. 인터페이스에서 사용하기

- 유저 타입을 나타내는 `User` 인터페이스에는 문자열인 id, 숫자인 age, 그리고 어떤 타입의 값이 올지 모르는 options 프로퍼티가 있다.
- 만약 제네릭을 사용하지 않는다면, options 프로퍼티의 값이 변할 때마다 인터페이스를 새로 생성하거나, 모든 타입을 유니온으로 작성하는 비효율적인 선택을 해야 한다.
- 대신 아래 예제처럼 제네릭을 사용하여 하나의 인터페이스로 각기 다른 객체를 만들 수 있다.

```TS
interface User<T> {
  id: string;
  age: number;
  options: T;
}

const userJames: User<object> = {
  id: 'KingJames',
  age: 29,
  options: {
    favoriteColor: 'red',
    job: 'frontend developer',
    hasCoupon: true
  }
};

const userKevin: User<string> = {
  id: 'kevjumba',
  age: 19,
  options: 'good'
};
```

## 3. extends

- 아래 예제에는 인수로 받은 객체의 `name` 프로퍼티의 값을 반환하는 `getNameOnly` 함수와, name 프로퍼티를 가지고 있는 user, car 객체와 name 프로퍼티가 없는 book 객체가 있다.
- 인수로 받는 객체의 타입은 당연히 다 다르므로(user, car, book), 제네릭 타입 T를 이용해 인수의 타입을 지정했다. 하지만 이렇게 하면 반환문에 빨간줄이 그어지고, '**T 타입에는 name 프로퍼티가 없다**'는 에러가 뜨게 된다.
- 이는 T만 보고 모든 매개변수에 name 프로퍼티가 존재한다고 타입스크립트가 확신할 수 없기 때문에 발생하는 에러다.

```TS
interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: 'james', age: 29 };
const car: Car = { name: 'Audi', color: 'black' };
const book: Book = { price: 30000 };

function getNameOnly<T>(paramObject: T): string {
  return paramObject.name; // ERROR: Property 'name' does not exist on type 'T'.(2339)
}

getNameOnly(user);
getNameOnly(car);
getNameOnly(book);
```

- 이럴 때는 `extends` 키워드를 사용해서 T 타입의 최소 기준을 정의할 수 있다.
- 아래 예제처럼 `<T extends { name: string }>`라고 작성하면, 타입스크립트는 이를 'T 타입은 `{ name: string }` 객체를 확장하는 타입이다(즉, 최소 name 프로퍼티는 가지고 있다)'로 이해한다.
- 때문에 아래 예제에서처럼 T 타입에 name 프로퍼티가 존재하지 않는다는 에러가 아니라, name 프로퍼티가 없는 book 객체를 인수로 getNameOnly 함수를 호출할 때 에러가 발생한다.

```TS
function getNameOnly<T extends { name: string }>(paramObject: T): string {
  return paramObject.name;
}

getNameOnly(user);
getNameOnly(car);
getNameOnly(book); // ERROR:
// Argument of type 'Book' is not assignable to parameter of type '{ name: string; }'.
// Property 'name' is missing in type 'Book' but required in type '{ name: string; }'.(2345)
```
