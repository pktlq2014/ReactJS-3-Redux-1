import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtNameTaskList : '',
            slActiveTaskList : -1
        }
    }
    onChange = (event) => {
        var {target} = event;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
        this.props.receiveDataFromTaskItemSeachActive(
            name === 'txtNameTaskList' ? value : this.state.txtNameTaskList,
            name === 'slActiveTaskList' ? value : this.state.slActiveTaskList
        )
    }
    render() {
        var { tasks } = this.props;
        console.log(this.props.tasks);
        var showTaskItem = tasks.map((values, index) => {
            //index += 1;
            return <TaskItem
                key={values.id}
                receiveDataFromTaskItem={this.props.receiveDataFromTaskItem}
                index={index}
                receiveDataFromTaskItemUpdate={this.props.receiveDataFromTaskItemUpdate}
                receiveDataFromTaskItemDelete={this.props.receiveDataFromTaskItemDelete}
                id={values.id}
                name={values.name}
                status={values.status}
            />
        });
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    name="txtNameTaskList"
                                    value={this.props.txtNameTaskList}
                                    onChange={this.onChange}
                                    type="text" className="form-control" />
                            </td>
                            <td>
                                <select className="form-control"
                                    name="slActiveTaskList"
                                    value={this.props.slActiveTaskList}
                                    onChange={this.onChange}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>



                        {showTaskItem}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default TaskList;
