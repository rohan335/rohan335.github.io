'use client'

import React from 'react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const NavbarItem = ({header, subheader}) => {
  //takes in the title of the page and renders the navbar item with the title
  return (
    <div>
      <div className='border-stone-950' style={{borderWidth: 1}}></div>

      <div onClick={() => alert("Coming Soon!")}  className='cursor-pointer'>
        <div className='flex flex-row mt-2'>
          <p className='font-bold text-lg'>{header.toUpperCase()}.</p>
          <ArrowTopRightIcon height={25} width={25} style={{marginLeft: 10}}></ArrowTopRightIcon>
        </div>
        <p className='text-lg'>{subheader}</p>
      </div>
    </div>
  )
}

export default NavbarItem