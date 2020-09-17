import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello isSpecial={true}/>
      <Hello name='react' />
    </Wrapper>
  );
}

export default App;
