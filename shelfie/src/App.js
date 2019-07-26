import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'

//Move route stuff from Header here
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div>
            <Header/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;