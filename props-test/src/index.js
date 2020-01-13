import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="likes">
        {likes > 0 ? likes : 'No'} likes
      </div>
    </div>
  );
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number
};

function Main() {
  return (
    <>
      <Comment author='somebody' message='a likable message' likes={1}/>
      <Comment author='mr_unpopular' message='unlikable message'/>
      <Comment author='mr_unpopular' message='another message' likes={0}/>
      <Comment author='error_missing_message'/>
      <Comment message='mystery author'/>
      <Comment author={42}/>
    </>
  )
}

ReactDOM.render(<Main/>, document.querySelector("#root"));
