import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <div>Title:</div>
        <input type="text" name="fname" />
        <div>Description:</div>
        <textarea rows="4" cols="50" />
        <br />
        <button type="button">Click Me!</button>
      </div>
    );
  }
}

export default TodoForm;
