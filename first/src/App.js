import React, { useRef, useState, useMemo, useCallback } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';



function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs])

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'kim',
        email: 'kim@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'lee',
        email: 'lee@naver.com',
        active: false
    },
    {
        id: 3,
        username: 'sin',
        email: 'sin@naver.com',
        active: false
    },
    {
        id: 4,
        username: 'park',
        email: 'park@naver.com',
        active: false
    }
  ]);

  const nextId = useRef(5);
  
  const onCreate = useCallback(() => {
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
    nextId.current += 1;
  }, [username, email, users]);
  
  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(user => {
      return user.id === id ? {...user, active: !user.active} : user;
    }))
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </Wrapper>
      <Wrapper name='UserList(배열 다루기)'>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} 
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성 사용자 수 : {count}</div>
      </Wrapper>
    </>
  );
}

export default App;
