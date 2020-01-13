import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import World from './World';

function HelloWorld() {
  return (
    <>
      <Hello /> <World />
    </>
  );
}

ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));