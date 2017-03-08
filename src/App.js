import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import TableOfThings from "./apps/tableOfThings/App";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contacts Manager</h2>
        </div>
        <TableOfThings />
      </div>
    );
  }
}

export default App;
