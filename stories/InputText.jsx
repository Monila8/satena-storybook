import React, { useState } from "react"
import PropTypes from 'prop-types'
import './inputText.css'

export const InputText = ({ onChange, placeholder }) => {
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
    <input className="input" type="text" value={val} placeholder={placeholder} onChange={handleChangeInput} />
    {!!val && <button className="input__clear" onClick={handleClickClear}>x</button>}
    </span>
  )
}

InputText.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

InputText.defaultProps = {
  onChange: () => {},
  placeholder: 'placeholder',
}