import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {id: 1, name: "bananas", price: 5, img_url: 'url_4'},
        {id: 2, name: 'bread', price: 2, img_url: 'url_5'},
        {id: 3, name: 'milk', price: 3, img_url: 'url_6'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <div>
            <Dashboard inventory={this.state.inventory}/>
          </div>
          <div>
            <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
