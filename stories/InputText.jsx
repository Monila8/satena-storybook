import React from "react"
import PropTypes from 'prop-types'

export const InputText = ({ onChange, placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} onChange={onChange} />
  )
}

InputText.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

InputText.defaultPropTypes = {
  onChange: () => {},
  placeholder: 'placeholder',
}