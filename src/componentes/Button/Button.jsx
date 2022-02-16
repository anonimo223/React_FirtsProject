import React from 'react'

export const Button = ({nameButton, styleButton}) => {
  return (
    <button className={styleButton}>{nameButton}</button>
  )
}
