'use client'

import React from 'react'

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    label?: string,
    className?: string,
    type?: 'text' | 'number' | 'email',
    name?: string,
    value?: string
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
        <>
            {
                label &&
                <label htmlFor={name}>
                    {label}
                </label>
            }
            <input
                id={name}
                onChange={handleChange}
                className={`outline-none p-2 m-2 border border-green-600 rounded ${className}`}
                value={text}
                placeholder={placeholder}
                autoComplete='off'
            />
        </>
    )
}

export default Input