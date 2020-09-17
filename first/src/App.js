import React, { useRef } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';

function App() {
  const users = [
    {
        id: 1,
        username: 'kim',
        email: 'kim@naver.com'
    },
    {
        id: 2,
        username: 'lee',
        email: 'lee@naver.com'
    },
    {
        id: 3,
        username: 'sin',
        email: 'sin@naver.com'
    },
    {
        id: 4,
        username: 'park',
        email: 'park@naver.com'
    }
  ];

  const nextId = useRef(4);
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }
  
  return (
    <>
      <Wrapper name='props, 조건부렌더링'>
        <Hello isSpecial={true}/>
        <Hello name='react' />
      </Wrapper>
      <Wrapper name='Counter(useState)'>
        <Counter />
      </Wrapper>
      <Wrapper name='InputSample(useState)'>
        <InputSample />
      </Wrapper>
      <Wrapper name='UserList(배열 다루기)'>
        <UserList users={users} />
      </Wrapper>
    </>
  );
}

export default App;
