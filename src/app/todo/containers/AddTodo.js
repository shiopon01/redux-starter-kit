import { connect } from 'react-redux';

// import component
import AddTodo from '../components/AddTodo';

// import actions
import { addTodo } from '../modules/todos';

const mapDispatchToProps = dispatch => ({
  addTodoClick: value => dispatch(addTodo(value)),
});

const AddTodoContainer = connect(
  null,
  mapDispatchToProps,
)(AddTodo);

export default AddTodoContainer;
