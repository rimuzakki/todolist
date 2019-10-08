import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map(todo => (
          <li className="list-group-item">{todo}</li>
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
export default connect(mapStateToProps, null)(List);
