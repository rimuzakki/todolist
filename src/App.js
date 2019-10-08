import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form'
import List from './components/List/List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
  }
  
  handleSubmit = (todo) => {
    this.setState(prevState => (
      {todos: prevState.todos.concat(todo) }
    ))
  }

  render() {
    return (
      <div className="App container">
        <Form submit={this.handleSubmit}/>
        <List todos={this.state.todos} />        
      </div>
    );
  }
}

export default App;
