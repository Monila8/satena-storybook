import React from "react";
import PropTypes from "prop-types";
import "./featuredCard.css";

export const FeaturedCard = ({ backgroundImage, headline, price, dates, theme}) => {
  return (
    <figure className={`featured-card featured-card--${theme}`}>
      <div
        className="featured-card__image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <figcaption className="featured-card__figcaption">
        {/* truncate */}
        <h6 className="featured-card__headline">
          <span className="featured-card__text">{headline}</span>
          <span className="featured-card__price">{price}</span>
        </h6>
        <p className="featured-card__dates">
          <span>
            <svg
              className="featured-card__svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11Z"
                fill="#181E4B"
              />
            </svg>
          </span>{" "}
          {dates}
        </p>
      </figcaption>
    </figure>
  );
};

FeaturedCard.propTypes = {
  backgroundImage: PropTypes.string,
  headline: PropTypes.string,
  price: PropTypes.string,
  dates: PropTypes.string,
};

FeaturedCard.defaultProps = {
  backgroundImage: "LaMacarena",
  headline: "La macarena",
  price: "$130.000",
  dates: "5 nov - 13 dic",
};
