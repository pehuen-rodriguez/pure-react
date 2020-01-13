import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Time = () => (
  <span className="time">3hs ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Message() {
  return (
    <div className="message">
    This is less than 140 characters.
    </div>
  );
}

function Author() {
  return (
    <span className="author">
    <span className="name">Your Name</span> <span className="handle">@yourhandle</span>
    </span>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  );
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <Author/><Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
