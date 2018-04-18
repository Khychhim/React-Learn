import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/villages/Landing Page'
class App extends Component {

  render() {
    return (
      <LandingPage/>
    );
  }
}


export default App;
