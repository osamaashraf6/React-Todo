import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const InputTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(e.target.value.trim());
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (title) {
      handleAddTodo(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('please enter yout todo');
    }
  };
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
      />
      <button type="button" className="input-submit" onClick={addHandler}>
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default InputTodo;
