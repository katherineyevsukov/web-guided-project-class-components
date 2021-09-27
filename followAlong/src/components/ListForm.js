import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      input: e.target.value
    });
  };

  // class property to submit form
  handleClick = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" onChange={this.handleChanges}/>
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default ListForm;