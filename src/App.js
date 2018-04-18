import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/villages/Landing Page'
import Demo from './components/villages/Demo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/demo" component={Demo}/>
        </div>
      </Router>

    );
  }
}


export default App;
