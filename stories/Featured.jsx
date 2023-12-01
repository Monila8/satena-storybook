import React from "react";
import PropTypes from "prop-types";
import { FeaturedCard } from "./FeaturedCard";
import "./featured.css";

export const Featured = ({ featuredCards, theme }) => {
  return (
    <section className={`featured featured--${theme}`}>
      <h6 className="text__pre-headline">Más vendidos</h6>
      <h3 className="text__headline">Destinos favoritos</h3>

      <div className="featured__container">
        {featuredCards.map((fc) => (
          <FeaturedCard key={fc.headline} {...fc} theme={theme} />
        ))}
      </div>
    </section>
  );
};

Featured.propTypes = {
  featuredCards: PropTypes.arrayOf(PropTypes.shape(FeaturedCard.propTypes))
    .isRequired,
  theme: PropTypes.oneOf(['light', 'dark'])
};

Featured.defaultProps = {
  theme: 'light'
};
