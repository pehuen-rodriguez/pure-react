import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CountingParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleAction = this.handleAction.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAction(action) {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  handleReset(action) {
    this.setState({
      counter: 0
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onReset={this.handleReset}/>
        <p>Clicked {this.state.counter} times</p>
      </div>
    )
  }
}

const Child = ({onAction, onReset}) => (
  <>
    <button onClick={onAction}>Click me</button>
    <button onClick={onReset}>Reset it</button>
  </>
);
const Page = () => (
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
);

ReactDOM.render(<Page/>, document.querySelector("#root"));
