import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Productss from './Productss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }
    onChange = (event) => {
        var {target} = event;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        var {txtUsername} = this.state;
        var {txtPassword} = this.state;
        if(txtUsername === 'vanty' && txtPassword === '123456') {
            return <Redirect to="/products"/>
        } 
        return (
            <form onSubmit={this.onSubmit}>
                <legend>Login</legend>
                <div className="form-group">
                    <label for="">Username: </label>
                    <input type="text"
                        name="txtUsername"
                        value={this.state.txtUsername}
                        onChange={this.onChange}
                        className="form-control" id="" placeholder="Input username" />
                </div>
                <div className="form-group">
                    <label for="">Password: </label>
                    <input type="password"
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={this.onChange}
                        className="form-control" id="" placeholder="Input password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Login;