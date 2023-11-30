import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import Traveller from "./assets/Traveller.png"
import './hero.css'

export const Hero = ({}) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__headline">
          Vuelve a volar
          <br />
          en cielos
          <br />
          claros y sin
          <br />
          turbulencias
          </h1>
          <p className="hero__subtitle">
          CONOCE MÁS SOBRE
          <br />
          NUESTRAS POLÍTICAS
          <br />
          PENSADAS PARA TI{" "}
          </p>
          <Button label="Conoce más aquí" primary size="large" />
        </div>
        <figure className="hero__figure">
          <img src={Traveller} alt="" className="hero__image" />
        </figure>
      </div>
    </section>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};
