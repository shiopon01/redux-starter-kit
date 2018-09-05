import { connect } from 'react-redux';

// Page root component
import TodoComponent from './Todo';

const TodoContainer = connect()(TodoComponent);

export default TodoContainer;
