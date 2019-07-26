import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgURL: '',
            id: null,
            editing: false
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

    updateProduct() {
        const id = this.state.id
        const name = this.state.name
        const price = this.state.price
        const img_url = this.state.imgURL
        axios.put(`/api/product/${id}`, {name, price, img_url})
        this.props.getInventory()
        this.resetInputBoxes()
        this.setState({editing: false, id: null})
    }

    render() {
        return(
            <div>
                <input type='text' ref='nameBox' onChange={(e) => this.nameChangeHandler(e.target.value)} value={this.state.name}></input>
                <input ref='priceBox' onChange={(e) => this.priceChangeHandler(e.target.value)} value={this.state.price}></input>
                <input type='text' ref='img_urlBox' onChange={(e) => this.imgURLChangeHandler(e.target.value)} value={this.state.imgURL}></input>
                <button onClick={() => this.resetInputBoxes()}>Cancel</button>
                {this.state.editing ? (<button onClick={() => this.updateProduct()}>Save Changes</button>) 
                :(<button onClick={() => this.createProduct()}>Add to Inventory</button>)}
            </div>
        )
    }

    componentDidUpdate(props) {
        const oldProduct = props.selectedProduct
        const newProduct = this.props.selectedProduct
        if (oldProduct !== newProduct && !this.state.editing) {
            this.setState({editing: true, id: newProduct.product_id, name: newProduct.name, price: newProduct.price, imgURL: newProduct.image_url})
        }
    }
}