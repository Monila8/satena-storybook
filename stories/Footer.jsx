import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from './Logo';
import './footer.css'

export const Footer = ({ socialNetworks }) => {

  return (
    <footer className='footer'>
      <div className="footer__container">
        <Logo />
        <div>
          <ul>
            {socialNetworks.map(sn => (
              <span>
                {sn.icon}
              </span>
            ))}
          </ul>
        </div>

        <p>
          <b>Líneas de atención al cliente</b>
        </p>
        <p>
          Lunes a Viernes de 6:00am a 9:00pm.
          <br />
          Sábados, Domigos y Festivos de 6:00am a 6:00pm
        </p>

        <p>
          (601) 390 6962
          <br />
          Línea directa Bogotá
        </p>
        <p>Avenida El Dorado # 103-08 Interior 11 Bogotá-Colombia.</p>

      </div>
    </footer>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
