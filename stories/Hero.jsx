import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "./hero.css";

export const Hero = ({}) => {
  return (
    <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__headline">
              Vuelve a volar en cielos claros y sin turbulencias
            </h1>

            <p className="hero__subtitle">
              Conoce más sobre nuestras políticas pensadas para ti
            </p>
            <Button label="Conoce más aquí" primary size="large" />
          </div>
        </div>
    </section>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};
