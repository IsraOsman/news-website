import React from "react";
import Enter1 from "../imgs/entertainment.jpg";

class NewCard extends React.Component {
  render() {
    return (
      <div className="news-card">
        <img className="news-card_img" src={Enter1} alt="img" />
        <div className="news-card_content">
          <div className="catogray">Food</div>
          <h3 className="title">COVID19</h3>
          <span className="date">Published: </span>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quam ullam et fugiat perspiciatis veritatis deleniti doloribus
            repellat magnam accusamus.
          </p>
        </div>
      </div>
    );
  }
}

export default NewCard;
