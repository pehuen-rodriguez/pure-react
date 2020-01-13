import React from 'react';

function Book() {
  return (
    // React.createElement('div', {className:'book'},
    //   React.createElement('div', {className:'title'}, 'The Title'),
    //   React.createElement('div', {className:'author'}, 'The Author'),
    //   React.createElement('ul', {className:'stats', style: {border: '1px solid black'}},
    //       React.createElement('li', {className: 'rating'}, '5 stars'),
    //       React.createElement('li', {className: 'isbn'}, '12-345678-910')
    //     )
    // )
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'> 12-345678-910
        </li> 
      </ul>
    </div>
  );
}

export default Book;