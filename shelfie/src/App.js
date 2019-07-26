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
      inventory: [],
      selectedProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }

  componentDidMount() {
    this.getInventory()
  }

  selectProduct(product) {
    this.setState({selectedProduct: product})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <div>
            <Dashboard
              inventory={this.state.inventory}
              getInventory={this.getInventory}
              selectProduct={this.selectProduct}
            />
          </div>
          <div>
            <Form getInventory={this.getInventory} selectedProduct={this.state.selectedProduct}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
