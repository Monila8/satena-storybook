import React from "react"
import PropTypes from 'prop-types'

export const InputSelect = ({ onChange, options }) => {
  return (
    <select type="date" name="" id="" onChange={onChange}>
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}

InputSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }))
}

InputSelect.defaultPropTypes = {
  onChange: () => { },
  options: [{ value: 'foo', label: 'foo' }],
}