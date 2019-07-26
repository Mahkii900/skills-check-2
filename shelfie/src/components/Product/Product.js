    import React, {Component} from 'react'

    export default class Product extends Component {
        render() {
            return( 
                <div>
                    <div>
                        {/*Change this part to an image html tage*/}
                        {this.props.product.image_url}
                    </div>
                    <div>
                        <h4>{this.props.product.name}</h4>
                        <div>
                            {this.props.product.price}
                        </div>
                    </div>
                </div>
            )
        }
    }