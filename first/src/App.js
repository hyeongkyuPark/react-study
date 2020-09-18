import React, { useReducer, useMemo, createContext } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './InputSample';
import ReducerCounter from './ReducerCounter';
import UserList from './UserList';
import Wrapper from './Wrapper';

import ContextSample from './ContextSample';



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

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

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
        <UserDispatch.Provider value={dispatch}>
          <CreateUser />
          <UserList
            users={users}
          />
          <div>활성 사용자 수 : {count}</div>
        </UserDispatch.Provider>
      </Wrapper>
      <Wrapper name='ReducerCounter'>
        <ReducerCounter />
      </Wrapper>
      <Wrapper name='Context API : 전역값 관리'>
        <ContextSample />
      </Wrapper>
    </>
  );
}

export default App;
