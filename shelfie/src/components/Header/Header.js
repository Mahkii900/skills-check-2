import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import routes from '../../routes'

export default class Header extends Component {
    render() {
        return(
            <div>
                <nav>
                    <div>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/add'>Add Inventory</Link>
                    </div>
                </nav>
                {routes}
            </div>
        )
    }
}