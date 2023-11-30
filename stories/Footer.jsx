import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from './Logo';
import './footer.css'

export const Footer = ({ socialNetworks, darkMode }) => {

  return (
    <footer className='footer'>
      <div className="footer__container">
        <Logo forceMedium darkMode={darkMode} />
        <div>
          <ul>
            {socialNetworks.map(sn => (
              <li>
                {sn.icon}
              </li>
            ))}
          </ul>
        </div>

        <p className='footer__text'>
          <b>líneas de atención al cliente</b>
        </p>

        <p className='footer__text'>
          Lunes a viernes de 6:00am a 9:00pm.
          <br />
          Sábados, domigos y festivos de 6:00am a 6:00pm
        </p>

        <p className='footer__text'>
          (601) 390 6962
          <br />
          Línea directa Bogotá
        </p>

        <p className='footer__text'>
          Avenida El Dorado # 103-08 Interior 11 Bogotá-Colombia.
        </p>

      </div>
    </footer>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
