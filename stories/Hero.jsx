import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const Hero = ({ ...props }) => {

  return (
    <section className='hero'>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__headline">Vuelve a volar en cielos claros y sin turbulencias</h1>
          <p className="hero__subtitle">Conoce más sobre las nuestras políticas pensadas para tí </p>
          <Button label="Conoce más aquí" primary size="large" />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
};

Hero.defaultProps = {
};
