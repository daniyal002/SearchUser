import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import style from './InputMaskNumber.module.css'

const NumberInput = ({ number, handleInput }) => {
  return (
    <InputMask
      mask="99-99-99"
      maskChar=" "
      value={number}
      onChange={handleInput}
      className={style.userVerificationFormInput}
      placeholder='99-99-99'
    />
  )
}

export default NumberInput