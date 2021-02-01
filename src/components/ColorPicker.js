import React, { Component } from 'react';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : [
                'red',
                'blue',
                'green',
                '#ccc'
            ]
        }
    }
    changeColors = (values, index) => {
        this.props.onReceiveColor(values);
    }
    showColors = (values) => {
        return {
            backgroundColor : values
        };
    }
    render() {
        var elementColors = this.state.colors.map((values, index) => {
            return <span key={index} style={this.showColors(values)}
            className={this.props.color === values ? 'active' : ''}
            onClick={() => this.changeColors(values, index)}>
            </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elementColors}
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ColorPicker;