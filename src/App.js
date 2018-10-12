import React, { Component }     from 'react';
import Navbar                   from './components/Navbar.js';
import Home                     from './components/Home';
import About                    from './components/About';
import Contact                  from './components/Contact';
import { BrowserRouter, Route}  from 'react-router-dom';

class App extends Component {
    

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route  exact path="/" component={Home} />
          <Route  path="/About" component={About} />
          <Route  path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;