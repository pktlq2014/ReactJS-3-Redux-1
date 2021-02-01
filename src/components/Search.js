import React, { Component } from "react"

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtKey : ''
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
	onClick = (event) => {
		this.props.receiveDataFromSearch(this.state.txtKey);
	}
	render() {
		return (
			<div className="input-group">
				<input 
				type="text" 
				className="form-control" 
				name="txtKey"
				value={this.state.txtKey}
				onChange={this.onChange}
				placeholder="Nhập từ khóa..." />
				<div className="input-group-btn mr-15">
					<button className="btn btn-primary" onClick={this.onClick} type="button">
						<i className="fa fa-search mr-5"></i>Tìm
					</button>
				</div>
			</div>
		)
	}
}

export default Search
