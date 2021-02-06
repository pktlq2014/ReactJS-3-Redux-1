import React, { Component } from "react"
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class Sort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sort: {
				values: '',
				data: 0
			}
		}
	}
	sortOutside = (values, data) => {
		console.log(values, data);
		console.log(typeof data);
		this.setState({
			sort: {
				values: values,
				data: data
			}
		});
		console.log(this.state.sort);
		this.props.sortOutside(values, data);
		//this.props.receiveDataFromSort(values, data);
	}
	render() {
		var { sort } = this.state;
		return (
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Sắp Xếp <i className="fa fa-caret-square-o-down ml-5"></i>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li onClick={() => this.sortOutside("alpha", 1)}>
						<a role="button" className={sort.values === 'alpha' && sort.data === 1 ? 'sort_selected' : ''}>
							<i className="fa fa-sort-alpha-asc pr-5">
								Tên A-Z
                            </i>
						</a>
					</li>
					<li onClick={() => this.sortOutside("alpha", -1)}>
						<a role="button" className={sort.values === 'alpha' && sort.data === -1 ? 'sort_selected' : ''}>
							<i className="fa fa-sort-alpha-desc pr-5">
								Tên Z-A
                            </i>
						</a>
					</li>
					<li role="separator" className="divider"></li>
					<li onClick={() => this.sortOutside("status", 1)}>
						<a role="button"
							className={sort.values === 'status' && sort.data === 1 ? 'sort_selected' : ''}>Trạng Thái Kích Hoạt</a>
					</li>
					<li onClick={() => this.sortOutside("status", -1)}>
						<a role="button"
							className={sort.values === 'status' && sort.data === -1 ? 'sort_selected' : ''
							}>Trạng Thái Ẩn</a></li>
				</ul>
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
		sortOutside: (values, data) => {
			dispatch(actions.sortOutside(values, data));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort)
