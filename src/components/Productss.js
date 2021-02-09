import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import { NavLink, Route } from 'react-router-dom';
class About extends Component {
    render() {
        var products = [
            {
                id: 1,
                type: 'ip1',
                name: 'Iphone 1',
                price: 300
            },
            {
                id: 2,
                type: 'ip2',
                name: 'Iphone 2',
                price: 300
            },
            {
                id: 3,
                type: 'ip3',
                name: 'Iphone 3',
                price: 300
            }
        ]
        console.log(this.props.match);
        var { match } = this.props;
        var url = match.url;
        var result = products.map((values, index) => {
            return <NavLink key={index} to={`${url}/${values.type}`}>
                <li className="list-group-item">
                    {values.id} - {values.name} - {values.price}
                </li>
            </NavLink>
        })
        return (
            <div className="container">
                <h1>Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <ul>
                        {result}
                    </ul>
                </div>
                <div className="container">
                    <Route path="/products/:name" component={ProductDetail} />
                </div>
            </div>
        );
    }
}

export default About;