import React, { Component } from "react"
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtKey: ''
		}
	}
	onChange = (event) => {
		var { target } = event;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	}
	sortAlpha = (event) => {
		//this.props.receiveDataFromSearch(this.state.txtKey);
		this.props.sortAlpha(this.state.txtKey);
	}
	render() {
		// var { tasks, sortAlpha } = this.props;
		// console.log(tasks);
		// console.log(sortAlpha);
		// if (sortAlpha !== '') {
		// 	tasks = tasks.filter((values, index) => {
		// 		return values.name.toLowerCase().indexOf(sortAlpha) !== -1;
		// 	})
		// }
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
					<button className="btn btn-primary" onClick={this.sortAlpha} type="button">
						<i className="fa fa-search mr-5"></i>Tìm
					</button>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		sortAlpha: (data) => {
			dispatch(actions.sortAlpha(data));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
