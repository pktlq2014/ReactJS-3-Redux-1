import * as types from './../constants/ActionTypes';
var initialState = {
    name : '',
    status : -1
};
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TASKS: {
            console.log(action);
            var data = {
                name : action.tasks.name.toLowerCase(),
                status : parseInt(action.tasks.status)
            }
            state = data;
            console.log(state);
            return state;
        }
        default: return state;
    }
};
export default myReducers;