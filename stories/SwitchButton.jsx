import React from "react";
import PropTypes from "prop-types";
import "./switchButton.css";

export const SwitchButton = ({ onChange, theme }) => {
  return (
    <div className={`switch switch--${theme}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="switch__svg"
      >
        <path 
        className="switch__sun-path"
          d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.6 4.19 4.96 4.19 4.58 4.58C4.19 4.97 4.19 5.61 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.43 6.66 7.44 6.02 7.05 5.64L5.99 4.58ZM18.36 16.95C17.97 16.56 17.33 16.56 16.95 16.95C16.56 17.34 16.56 17.98 16.95 18.36L18.01 19.42C18.4 19.81 19.04 19.81 19.42 19.42C19.81 19.03 19.81 18.39 19.42 18.01L18.36 16.95ZM19.42 5.99C19.81 5.6 19.81 4.96 19.42 4.58C19.03 4.19 18.39 4.19 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.34 7.43 17.98 7.44 18.36 7.05L19.42 5.99ZM7.05 18.36C7.44 17.97 7.44 17.33 7.05 16.95C6.66 16.56 6.02 16.56 5.64 16.95L4.58 18.01C4.19 18.4 4.19 19.04 4.58 19.42C4.97 19.8 5.61 19.81 5.99 19.42L7.05 18.36Z"
          fill="#181E4B"
        />
      </svg>
      <input
        className="switch__input"
        type="checkbox"
        id="light-mode-toggle"
        onChange={onChange}
      />
      <label htmlFor="light-mode-toggle" className="switch__label" />
      <svg
        className="switch__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
        className="switch__moon-path"
          d="M11.0334 3.02706C6.53344 3.51706 3.02344 7.33706 3.02344 11.9771C3.02344 16.9471 7.05344 20.9771 12.0234 20.9771C16.6534 20.9771 20.4734 17.4771 20.9734 12.9771C21.0634 12.1871 20.1934 11.5571 19.4334 12.0271C18.5934 12.5671 17.5934 12.8771 16.5234 12.8771C13.5434 12.8771 11.1234 10.4571 11.1234 7.47706C11.1234 6.41706 11.4334 5.41706 11.9634 4.58706C12.4134 3.91706 11.9234 2.95706 11.0334 3.02706Z"
          fill="#A7B0BF"
        />
      </svg>
    </div>
  );
};

SwitchButton.propTypes = {
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
};

SwitchButton.defaultProps = {
  onChange: () => {},
  theme: 'light'
};
