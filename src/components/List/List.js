import React, { Component } from 'react'

class List extends Component {

  render (){
    return (
      <ul className="list-group">
        {this.props.todos.map(todo => (
          <li className="list-group-item">{todo}</li>
        ))}
      </ul>
    )    
  }
}

export default List
