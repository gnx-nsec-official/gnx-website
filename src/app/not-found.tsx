"use client"

import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className='h-[90vh] flex items-center justify-center select-none'
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className='h-fit'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.span
          className='font-semibold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          404
        </motion.span>
        <motion.span
          className='text-xl md:text-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Page Not Found
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
