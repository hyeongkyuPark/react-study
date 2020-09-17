import React, { useRef, useState } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(5);
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email
    };
    setUsers([...users, user])
    setInputs({
      username: '',
      email: ''
    })
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
      <Wrapper name='UserList(배열 다루기)'>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} 
        />
        <UserList users={users} />
      </Wrapper>
    </>
  );
}

export default App;
