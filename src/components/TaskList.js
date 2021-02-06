import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtNameTaskList: '',
            slActiveTaskList: "-1"
        }
    }
    onSearchTasks = (event) => {
        var { target } = event;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        var tasks = {
            name: name === 'txtNameTaskList' ? value : this.state.txtNameTaskList,
            status: name === 'slActiveTaskList' ? value : this.state.slActiveTaskList
        }
        console.log(tasks);
        this.props.onSearchTasks(tasks);
        // this.props.receiveDataFromTaskItemSeachActive(
        //     name === 'txtNameTaskList' ? value : this.state.txtNameTaskList,
        //     name === 'slActiveTaskList' ? value : this.state.slActiveTaskList
        // )
    }
    render() {
        // lúc này this.props.tasks là lấy từ store
        var { tasks, search, sortAlpha, sortOutside } = this.props;
        if (sortOutside.values === 'alpha') {
            tasks.sort((a, b) => {
                if (a.name > b.name) {
                    return sortOutside.data;
                }
                else if (a.name < b.name) {
                    return -sortOutside.data;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            tasks.sort((a, b) => {
                if (a.status > b.status) {
                    return -sortOutside.data;
                }
                else if (a.status < b.status) {
                    return sortOutside.data;
                }
                else {
                    return 0;
                }
            });
        }
        console.log(sortAlpha);
        if (sortAlpha !== '') {
            tasks = tasks.filter((values, index) => {
                return values.name.toLowerCase().indexOf(sortAlpha) !== -1;
            });
        }
        //console.log(tasks);
        //console.log(search);
        // var data = search.name.toLowerCase();
        if (search.name) {
            tasks = tasks.filter((values, index) => {
                return values.name.toLowerCase().indexOf(search.name) !== -1;
            });
        }
        tasks = tasks.filter((values, index) => {
            if (search.status === -1) {
                return tasks;
            }
            else {
                return values.status === (search.status === 1 ? true : false);
            }
        });
        var showTaskItem = tasks.map((values, index) => {
            //index += 1;
            return <TaskItem
                key={values.id}
                index={index}
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
                                    onChange={this.onSearchTasks}
                                    type="text" className="form-control" />
                            </td>
                            <td>
                                <select className="form-control"
                                    name="slActiveTaskList"
                                    value={this.props.slActiveTaskList}
                                    onChange={this.onSearchTasks}>
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


const mapStateToProps = state => {
    return {
        // state.tasks -> tasks là tên dùng khai báo bên reducers -> index.js
        // tasks : -> giống như thằng cha gửi data qua thằng con tasks={this.state.tasks}
        // tasks này là tasks 1
        tasks: state.tasks,
        search: state.search,
        sortAlpha: state.sortAlpha,
        sortOutside: state.sortOutside
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchTasks: (tasks) => {
            dispatch(actions.searchTasks(tasks));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
