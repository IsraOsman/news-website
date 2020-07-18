import React from "react";
import NewCard from "./NewCard";
import Im from "../imgs/entertainment.jpg";
import Im1 from "../imgs/politics.jpg";
import Im2 from "../imgs/entertainment1.jpg";
import Im3 from "../imgs/grape.jpg";
import Im4 from "../imgs/tech.jpg";
import Im5 from "../imgs/tech2.jpg";
import Im6 from "../imgs/health.jpg";

function Grid() {
  const news = [
    {
      id: 1,
      img: Im3,
      category: "Health",
      title: "Experts Confident Biden’s COVID-19 Response Could Speed Recovery",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget. Eget egestas purus viverra accumsan. Commodo odio aenean sed adipiscing diam donec",
    },

    {
      id: 2,
      img: Im4,
      category: "Technology",
      title:
        "Coronavirus: Why Singapore turned to wearable contact-tracing tech",
      text:
        "The wearable devices complement the island's existing contact-tracing app, to identify people who might have been infected by those who have tested positive for the virus. All users have to do is carry one, and the battery lasts up to nine months without needing a recharge - something one expert said had stunned him.",
    },

    {
      id: 3,
      img: Im1,
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },

    {
      id: 4,
      img: Im1,
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },

    {
      id: 5,
      img: Im5,
      category: "Politics",
      title:
        "Justice Kavanaugh denies emergency request from Illinois GOP groups seeking to hold large rallies",
      text:
        "The Illinois Republican Party is continuing to push the lawsuit forward in the lower courts, but the Supreme Court will not be stepping in to permit political gatherings.",
    },

    {
      id: 6,
      img: "",
      category: "Sports",
      title:
        "Washington's NFL franchise to drop team name and logo after 87 years",
      text:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure ",
    },
  ];

  const newsList = news.map((news, index) => (
    <div className="grid_item" key={index}>
      <NewCard
        img={news.img}
        category={news.category}
        title={news.title}
        text={news.text}
      />
    </div>
  ));

  return <div className="grid">{newsList}</div>;
}

export default Grid;
