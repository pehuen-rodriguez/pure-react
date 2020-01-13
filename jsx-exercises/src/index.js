import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import Greeting from './Greeting';

function MyThing() {
  return (
    <>
      <Book />
      <Greeting />
    </>
  );
};

ReactDOM.render(<MyThing />, document.querySelector('#root'));
