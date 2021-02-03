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