'use client'

import React from 'react';
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
    role: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark",
    message: string
}

const Alert = ({ role, message }: Props) => {
    let bgColorClass = '';
    let textColorClass = '';

    switch (role) {
        case 'success':
            bgColorClass = 'bg-green-100';
            textColorClass = 'text-green-700';
            break;
        case 'danger':
            bgColorClass = 'bg-red-100';
            textColorClass = 'text-red-700';
            break;
        case 'warning':
            bgColorClass = 'bg-yellow-100';
            textColorClass = 'text-yellow-800';
            break;
        case 'info':
            bgColorClass = 'bg-blue-100';
            textColorClass = 'text-blue-800';
            break;
        case 'light':
            bgColorClass = 'bg-gray-100';
            textColorClass = 'text-gray-600';
            break;
        case 'dark':
            bgColorClass = 'bg-gray-800';
            textColorClass = 'text-white dark:bg-black';
            break;
        default:
            bgColorClass = 'bg-gray-100';
            textColorClass = 'text-gray-600';
    }

    return (
        <div
            className={`m-2 rounded-lg ${bgColorClass} px-6 py-5 text-base ${textColorClass} flex justify-between`}
            role="alert"
        >
            <span>
                {message}
            </span>
            <motion.span
                className='cursor-pointer'
                whileHover={{
                    scale: 1.3
                }}
                whileTap={{
                    scale: 0.9
                }}
                >
                <X />
            </motion.span>
        </div>
    );
};

export default Alert;
