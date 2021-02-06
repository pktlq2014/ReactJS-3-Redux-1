import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
      id: ''
    }
  }
  onStatus = () => {
    this.props.onStatus(this.props.id);
  }
  onDeleteTask = () => {
    //this.props.receiveDataFromTaskItemDelete(this.props.index);
    var id = this.props.index;
    console.log(this.props.index);
    console.log(this.props.id);
    this.props.onDeleteTask(id);
    this.props.onCloseForm();
  }
  onUpdateTask = () => {
    //this.props.receiveDataFromTaskItemUpdate(this.props.id);
    var data = {
      name: this.props.name,
      status: this.props.status,
      id: this.props.id
    };
    if (this.props.status1 === false) {
      this.props.onUpdate();
      // this.setState({
      //   name : this.props.name,
      //   status : this.props.status,
      //   id : this.props.id
      // });
      this.props.onUpdateTask(data);
      localStorage.setItem("updateTasksNew", JSON.stringify(data));
      // this.props.onUpdateTaskNews(data, this.props.id);
    }
    else {
      alert("Bạn Phải Tắt Chức Năng Trước Đó!!!");
      this.props.onCloseForm();
    }
  }
  render() {
    //var {tasks} = this.props;
    console.log(this.props.status);
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.name}</td>
        <td className="text-center">
          <span onClick={this.onStatus} className={this.props.status === true ? 'label label-success' : 'label label-danger'}>
            {this.props.status === true ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onUpdateTask}>
            Sửa
          </button>
          &nbsp;
          <button onClick={this.onDeleteTask} type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    status1: state.status,
    tasks: state.tasks
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdate: () => {
      dispatch(actions.openForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onStatus: (id) => {
      dispatch(actions.statusForm(id));
    },
    onUpdateTask: (tasks) => {
      dispatch(actions.updateTasks(tasks));
    },
    // onUpdateTaskNews : (tasks, id) => {
    //   dispatch(actions.updateTasks(tasks, id));
    // },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTasks(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);