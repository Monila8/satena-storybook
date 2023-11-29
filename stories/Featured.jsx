import React from 'react';
import PropTypes from 'prop-types';
import { FeaturedCard } from './FeaturedCard';

export const Featured = ({ ...props }) => {
  return (
    <section className='featured'>
      <h6>Más vendidos</h6>
      <h3>Destinos Favoritos</h3>

      <div className="features__container">
        {featuredCards.map(fc => (<FeaturedCard key={fc.headline} {...fc} />))}
      </div>
    </section>
  );
};

Featured.propTypes = {
  featuredCards: PropTypes.arrayOf(PropTypes.shape(FeaturedCard.propTypes))
};

Featured.defaultProps = {

};
