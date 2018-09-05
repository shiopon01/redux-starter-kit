import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addTodoClick }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodoClick(input.value);
          input.value = '';
        }}
      >
        <input
          style={css.input}
          ref={node => {
            input = node;
          }}
        />
        <button style={css.button} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const css = {
  input: {
    width: '100%',
    fontSize: '1.5em'
  },

  button: {
    width: '90%',
    fontSize: '1.5em'
  }
};

AddTodo.propTypes = {
  addTodoClick: PropTypes.func.isRequired
};

export default AddTodo;
