import React from "react";
import NewCard from "./NewCard";

function Grid() {
  const news = [
    {
      id: 1,
      img: "",
      category: "Health",
      title: "Experts Confident Biden’s COVID-19 Response Could Speed Recovery",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget. Eget egestas purus viverra accumsan. Commodo odio aenean sed adipiscing diam donec",
    },

    {
      id: 2,
      img: "",
      category: "Technology",
      title:
        "Coronavirus: Why Singapore turned to wearable contact-tracing tech",
      text:
        "The wearable devices complement the island's existing contact-tracing app, to identify people who might have been infected by those who have tested positive for the virus. All users have to do is carry one, and the battery lasts up to nine months without needing a recharge - something one expert said had stunned him.",
    },

    {
      id: 3,
      img: "",
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },

    {
      id: 4,
      img: "",
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },

    {
      id: 5,
      img: "",
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },
  ];

  const newsList = news.map((news, index) => (
    <div className="grid_item">
      {" "}
      <NewCard
        key={index}
        category={news.category}
        title={news.title}
        text={news.text}
      />
    </div>
  ));

  return <div className="grid">{newsList}</div>;
}

export default Grid;
