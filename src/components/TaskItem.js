import React, { Component } from "react";
class TaskItem extends Component {
  onClick = () => {
    this.props.receiveDataFromTaskItem(this.props.id);
  }
  onDelete = () => {
    this.props.receiveDataFromTaskItemDelete(this.props.index);
  }
  onUpdate = () => {
    this.props.receiveDataFromTaskItemUpdate(this.props.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.index+1}</td>
        <td>{this.props.name}</td>
        <td className="text-center">
          <span onClick={this.onClick} className={this.props.status === true ? 'label label-success' : 'label label-danger'}>
            {this.props.status === true ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
            Sửa
          </button>
          &nbsp;
          <button onClick={this.onDelete} type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;