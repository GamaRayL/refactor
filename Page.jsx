import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "./utils";

const Page = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetchData()
      .then((data) => setCards(data))
      .catch(console.error);
  }, []);

  fetchData().then((data) => console.log(data));

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <>
      {cards &&
        cards.map((item) => (
          <Card
            key={item.id}
            linkClassName={item.id === 1 ? "card__link--red" : ""}
            title={item.title.en}
            linkTitle={item.link_title}
            href={item.link}
            text={item.text}
            target={item.id === 1 ? "_blank" : ""}
            onClick={analyticsTrackClick(item.link)}
          />
        ))}
    </>
  );
};

export default Page;
