import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        var {match} = this.props;
        var {name} = match.params;
        console.log(match);
        console.log(name);
        return (
            <div>
                <p>ProductDetail</p>
            </div>
        );
    }
}

export default ProductDetail;