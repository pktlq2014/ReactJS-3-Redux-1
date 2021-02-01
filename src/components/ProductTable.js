import React, { Component } from 'react';
class ProductTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><span className="label label-success">{this.props.price}$</span></td>
            </tr>
        );
    }
}
export default ProductTable;