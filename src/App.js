import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LayoutComponent from './components/LayoutComponent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
        <LayoutComponent />
      </div>
    );
  }
}

export default App;
