    import React, {Component} from 'react'
    import {Link, withRouter} from 'react-router-dom'

    class Product extends Component {
        render() {
            return( 
                <div>
                    <div>
                        {/*Change this part to an image html tage*/}
                        {this.props.product.image_url}
                    </div>
                    <div>
                        <div>
                            <h4>{this.props.product.name}</h4>
                            <div>
                                {this.props.product.price}
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.props.delete(this.props.product.product_id)}>Delete</button>
                            <Link to={`/edit/${this.props.product.product_id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    </div>
                    {routes}
                </div>
            )
        }
    }

    export default withRouter(Product)