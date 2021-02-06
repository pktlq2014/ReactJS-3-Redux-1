import * as types from './../constants/ActionTypes';
var initialState = {
    sort: {
        values: '',
        data: 0
    }
};
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_OUTSIDE: {
            console.log(action);
            var data = {
                values: action.values,
                data: action.data
            }
            state = data;
            console.log(state);
            return state;
        }
        default: return state;
    }
};
export default myReducers;