import React from "react";
import classNames from "classnames";

const Card = (props) => {
  const { title, text, target, linkTitle, href, rel, onClick, linkClassName } =
    props;

  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <a
        className={classNames("card__link link", {
          linkClassName,
        })}
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
