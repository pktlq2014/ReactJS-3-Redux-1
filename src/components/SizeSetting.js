import React, { Component } from 'react';
class SizeSetting extends Component {
    onIncrease = (values) => {
        values += 5;
        if (values <= 40) {
            this.props.onReceiveSize(values);
        }
    }
    onDecrease = (values) => {
        values -= 5;
        if (values >= 0) {
            this.props.onReceiveSize(values);
        }
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.color}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={() => this.onDecrease(this.props.color)}>Giảm</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={() => this.onIncrease(this.props.color)}>Tăng</button>
                </div>
            </div>
        );
    }
}
export default SizeSetting;