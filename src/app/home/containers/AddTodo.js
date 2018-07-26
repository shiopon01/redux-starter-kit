import { connect } from 'react-redux'

// import component
import AddTodo from '../components/AddTodo'

// import actions
import { addTodo } from '../modules/todos'

const mapDispatchToProps = dispatch => {
  const addTodoClick = (value) => dispatch(addTodo(value))

  return {
    addTodoClick
  }
}

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo)

export default AddTodoContainer