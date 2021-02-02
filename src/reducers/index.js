// vì trong project có rất nhiều reducers nên phải combine all lại
// đây là reducers tổng để combine các reducers khác lại
// và các reducers khác nằm trong object
import {combineReducers} from 'redux';
import tasks from './tasks';
const myReducers = combineReducers({
    tasks : tasks
});
export default myReducers;