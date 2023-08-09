"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownProps {
  options: string[],
  innerText?: string,
  onChange: (option: string) => void,
  label?: string
}

const Dropdown = ({ options, innerText = "Select an Option", onChange, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option)
    setIsOpen(false);
  };

  return (
    <div className='py-2'>
      {
        label &&
        <label className='block font-medium mb-1'>
          {label}
        </label>
      }
      <button
        className="border p-2 w-full flex justify-between rounded-md bg-white text-gray-800 hover:bg-gray-100"
        onClick={toggleDropdown}
      >
        {selectedOption || innerText}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute mt-2 bg-white border rounded-md shadow-lg"
        >
          {options.map((option) => (
            <li
              key={option}
              className="p-2 hover:bg-gray-100 cursor-pointer min-w-[60px] text-center border-b-2"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
