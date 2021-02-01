import React, { Component } from 'react';
class Product extends Component {
    onClick = () => {
        alert("name: " + this.props.name + "price: " + this.props.price);
    }
    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt="" src={this.props.image} />
                        <div className="caption" >
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price} VNĐ
                            </p>
                            <p>
                                <a className="btn btn-primary" onClick={this.onClick}>Buy Now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;