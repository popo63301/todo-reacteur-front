import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title: '',
    description: ''
  };

  submit = () => {
    console.log('salut les amis');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <div>Title:</div>
        <input type="text" name="title" onChange={this.handleChange} />
        <div>Description:</div>
        <textarea
          rows="4"
          name="description"
          cols="50"
          onChange={this.handleChange}
        />
        <br />
        <button type="button" onClick={this.submit}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default TodoForm;
