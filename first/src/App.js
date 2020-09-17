import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Wrapper name='props, 조건부렌더링'>
        <Hello isSpecial={true}/>
        <Hello name='react' />
      </Wrapper>
      <Wrapper name='Counter(useState)'>
        <Counter />
      </Wrapper>
    </>
  );
}

export default App;
