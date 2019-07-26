import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }

  componentDidMount() {
    this.getInventory()
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
