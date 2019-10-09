import React, { Component } from "react";
import { connect } from "react-redux";
import TextAndForm from './TextAndForm';

class List extends Component {

  deleteHandler = (index) => {
    console.log(index)
    this.props.deleteTodo(index)
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map((todo, index) => (
          <li key={index} className="list-group-item container">
            <TextAndForm
              todo={todo}
              index={index}
              onDelete={() => this.deleteHandler(index)}
            />
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => dispatch({ type: 'DELETE_TODOS', payload: index })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
