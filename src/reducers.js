import { combineReducers } from 'redux'

// import todos from './app/home/modules/todos'
// import visibilityFilter from './app/home/modules/visibilityFilter'
import homeReducer from './app/home/modules/reducers'

const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer