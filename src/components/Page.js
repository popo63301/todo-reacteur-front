import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Page extends Component {
  render() {
    return (
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default Page;
