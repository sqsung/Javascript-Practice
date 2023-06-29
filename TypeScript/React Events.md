# 타입스크립트로 리액트 이벤트 다루기

> 프론트엔드 개발자와 이벤트 처리는 뗄래야 뗼 수 없는 관계다. 자바스크립트로 한참 익숙해졌던 이벤트 처리가, 타입스크립트로는 낯설게 느껴져 이벤트 처리 관련 필수 타입스크립트 개념을 정리하고 넘어갈 필요성을 느꼈다.

## 1. 리액트의 Synthetic Event

- 고유 이벤트<sup>Native Event</sup>는 브라우저 별로 다르게 인식되거나 동작 방식이 다른 경우가 있다.
- 이러한 Cross-browser Compatability 이슈를 보완하기 위해 리액트는 고유 이벤트들을 합성 이벤트<sup>Synthetic Event</sup> 객체로 감싸 사용한다.
- 감싸진 합성 이벤트는 `stopPropagation()`나 `preventDefault()` 등의 인터페이스는 동일하지만, 모든 브라우저에서 동일하게 동작하게 된다.
- 리액트 + 타입스크립트를 사용하는 경우, 모든 이벤트가 합성 이벤트 객체로 감싸져 있으므로 DOM Library에 있는 타입을 이용해 이벤트의 타입을 지정할 수 없고, 리액트가 제공하는 이벤트 타입을 사용해야 한다.

## 2. 이벤트 타이핑

- 아래 예제에는 2개의 이벤트 핸들러(handleInputChange, handleClick)가 있다.

```TypeScript
import React from 'react';

export default function App() {
  const [value, setValue] = React.useState('');

  /**
   * Event Handler 1:
   * Input 요소에서 change 이벤트가 발생할 때마다 value 상태를 업데이트해줌
   * e의 타입을 ChangeEvent로 주고, 이벤트를 발생시키는 DOM 요소의 타입를 지정해주면 된다
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /**
   * Event Handler 2:
   * Input 요소에서 change 이벤트가 발생할 때마다 value 상태를 업데이트해줌
   * e의 타입을 MouseEvent로 주고, 이벤트를 발생시키는 DOM 요소의 타입를 지정해주면 된다
   */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Submit button clicked!');
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={value} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
```

- 각 핸들러에서 이벤트의 타입을 지정하기 위해 리액트에서 제공하는 이벤트 타입을 사용하고, 제네릭으로 이벤트를 발생시키는 DOM 요소의 타입을 넣어주면 된다.
- 제네릭으로 DOM 요소의 타입을 지정 여부는 사실 핸들러 함수의 로직에 따라 달라진다.
- 예를 들어 첫 번째 이벤트 핸들러인 `handleInputChange`에서는 Change 이벤트가 발생할 때마다 e.target의 value 값을 가져온다. 근데 타입스크립트에게 어떤 타입의 DOM 요소가 target으로 지정될지 말해주지 않으면, 타입스크립트는 e.target에 value가 존재하지 않을 수도 있다고 생각하여 에러를 발생시킨다.

```TypeScript
const handleInputChange = (e: React.ChangeEvent) => {
  setValue(e.target.value);
  // Error: Property 'value' does not exist on type 'EventTarget & Element'.ts(2339)
};
```

- 근데 만약 `handleInputChange` 로직을 변경해 e.target.value 관련 로직을 빼면 제네릭으로 target 요소의 타입을 지정할 필요가 없어진다.

```TypeScript
const handleInputChange = (e: React.ChangeEvent) => {
  console.log('Change Event!'); // OK!
};
```

- 같은 맥락에서, `handleClick` 핸들러의 내부 로직에서 e.target 관련된 내용이 없으므로 제네릭으로 target 요소의 타입을 지정하지 않아도 정상 동작한다.

```TypeScript
const handleClick = (e: React.MouseEvent) => {
  console.log('Submit button clicked!'); // OK!
};
```

## References

- https://felixgerschau.com/react-typescript-events/
- https://ko.legacy.reactjs.org/docs/events.html
- https://devtrium.com/posts/react-typescript-events
- https://www.carlrippon.com/React-event-handlers-with-typescript/
