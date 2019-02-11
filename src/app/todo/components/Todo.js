import React from 'react';
import PropTypes from 'prop-types';

const css = {
  li: {
    width: '100%',
    fontSize: '2em',
  },
};

const Todo = ({
  onClick, completed, text, bgColor,
}) => (
  <li
    onClick={onClick}
    style={Object.assign(
      {
        textDecoration: completed ? 'line-through' : 'none',
        backgroundColor: bgColor % 2 === 0 ? '#F2F1FF' : '#D2CFF2',
      },
      css.li,
    )}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.number.isRequired,
};

export default Todo;
