import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
        
      </div>
    );
  }
}

export default App;
