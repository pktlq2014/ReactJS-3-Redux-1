import * as types from './../constants/ActionTypes';
var initialState = {};
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_TASKS: {
            state = action;
            console.log(state);
            return state;
        }
        case types.DEFAULT_TASKS: {
            state = {};
            return state;
        }
        default: return state;
    }
};
export default myReducers;