import React, { Component } from 'react';
import Jedi from './components/Jedi.js';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        jedi: [
          {name: 'Yoda', age: '400', saber: 'Green'},
          {name: 'Mace', age: '200', saber: 'Purple'},
          {name: 'Obi', age: '100', saber: 'Blue'},
          {name: 'Vader', age: '200', saber: 'Red'}
        ]
      };
    }

  render() {
    return (
      <div className="App">
        <h1>React Time</h1>
        <Jedi jedi={this.state.jedi}/>
      </div>
    );
  }
}

export default App;
