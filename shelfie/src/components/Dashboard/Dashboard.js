import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(() => {
            this.props.getInventory()
        })
    }

    render() {
        const products = this.props.inventory.map((product) => {
            return <Product
                        key={product.name}
                        product={product}
                        delete={this.deleteProduct}
                        selectProduct={this.props.selectProduct}
                    />
        })
        return(
            <div>
                {products}
            </div>
        )
    }
}