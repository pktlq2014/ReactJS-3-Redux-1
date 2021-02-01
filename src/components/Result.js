import React, { Component } from 'react';
class Result extends Component {
    changeBackground = (color, size) => {
        return {
            borderColor: color,
            color: color,
            fontSize : size
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
                <div id="content" style={this.changeBackground(this.props.color, this.props.fontSize)}>
                    Nội dung setting
                </div>
            </div>
        );
    }
}
export default Result;