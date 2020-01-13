import React from 'react';
import ReactDOM from 'react-dom';

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    onClick();

    setClicked(true);
  }

  return (
    <button
      onClick={handleClick}
      disabled={clicked}
    >
      You can only click me once
    </button>
  )
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi!")} />,
  document.querySelector('#root')
);
