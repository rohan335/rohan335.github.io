'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react'

import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'


const Card = () => {
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

  const router = useRouter()

  return (
    <div className="flex flex-row w-full h-full border-stone-950 mt-2 p-2 cursor-pointer" style={{borderWidth: 1, justifyContent: 'space-between'}} onClick={() => router.push('https://rohan335.github.io/curvedle/')}>
    <Image src="/curvedle.png" alt="Rohan Desai" height={0} width={0} sizes="100vh" style={{width: '45%', height: 'auto', borderWidth: 1}}/>
    
    <div className="h-11/12 w-1/2 overflow-ellipsis">
      <p className="text-stone-500 text-base">12.22.23</p>
      <p className="font-medium text-lg mt-2">CURVEDLE</p>
      <div className="text-sm mt-2">
        <ResponsiveEllipsis
          text="Built in 5 hours with Sofi Zaozerska & Andy Xu for our Math19 project, Curvedle is a 'wordle-esque' guessing game, where players try to guess a function given its level curves. We hope you enjoy playing it as much as we did building it!"
          maxLine='6'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </div>

    </div>
    </div>
  )
}

export default Card