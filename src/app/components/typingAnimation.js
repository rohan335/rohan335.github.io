'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        ' student @ HMC ',
        1500,
        ' co-founder @ [un.] ',
        1500,
        ' investor @ Crescent Fund ',
        1500,
        ' coffee lover ☕️ ',
        1500,
      ]}
      repeat={Infinity}
      style={{color: '#FA482B'}}
    ></TypeAnimation>
  )
}

export default TypingAnimation