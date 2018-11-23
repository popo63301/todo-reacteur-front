import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black', width: '300px' }}>
        <h4>Acheter du pain</h4>
        <div>boulangerie banette</div>
      </div>
    );
  }
}

export default TodoListItem;
