import * as types from './../constants/ActionTypes';
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var generateID = () => {
    return s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4();
}
var tasks = JSON.parse(localStorage.getItem("tasks"));
var initialState = tasks ? tasks : [];
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL: {
            return state;
        }
        case types.ADD_TASK: {
            // cách 1
            // var newTasks = {
            //     id : generateID(),
            //     name : action.tasks.name,
            //     status : action.tasks.status 
            // }
            // state.push(newTasks);
            // cách 2
            action.tasks.id = generateID();
            state.push(action.tasks);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        default: return state;
    }
};
export default myReducers;