'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    heading: string,
    body: string
}

const Card = ({ heading, body }: Props) => {
    return (
        <div className='rounded p-5 m-auto bg-slate-200'>
            <h3 className='text-2xl font-semibold'>
                {heading}
            </h3>
            <span className='text-lg'>
                {body}
            </span>
        </div>
    )
}

export default Card