import React, { Component } from "react"

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
		var update = this.props.tasksUpdate;
		if (update) {
			this.setState({
				name: update.name,
				status: update.status,
				id: update.id
			});
			console.log(update.name);
			console.log(this.state);
		}
	}
	onSubmit = (event) => {
		event.preventDefault();
		var sl = this.state.status;
		console.log(this.state.name);
		console.log(typeof sl);
		this.props.receiveDataFromTaskFormNews(this.state, 0, this.state.name);
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
	onClick = (event) => {
		this.props.receiveDataFromTaskForm(0);
	}
	render() {
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{this.state.id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
					</h3>
					<i className="fas fa-window-close" onClick={this.onClick}></i>
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
                        	<button type="submit" className="btn btn-danger" onClick={this.onClick}>Hủy Bỏ</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default TaskForm
