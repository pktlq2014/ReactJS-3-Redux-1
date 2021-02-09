import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }
    Allow = () => {
        this.setState({
            status: false
        });
    }
    dontAllow = () => {
        this.setState({
            status: true
        });
    }
    render() {
        return (
            <div>
                <button type="button"
                    onClick={this.Allow}
                    class="btn btn-danger">Allow</button>
                <button type="button"
                    onClick={this.dontAllow}
                    class="btn btn-primary">Don't Allow</button>
                <Prompt
                    when={this.state.status}
                    message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default About;