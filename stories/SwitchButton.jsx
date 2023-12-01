import React from 'react';
import PropTypes from 'prop-types';
import './switchButton.css'

export const SwitchButton = ({ onChange }) => {
  return (
    <div className="switch">
      s
      <input className="switch__input" type='checkbox' id='light-mode-toggle' onChange={onChange} />
      <label htmlFor='light-mode-toggle' className="switch__label" />
      m
    </div>

  )
}

SwitchButton.propTypes = {
  onChange: PropTypes.func
}

SwitchButton.defaultProps = {
  onChange: () => {}
};
