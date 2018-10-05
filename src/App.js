import React, { Component } from 'react';
import Jedi from './components/Jedi.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Time</h1>
        <Jedi name='Yoda' age='200' saber='green'/>
        <Jedi name='Obi' age='82' saber='blue'/>
      </div>
    );
  }
}

export default App;
