/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos, handleChange, handleRemove, setUpdate } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            handleRemove={handleRemove}
            handleChange={handleChange}
            setUpdate={setUpdate}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  todos: PropTypes.any,
};

export default TodosList;
// end of the TodosList