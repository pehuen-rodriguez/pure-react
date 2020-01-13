import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Reddit subreddit={subreddit}/>
    </>
  )
}

const Reddit = ({subreddit}) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => res.json())
      .then(json => {
        if(!json.data) {
          throw new Error("el subreddit no tiene childs");
        }
        setPosts(json.data.children.map(c => c.data));
        setError(null);
      })
      .catch(function(error) {
        setPosts([]);
        setError(`Hubo un problema con la petición Fetch: ${error.message}`);
        console.log(error.message);
      });
  }, [subreddit, setPosts]);

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {error}
    </>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
