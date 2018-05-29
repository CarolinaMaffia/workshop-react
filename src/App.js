import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './routes/about';
import Home from './routes/home';
import Contact from './routes/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />          
          </Fragment>
      </Router>
    );
  }
}

export default App;
