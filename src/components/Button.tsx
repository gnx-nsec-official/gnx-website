import React from 'react'

interface Props {
    onClick: () => void,
    children: React.ReactNode
}

const Button = (props: Props) => {
    return (
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button