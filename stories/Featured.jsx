import React from 'react';
import PropTypes from 'prop-types';
import { FeaturedCard } from './FeaturedCard';

export const Featured = ({ featuredCards }) => {
  return (
    <section className='featured'>
      <h6 className='text__pre-headline'>Más vendidos</h6>
      <h3 className='text__headline'>Destinos Favoritos</h3>

      <div className="features__container">
        {featuredCards.map(fc => (<FeaturedCard key={fc.headline} {...fc} />))}
      </div>
    </section>
  );
};

Featured.propTypes = {
  featuredCards: PropTypes.arrayOf(PropTypes.shape(FeaturedCard.propTypes)).isRequired
};

Featured.defaultProps = {

};
