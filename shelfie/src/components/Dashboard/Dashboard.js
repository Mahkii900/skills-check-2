import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    render() {
        const products = this.props.inventory.map((product) => {
            return <Product product={product}/>
        })
        return(
            <div>
                {products}
            </div>
        )
    }
}