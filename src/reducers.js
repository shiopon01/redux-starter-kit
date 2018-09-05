import { combineReducers } from 'redux';

// Aggregate Reducers of each routes

import todo from './app/todo/modules/reducers';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
