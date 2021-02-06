import * as types from './../constants/ActionTypes';
export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}
export const addTask = (tasks, data) => {
    return {
        type: types.ADD_TASK,
        // mình cần thay đổi gì thì bỏ nó vào đây
        tasks : tasks,
        data : data
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
// export const updateTasksNew = (tasks, id) => {
//     return {
//         type : types.UPDATE_TASKS_NEWS,
//         id : id
//     }
// }
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
export const searchTasks = (tasks) => {
    return {
        type : types.SEARCH_TASKS,
        tasks : tasks
    }
}
export const sortAlpha = (data) => {
    return {
        type : types.SORT_ALPHA,
        data : data
    }
}
export const sortOutside = (values, data) => {
    return {
        type : types.SORT_OUTSIDE,
        values : values,
        data : data
    }
}