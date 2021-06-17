import React, { Component } from 'react';
import './App.css';
import Character from './movie';

class App extends Component {
  render() {
    return (
      <div className="App">
          <section>
          <Character/>
        </section>
      </div>
    );
  }
}

export default App;
