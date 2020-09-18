# Props
: React.js에서 props는 Immutable Data 즉, 변하지 않는 데이터입니다. 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로 데이터를 넘겨줄 때 사용합니다.

## 기본 사용 방법
-  props 사용방법은 <컴포넌트이름 props이름 = “값”> 이렇게 상위 컴포넌트에서 HTML의 attribute를 정의하듯이 하위 컴포넌트의 속성처럼 사용할 수 있습니다. props를 정의하면 하위 컴포넌트에서 매개변수로 받아 사용할 수 있습니다.


``` javascript
mport React from 'react';

function Hello({name}) {
    return (
        <div>
            Hello. {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}// props를 정의하지 않았을때 기본값 설정
export default Hello;
```

- 위의 예제 코드를 불러와 App.js에서 사용하게 되면 name이라는 이름의 props를 넘겨줄 수 있습니다.

``` javascript
//생략 app.js
<Hello name='react' />
```

### 출력 : Hello. react

- props의 속성으로는 children 이라는 속성도 있는습니다. 이 children은 자신의 component로 감싸진 하위 component의 값을 받아오게 됩니다.

``` javascript
import React from 'react';

function Wrapper({ children }) {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}

export default Wrapper;
```
``` javascript
//생략 app.js
<Wrapper>
    <Hello name='react' />
</Wrapper>
```

### 출력 : Hello. react


- 위의 예제처럼 app.js에서 하위 component를 가지는 component에서 props로 children을 사용하게 되면 화면에 하위 component도 함께 표시 됩니다.

## props를 활용한 조건부 랜더링
- props값을 if문을 통해 검사 후 조건부 랜더링이 가능합니다.

``` javascript
import React from 'react';

function Hello({name, isSpecial}) {
    return (
        <div>
            {/*props로 받은 isSpecial 값이 true이면 <b>*</b> 표기*/}
            {isSpecial && <b>*</b>}
            Hello. {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;
```
``` javascript
    <Wrapper>
        <Hello isSpecial={true}/>
        <Hello name='react' />
    </Wrapper>
```

### 츨력값 :<br>* Hello. 이름없음 <br> Hello. react

