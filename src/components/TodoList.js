import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    );
  }
}

export default TodoList;
