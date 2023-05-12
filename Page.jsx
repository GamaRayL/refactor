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

  function analyticsTrackClick(url) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <>
      {cards.map(({ title, link, link_title, text, id }) => (
        <Card
          linkClassName={id === 1 ? "card__link--red" : ""}
          title={title.en}
          linkTitle={link_title}
          href={link}
          text={text}
          target={id === 1 ? "_blank" : ""}
          onClick={analyticsTrackClick(link)}
        />
      ))}
    </>
  );
};

export default Page;
