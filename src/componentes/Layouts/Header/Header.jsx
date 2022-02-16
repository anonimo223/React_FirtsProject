import React from 'react'
import { Button } from '../../Button/Button'

export const Header = () => {
  return (
    <>
    <nav>
        <Button nameButton="Home" styleButton="nav-button"/>
        <Button nameButton="AboutUS" styleButton="nav-button"/>
        <Button nameButton="Contact" styleButton="nav-button"/>
    </nav>
    </>
  )
}
