"use client"

import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { MapPin, School2 } from 'lucide-react'

const Contact: NextPage = () => {
  const handleClick = () => {

  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center w-full">Contact GNX</h1>
        <div className='grid grid-cols-2 gap-3'>
          <div className="p-6">
            <div className='flex gap-2'>
              <School2 />
              <h2 className="text-lg font-semibold mb-2">NETAJI SUBHASH ENGINEERING COLLAGE</h2>
            </div>
            <div className='flex gap-2'>
              <MapPin />
              <span>
                Techno City, Garia, Ranabhutia, West Bengal 700152
              </span>
            </div>
          </div>
          <div className='form-container p-4 rounded'>
            <div className="mb-4">
              <Input
                label='Name'
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300 bg-transparent"
                onChange={() => { }}
              />
            </div>
            <div className="mb-4">
              <Input
                label='Email'
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300 bg-transparent"
                onChange={() => { }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300 outline-none bg-transparent"
              />
            </div>
            <Button onClick={handleClick}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
