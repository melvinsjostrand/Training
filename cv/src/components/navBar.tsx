import React from 'react'

interface Props {
    cartItemsCount : number
}

const NavBar = ({cartItemsCount} : Props) => {
  return (
    <div>navbar {cartItemsCount}</div>
  )
}

export default NavBar