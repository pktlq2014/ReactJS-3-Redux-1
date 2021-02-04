import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			status: false,
			id: ''
		}
	}
	componentDidMount() {
		//var update = JSON.parse(localStorage.getItem("tasksUpdate"));
		//console.log(update.id);
		//var update = this.props.tasksUpdate;
		var update = this.props.updateTasks;
		console.log(update);
		if (Object.keys(update).length === 0) {
			this.setState({
				id: '',
				name: '',
				status: false
			});
		}
		else {
			this.setState({
				name: update.tasks.name,
				status: update.tasks.status,
				id: update.tasks.id
			});
		}
	}
	// componentWillReceiveProps(nextProps) {
	// 	var update = JSON.parse(localStorage.getItem("tasksUpdate"));
	// 	console.log(update);
	// 	//var update = this.props.tasksUpdate;
	// 	if (nextProps && nextProps.update) {
	// 		this.setState({
	// 			name: update.name,
	// 			status: update.status,
	// 			id: update.id
	// 		});
	// 		console.log(update.name);
	// 		console.log(this.state);
	// 	}
	// 	else {
	// 		this.setState({
	// 			name : '',
	// 			status : false,
	// 			id : ''
	// 		});
	// 	}
	// }
	onSubmit = (event) => {
		event.preventDefault();
		console.log("aaa: " + this.state.id);
		console.log(this.state.name);
		if (this.state.name !== '') {
			this.props.onAddTask(this.state);
		}
		this.props.onCloseTask();
	}
	onChange = (event) => {
		var { target } = event;
		var name = target.name;
		var value = target.type === 'checked' ? target.checked : target.value
		if (name === 'status') {
			value = target.value === 'true' ? true : false
		}
		this.setState({
			[name]: value
		});
	}
	onCloseTask = (event) => {
		this.props.onCloseTask();
	}
	render() {
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{this.state.id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
					</h3>
					<i className="fas fa-window-close" onClick={this.onCloseTask}></i>
				</div>



				<div className="panel-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Tên :</label>
							<input type="text" className="form-control"
								name="name"
								value={this.state.name}
								onChange={this.onChange} />
						</div>
						<label>Trạng Thái :</label>
						<select className="form-control"
							onChange={this.onChange}
							name="status"
							value={this.state.status}
							required="required">
							<option value={true}>Kích Hoạt</option>
							<option value={false}>Ẩn</option>
						</select>
						<br />
						<div className="text-center">
							<button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        	<button type="submit" className="btn btn-danger" onClick={this.onCloseTask}>Hủy Bỏ</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		updateTasks: state.updateTasks
	};
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTask: (tasks) => {
			dispatch(actions.addTask(tasks));
		},
		onCloseTask: () => {
			dispatch(actions.closeForm());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
