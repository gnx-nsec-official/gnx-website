"use client"

import GalleryImage from '@/components/GallaryImage'
import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Page = () => {
  return (
    <div className='p-2 m-auto w-2/3'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry columnsCount={3}>

          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Page