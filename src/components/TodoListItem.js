import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black', width: '300px' }}>
        <h4>{this.props.title}</h4>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

export default TodoListItem;
