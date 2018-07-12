import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
