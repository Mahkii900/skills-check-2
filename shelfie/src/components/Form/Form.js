import React, {Component} from 'react'

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

    render() {
        return(
            <div>
                <input onChange={(e) => this.nameChangeHandler(e.target.value)} value={this.state.name}></input>
                <input onChange={(e) => this.priceChangeHandler(e.target.value)} value={this.state.price}></input>
                <input onChange={(e) => this.imgURLChangeHandler(e.target.value)} value={this.state.imgURL}></input>
                <button onClick={() => this.resetInputBoxes}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}