import React from "react";
import PropTypes from "prop-types";
import "./inputText.css";

export const InputSelect = ({ onChange, options, placeholder }) => {
  return (
    <div className="input__container">
      <select
        className="input input--select"
        type="date"
        name=""
        id=""
        onChange={onChange}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

InputSelect.defaultPropTypes = {
  onChange: () => {},
  options: [{ value: "foo", label: "foo" }],
};
