import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lightsReducer = (state, action) => {
  if (action.type === 'off') {
    return 'off';
  } else {
    switch(state) {
    case 'off':
      return 'low';
    case 'low':
      return 'medium';
    case 'medium':
      return 'high';
    default:
      return 'off';
    }
  }
};

const Room = () => {
  const [state, dispatch] = useReducer(lightsReducer, 'off');

  return (
    <div>
      <button className={state} onClick={() => dispatch({type:'on'})}>Switch</button>
      <button onClick={() => dispatch({type:'off'})}>Off</button>
    </div>
  )
};

ReactDOM.render(<Room/>, document.querySelector('#root'));
