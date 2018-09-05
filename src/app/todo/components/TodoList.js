import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  let bgColor = 0;
  return (
    <ol style={css.list}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} bgColor={bgColor++} />
      ))}
    </ol>
  );
};

const css = {
  list: {
    listStyle: 'none',
    color: 'rgba(0,0,0,.7)'
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
