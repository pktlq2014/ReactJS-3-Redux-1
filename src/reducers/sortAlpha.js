import * as types from './../constants/ActionTypes';
var initialState = '';
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_ALPHA: {
            console.log(action);
            state = action.data.toLowerCase();
            console.log(state);
            return state;
        }
        default: return state;
    }
};
export default myReducers;