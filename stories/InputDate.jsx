import React from "react"
import PropTypes from 'prop-types'

export const InputDate = ({ onChange }) => {
  return (
    <input type="date" name="" id="" onChange={onChange} />
  )
}

InputDate.propTypes = {
  onChange: PropTypes.func,
}

InputDate.defaultPropTypes = {
  onChange: () => {}
}