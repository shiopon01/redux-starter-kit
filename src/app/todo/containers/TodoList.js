import { connect } from 'react-redux';

// import component
import TodoList from '../components/TodoList';

// import actions
import { toggleTodo } from '../modules/todos';

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: value => dispatch(toggleTodo(value))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
