import { combineReducers } from 'redux';

// Aggregate Reducers for each modules

import todos from './todos';

const reducers = combineReducers({
  todos
});

export default reducers;
