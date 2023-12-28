import React from 'react'
import NavbarItem from './navbarItem'

const Navbar = () => {
  return (

    <div className='flex flex-row mt-8 justify-between w-11/12'>
      <div>
        <p className='font-medium text-lg'>Rohan Desai</p>
        <p className='font-medium text-lg'>2023</p>
      </div>

      <div className='flex flex-row w-3/5 justify-between'>
        <NavbarItem header="About" subheader="Who am I?"/>
        <NavbarItem header="Left Brain" subheader="The creative side."/>
        <NavbarItem header="Right Brain" subheader="The analytical side."/>
        <NavbarItem header="Connect" subheader="I'd love to chat."/>
      </div>
    </div>

  )
}

export default Navbar