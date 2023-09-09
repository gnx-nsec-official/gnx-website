"use client"

import Image from '@/components/Image'
import React from 'react'


const Page = () => {

  return (
    <div className='p-2 m-auto w-2/3'>
      <Image publicId='samples/woman-on-a-football-field' height={100} width={100}/>
      <Image publicId='samples/cup-on-a-table' height={100} width={100}/>
    </div>
  )
}

export default Page