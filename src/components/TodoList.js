import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

import axios from 'axios';

class TodoList extends Component {
  state = {
    name: 'toto',
    list: []
  };

  componentDidMount() {
    axios
      .get('https://todo-reacteur-back.herokuapp.com/getTodos')
      .then(response => {
        this.setState({ list: response.data });
      });
  }

  render() {
    const listFormatted = this.state.list.map(elem => (
      <TodoListItem title={elem.title} description={elem.description} />
    ));

    return <div>{listFormatted}</div>;
  }
}

export default TodoList;
