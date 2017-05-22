import React, { Component } from 'react';
import './App.css';
import Address from './component/address';
import Menu from './component/menu';
import Slider from './component/slider';

class App extends Component {
  render() {
    return (
      <div id="main">
      <Address/>
      <Menu/>
      <Slider/>
      
      </div>
    );
  }
}

export default App;
