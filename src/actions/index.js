import * as types from './../constants/ActionTypes';
export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}
export const addTask = (tasks) => {
    return {
        type: types.ADD_TASK,
        // mình cần thay đổi gì thì bỏ nó vào đây
        tasks : tasks
    }
}
export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}
export const openForm = () => {
    return {
        type : types.OPEN_FORM
    }
}
export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}
export const statusForm = (id) => {
    return {
        type : types.STATUS_FORM,
        id : id
    }
}
export const updateTasks = (tasks) => {
    return {
        type : types.UPDATE_TASKS,
        tasks : tasks
    }
}
export const deleteTasks = (id) => {
    return {
        type : types.DELETE_TASKS,
        id : id
    }
}
export const defaultTasks = () => {
    return {
        type : types.DEFAULT_TASKS
    }
}