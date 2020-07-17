import React from "react";

function NewCard(props) {
  let today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <div className="news-card">
      <div className="news-card_img">
        <img src={props.img} alt="img" />
      </div>
      <div className="news-card_content">
        <div className="category">{props.category}</div>
        <h3 className="title">{props.title}</h3>
        <span className="date">{date}</span>
        <p className="text">{props.text}</p>
        <a href="#" className="readMore-btn">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewCard;
