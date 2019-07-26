import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgURL: ''
        }
    }

    nameChangeHandler(e) {
        this.setState({name: e})
    }

    priceChangeHandler(e) {
        this.setState({price: e})
    }

    imgURLChangeHandler(e) {
        this.setState({imgURL: e})
    }

    resetInputBoxes() {
        this.nameChangeHandler('')
        this.priceChangeHandler(0)
        this.imgURLChangeHandler('')
    }

    createProduct() {
        const name = this.state.name
        const price = this.state.price
        const img_url = this.state.imgURL
        axios.post('/api/product', {name, price, img_url})
        this.props.getInventory()
        this.resetInputBoxes()
    }

    render() {
        return(
            <div>
                <input onChange={(e) => this.nameChangeHandler(e.target.value)} value={this.state.name}></input>
                <input onChange={(e) => this.priceChangeHandler(e.target.value)} value={this.state.price}></input>
                <input onChange={(e) => this.imgURLChangeHandler(e.target.value)} value={this.state.imgURL}></input>
                <button onClick={() => this.resetInputBoxes}>Cancel</button>
                <button onClick={() => this.createProduct}>Add to Inventory</button>
            </div>
        )
    }
}