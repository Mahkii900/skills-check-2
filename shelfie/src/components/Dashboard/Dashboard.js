import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state ={
            inventory: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    getInventory() {
        axios.get('/api/inventory').then(res => {
          this.setState({inventory: res.data})
        })
    }

    componentDidMount() {
        this.getInventory()
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(() => {
            this.getInventory()
        })
    }

    render() {
        const products = this.inventory.map((product) => {
            return <Product
                        key={product.name}
                        product={product}
                        delete={this.deleteProduct}
                    />
        })
        return(
            <div>
                {products}
            </div>
        )
    }
}