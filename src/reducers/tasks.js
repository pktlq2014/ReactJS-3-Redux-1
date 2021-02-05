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
            // if(action.tasks.name !== '') {
            //     var newTasks = {
            //         id : generateID(),
            //         name : action.tasks.name,
            //         status : action.tasks.status 
            //     }
            //     state.push(newTasks);
            // }
            // cách 2
            console.log(action);
            if(action.tasks.id === "") {
                action.tasks.id = generateID();
                state.push(action.tasks);
            }
            else {
                state.forEach((values, index) => {
                    if(values.id === action.tasks.id) {
                        values.name = action.tasks.name;
                        values.status = action.tasks.status;
                    }
                });
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            // cập nhật lại state, nó giống với setState({})
            return [...state];
        }
        case types.STATUS_FORM: {
            // console.log(action.id);
            // console.log(state);
            state.forEach((values, index) => {
                if (values.id === action.id) {
                    if (values.status === false) {
                        values.status = true;
                    }
                    else {
                        values.status = false;
                    }
                }
            });
            console.log(state);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        // case types.UPDATE_TASKS_NEWS: {
        //     //state = action;
        //     console.log(action);
        //     state.forEach((values, index) => {
        //         if(values.id === action.id) {
        //             values.id = action.id;
        //             values.name = action.tasks.name;
        //             values.status = action.tasks.status;
        //         }
        //     });
        //     return [...state];
        // }
        case types.DELETE_TASKS: {
            state.splice(action.id, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        // case types.SEARCH_TASKS: {
        //     console.log(action.tasks);
        //     var name = action.tasks.name.toLowerCase();
        //     var status = parseInt(action.tasks.status);
        //     if (name !== '') {
        //         state = state.filter((values, index) => {
        //             return values.name.toLowerCase().indexOf(name) !== -1;
        //         });
        //     }
        //     state = state.filter((values, index) => {
        //         if(status === -1) {
        //             return state;
        //         }
        //         else {
        //             return values.status === (status === 0 ? false : true);
        //         }
        //     }); 
        //     //return [...state];
        // }
        default: return state;
    }
};
export default myReducers;