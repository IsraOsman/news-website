import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
      category: "",
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

  handleSubmit = (event) => {
    alert(`${this.state.text} ${this.state.title} ${this.state.category}`);
    event.preventDefault();
  };

  handleCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="title">
          <label className="label">Title </label>
          <input
            className="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handelTitleChange}
          />
        </div>

        <div
          className="categroy-btns"
          value={this.state.category}
          onChange={this.handleCategory}
        >
          <label className="label">Category </label>

          <div className="categroy-btn">
            <input type="radio" name="categroy" value="health" />
            <label>Health </label>
          </div>

          <div className="categroy-btn">
            <input type="radio" name="categroy" value="politics" />
            <label>Politics</label>
          </div>

          <div className="categroy-btn">
            <input type="radio" name="categroy" value="technology" />
            <label>Technology</label>
          </div>

          <div className="categroy-btn">
            <input type="radio" name="categroy" value="sports" />
            <label>Sports</label>
          </div>

          <div className="categroy-btn">
            <input type="radio" name="categroy" value="entertainment" />
            <label>Entertainment</label>
          </div>
        </div>

        <div className="text">
          <label className="label">Text </label>
          <textarea value={this.state.text} onChange={this.handelTextChange} />
        </div>

        <div>
          <button type="submit" className="btn" href="#">
            PUBLISH
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
