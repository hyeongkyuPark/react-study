# React Hooks

## 1. useState ( State Hook )
- useSate는 가장 기본적인 Hook으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다. 만약 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook을 사용하면됩니다.

- 클래스형 컴포넌트에서는 state의 관리를 아래와 같이 했습니다.
``` JavaScript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

- 함수 컴포넌트는 위의 클래스형 컴포넌트 처럼 this를 가질 수 없기 때문에 this.state를 할당하거나 읽을 수 없습니다. 대신, useState Hook을 직접 컴포넌트에 호출합니다.

``` javaScript
import React, { useState } from 'react';

function Example() {
  //새로운 state 변수 count 생성
  const [count, setCount] = useState(0);
```

- useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

- useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 0을 해당 state의 초기 값으로 선언했습니다. (2개의 다른 변수를 저장하기를 원한다면 useState()를 두 번 호출해야 합니다.)


### state 가져오기

- 클래스 컴포넌트는 count를 보여주기 위해 this.state.count를 사용합니다.
```javaScript
 <p>You clicked {this.state.count} times</p>
```
- 반면 함수 컴포넌트는 count를 직접 사용할 수 있습니다.
```javaScript
<p>You clicked {count} times</p>
```

### state 갱신하기

- 클래스 컴포넌트는 count를 갱신하기 위해 this.setState()를 호출합니다.
```javaScript
 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
</button>
```
- 반면 함수 컴포넌트는 setCount와 count 변수를 가지고 있으므로 this를 호출하지 않아도 됩니다.
```javaScript
<p>
    <button onClick={() => setCount(count + 1)}>
        Click me
    </button>
</p>
```