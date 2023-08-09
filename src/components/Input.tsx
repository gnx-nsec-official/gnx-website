'use client'

import React from 'react'

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    label?: string,
    className?: string,
    type?: 'text' | 'number' | 'email',
    name?: string,
    value?: string,
    icon?: React.ReactNode
}

const Input = ({
    onChange,
    placeholder = '',
    label,
    className = '',
    type = 'text',
    name,
    value = ''
}: InputProps) => {
    const [text, setText] = React.useState<string>(value)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        onChange(e);
    }

    return (
        <div className='py-2'>
            {
                label &&
                <label htmlFor={name} className='block font-medium mb-1'>
                    {label}
                </label>
            }
            <input
                id={name}
                name={name}
                type={type}
                onChange={handleChange}
                className={`outline-none p-2 border rounded w-full ${className}`}
                value={text}
                placeholder={placeholder}
                autoComplete='off'
            />
        </div>
    )
}

export default Input