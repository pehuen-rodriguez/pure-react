import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: true,
      livingroom: true,
      bedroom: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={ev => this.setState((state) => ({rooms: {kitchen: !state.rooms.kitchen}}))}>Switch kitchen</button>
        {/* <p>The value being {this.state.rooms.kitchen.toString()}</p> */}

        <button onClick={ev => this.setState((state) => ({rooms: {bathroom: !state.rooms.bathroom}}))}>Switch bathroom</button>
        {/* <p>The value being {this.state.rooms.bathroom.toString()}</p> */}

        <button onClick={ev => this.setState((state) => ({rooms: {livingroom: !state.rooms.livingroom}}))}>Switch livingroom</button>
        {/* <p>The value being {this.state.rooms.livingroom.toString()}</p> */}

        <button onClick={ev => this.setState((state) => ({rooms: {bedroom: !state.rooms.bedroom}}))}>Switch bedroom</button>
        {/* <p>The value being {this.state.rooms.bedroom.toString()}</p> */}
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.querySelector("#root"));
