import React, { useState } from "react"
import PropTypes from 'prop-types'
import './inputText.css'

export const InputDate = ({ onChange, placeholder }) => {
  const [val, setVal] = useState('')
  const handleChangeInput = (e) => {
    setVal(e.target.value)
    onChange(e.target.value)
  }
  const handleClickClear = () => {
    setVal('')
    onChange('')
  }

  return (
    <span className="input__container">
    <input className="input" type="date" value={val} placeholder={placeholder} onChange={handleChangeInput} />
    {!!val && <button className="input__clear" onClick={handleClickClear}>x</button>}
    </span>
  )
}

InputDate.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

InputDate.defaultPropTypes = {
  onChange: () => {},
  placeholder: 'placeholder',
}