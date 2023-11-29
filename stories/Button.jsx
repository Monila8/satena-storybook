import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, size, label, ...props }) => {
  const btnMode = primary ? 'button--primary' : 'button--secondary';
  const btnSize = `button--${size}` 

  return (
    <button
      type="button"
      className={['button', btnSize, btnMode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'xl']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: 'large',
  onClick: () => {},
};
