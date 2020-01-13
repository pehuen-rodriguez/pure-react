import React from 'react';
import ReactDOM from 'react-dom';
import moment from "moment";
import PropTypes from 'prop-types';
import './index.css';

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
};

Time.propTypes = {
  time: PropTypes.string
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    )
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      {getRetweetCount(count)}
    </span>
  )
};

RetweetButton.propTypes = {
  count: PropTypes.number
}

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {
      count > 0 &&
      <span className="like-count">
        {count}
      </span>
    }
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Message({ text }) {
  return (
    <div className="message">
    {text}
    </div>
  );
}

Time.propTypes = {
  text: PropTypes.string
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <Author author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string.isRequired
  }).isRequired
};

const testTweet = {
  message: "Sould de tat et meis grand",
  gravatar: "00240a48a5b73fe240957b9c6b3e8be2",
  author: {
    handle: "Beto Mársico",
    name: "IAMA Card Person"
  },
  likes: 1,
  retweets: 2,
  timestamp: "2019-11-26 19:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
