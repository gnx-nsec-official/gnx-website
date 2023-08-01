'use client'

import React from 'react'

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    label?: string,
    className?: string
}

const Input = (props: InputProps) => {
    const [text, setText] = React.useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        props.onChange(e);
    }

    return (
        <div>
            {
                props.label &&
                <label>
                    {props.label}
                </label>
            }
            <input
                onChange={handleChange}
                className={`outline-none p-2 m-2 border border-green-600 rounded ${props.className}`}
                value={text}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input