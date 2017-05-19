import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './component/address';
import Menu from './component/menu';
class App extends Component {
  render() {
    return (
      <div >
      <Address/>
      <Menu/>
      <div id="main_loader">
          <div id="loader">
          </div>
          
      </div>
      </div>
    );
  }
}

export default App;
