import {createStore} from 'redux';
import {tasksReducer} from './tasksSlice';

const store = createStore(tasksReducer)

export default store
