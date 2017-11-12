import React, { Component } from 'react';
import { Router } frm 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router exact path='/' render {() => (
          <p className="App-intro">
            Empty project
          </p>
        )} />
      </div>
    );
  }
}

export default App;