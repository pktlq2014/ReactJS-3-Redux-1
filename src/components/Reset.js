import React, { Component } from 'react';
class Reset extends Component {
  resetFontSize = () => {
    var size = this.props.fontSize;
    size = 15;
    this.props.onReceiveReset(size);
  }
  render() {
    return (
        <button type="button" className="btn btn-primary" onClick={this.resetFontSize}>reset</button>
    );
  }
}
export default Reset;