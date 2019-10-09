import React, { Component } from 'react';

class TextAndForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: 'show',
      text: props.todo
    }
  }

  editButtonHandler = () => {
    this.setState({
      viewMode: 'edit'
    })
  }

  saveButtonHandler = () => {

  }

  cancelButtonHandler = () => {
    this.setState({
      viewMode: 'show'
    })
  }

  deleteButtonHandler = () => {
    this.props.onDelete()
  }

  onChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    // default tampilan todo berupa text
    var todo = (
      <p>{this.props.todo}</p>
    )

    // default tampilan disamping text todo berupa tombol edit
    var buttonEdit = (
      <button
        className="btn btn-primary"
        onClick={this.editButtonHandler}
      >
        Edit
      </button>
    )

    // jika viewMode berubah menjadi edit
    if (this.state.viewMode === 'edit') {
      // ganti elemen text todo menjadi form input
      todo = (
        <input
          className="form-control"
          type="text"
          value={this.state.text}
          onChange={this.onChangeHandler}
        />
      )

      buttonEdit = (
        <>
          <button
            className="btn btn-success"
            onClick={this.saveButtonHandler}
          >
            Save
          </button>
          <button
            className="btn btn-waning"
            onClick={this.cancelButtonHandler}
          >
            Cancel
          </button>
        </>
      )
    }

    return (
      <div className="row">
        <div className="col-8">
          {todo}
        </div>
        <div className="col-4">
          {buttonEdit}
          <button
            className="btn btn-danger"
            onClick={this.deleteButtonHandler}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TextAndForm;