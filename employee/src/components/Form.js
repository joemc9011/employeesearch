import React, { Component } from "react";

// reworked activity 18, just trimmed password and combined first and last values

class Form extends Component {
  state = {
    fullName: "",
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.fullName) {
      alert("Fill out name please!");
    } else {
      alert(`Hello ${this.state.fullName}`);
    }

    this.setState({
      fullName: "",

    });
  };

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.fullName}
        </h1>
        <form className="form">
          <input
            value={this.state.fullName}
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
