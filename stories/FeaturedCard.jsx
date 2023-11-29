import React from 'react';
import PropTypes from 'prop-types';

export const FeaturedCard = ({ backgroundImage, headline, price, dates }) => {

  return (
    <figure>
      <img src={backgroundImage} />
      <figcaption className='featured-card__figcaption'>
        {/* truncate */}
        <h6 className="featured-card__headline">
          <span className="featured-card__text">{headline}</span>
          <span className="featured-card__price">{price}</span>
        </h6>
        <p className="featured-card__dates">
          <span>icon</span> {dates}
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
  backgroundImage: '',
  headline: 'La macarena',
  price: '$130.000',
  dates: '5 nov - 13 dic'
};
