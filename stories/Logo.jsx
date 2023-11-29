import React from 'react';
import './logo.css';
import Icon_s from "./imgs/Icon_s.jpg"
import Icon from "./imgs/Icon.jpg"
import Logo_white from "./imgs/Logo_white.jpg"
import Logotype from "./imgs/Logotype.jpg"
import Tagline_white from "./imgs/Tagline_white.jpg"
import Tagline from "./imgs/Tagline.jpg"

const Logo = ({ type }) => {
  return (
    <div className={`logo ${type}`}>
      {type === 'fullColor' && (
        <div className="large-size">
          <div className="overlap">
            <img src={Tagline} alt="Tagline" className="tagline" />
            <div className="overlap-group">
              <img src={Icon} alt="Icon" className="icon" />
              <img src={Logotype} alt="Logo" className="logotype" />
              </div>
          </div>
        </div>
      )}
      {type === 'white' && (
        <div className="large-size">
          <div className="overlap">
            <img src={Tagline_white} alt="Tagline_white" className="tagline" />
            <div className="overlap-group">
             <img src={Icon} alt="Icon" className="icon" />
             <img src={Logo_white} alt="Logo_white" className="logotype" />
             </div>
          </div>   
        </div>
      )}
      {type === 'small' && (
        <div className="small-size">
          <div className="overlap-group">
            <img src={Icon_s} alt="Icon_s" className="icono" />
          </div>  
        </div>
      )}
    </div>
  );
};

export default Logo;