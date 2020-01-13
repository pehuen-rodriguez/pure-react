import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const RoomContext = React.createContext();

const RoomStore = ({children}) => {
  const [isLit, setLit] = useState(false);

  const toggleLit = () => {
    setLit(() => !isLit);
  }

  return (
    <RoomContext.Provider
      value={{
        isLit,
        onToggleLight: toggleLit
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}

const Room = () => {
  const {isLit, onToggleLight} = useContext(RoomContext);

  return (
    <div className={isLit ? 'light' : 'dark'}>
      Room is {isLit ? 'lit' : 'dark'}
      <br/>
      <button onClick={onToggleLight}>
        Flip
      </button>
    </div>
  )
}

ReactDOM.render(<RoomStore><Room/></RoomStore>, document.querySelector('#root'));
