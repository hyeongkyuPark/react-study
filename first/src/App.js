import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import ReducerCounter from './ReducerCounter';
import UserList from './UserList';
import Wrapper from './Wrapper';

import useInputs from './useInputs';



function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.id 
            ? {...user, active: !user.active}
            : user;
        })
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
    
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const nextId = useRef(5);

  const { users } = state;
  const { username, email } = form;


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

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
        <CreateUser 
          username={username} 
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList
          users={users} 
          onToggle={onToggle}
          onRemove={onRemove}
        />
        <div>활성 사용자 수 : {count}</div>
      </Wrapper>
      <Wrapper name='ReducerCounter'>
        <ReducerCounter />
      </Wrapper>
    </>
  );
}

export default App;
