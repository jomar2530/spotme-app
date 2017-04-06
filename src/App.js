import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import ComponentLayout from './components/ContentLayout';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ComponentLayout />
      </div>
    );
  }
}

export default App;
