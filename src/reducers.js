import { combineReducers } from 'redux'

// Aggregate Reducers of each routes

import home from './app/home/modules/reducers'
import todo from './app/todo/modules/reducers'

const rootReducer = combineReducers({
  home,
  todo,
})

export default rootReducer
