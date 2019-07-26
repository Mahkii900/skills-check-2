import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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

    getProduct(id) {
        axios.get(`/api/product/${id}`).then(res => {
            let {name, price, image_url} = res.data
            this.setState({name: name, price: price, imgURL: image_url, id: id})
        })
    }

    componentDidMount() {
        const {params} = this.props.match
        if (params) {
            this.getProduct(params.id)
            this.setState({editing: false})
        } else {
            this.setState({editing: true})
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

    createProduct(history) {
        const name = this.state.name
        const price = this.state.price
        const img_url = this.state.imgURL
        axios.post('/api/product', {name, price, img_url})
        this.resetInputBoxes()
        history.push('/')
    }

    updateProduct(history) {
        const id = this.state.id
        const name = this.state.name
        const price = this.state.price
        const img_url = this.state.imgURL
        axios.put(`/api/product/${id}`, {name, price, img_url})
        this.resetInputBoxes()
        this.setState({editing: false, id: null})
        history.push('/')
    }

    render({history}) {
        return(
            <div>
                <input type='text' ref='nameBox' onChange={(e) => this.nameChangeHandler(e.target.value)} value={this.state.name}></input>
                <input ref='priceBox' onChange={(e) => this.priceChangeHandler(e.target.value)} value={this.state.price}></input>
                <input type='text' ref='img_urlBox' onChange={(e) => this.imgURLChangeHandler(e.target.value)} value={this.state.imgURL}></input>
                <button onClick={() => this.resetInputBoxes()}>Cancel</button>
                {this.state.editing ? (<button onClick={() => this.updateProduct(history)}>Save Changes</button>) 
                :(<button onClick={() => this.createProduct(history)}>Add to Inventory</button>)}
            </div>
        )
    }

    componentDidUpdate() {
        
    }
}