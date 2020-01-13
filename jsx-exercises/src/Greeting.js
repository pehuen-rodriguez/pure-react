import React from 'react';

function Greeting() {
  let username = 'root';
  username = undefined;
  // username = null;
  // username = false;

  return <>{username ? `Hello ${username}` : 'Not logged in'}</>
}

export default Greeting;
