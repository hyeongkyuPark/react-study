import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    color: 'aqua',
    background: 'black',
    fontSize: 24,
    padding: '1rem' 
  }
  
  return (
    <div>
      <Hello />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </div>
  );
}

export default App;
