import React from "react";
import Enter1 from "../imgs/politics.jpg";

function NewCard(props) {
  return (
    <div className="news-card">
      <div className="news-card_img">
        <img src={Enter1} alt="img" />
      </div>
      <div className="news-card_content">
        <div className="category">{props.category}</div>
        <h3 className="title">{props.title}</h3>
        <span className="date">Published: </span>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export default NewCard;
