// vì trong project có rất nhiều reducers nên phải combine all lại
// đây là reducers tổng để combine các reducers khác lại
// và các reducers khác nằm trong object
import {combineReducers} from 'redux';
import tasks from './tasks';
import status from './status';
import search from './search';
import updateTasks from './updateTasks';
const myReducers = combineReducers({
    tasks : tasks,
    status : status,
    updateTasks : updateTasks,
    search : search
});
export default myReducers;