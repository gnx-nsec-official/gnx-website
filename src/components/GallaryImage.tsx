"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GalleryImage: React.FC = () => {
  return (
    <motion.div
      className="rounded flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
    >
      <Image 
        src={`https://ik.imagekit.io/kftm0sihh/default-image.jpg    `}
        height={100}
        width={100}
        alt='img'
        />
    </motion.div>
  );
};

export default GalleryImage;
