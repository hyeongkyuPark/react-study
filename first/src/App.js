import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
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
      <Wrapper name='InputSample(useState)'>
        <InputSample />
      </Wrapper>
    </>
  );
}

export default App;
