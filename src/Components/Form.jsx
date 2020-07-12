import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
    };
  }

  handelTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handelTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <form className="form">
        <div>
          <label className="label">Title </label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handelTitleChange}
          />
        </div>

        <div>
          <label className="label">Text </label>
          <textarea value={this.state.text} onChange={this.handelTextChange} />
        </div>

        <div>
          <a className="btn" href="#">
            PUBLISH
          </a>
        </div>
      </form>
    );
  }
}

export default Form;
