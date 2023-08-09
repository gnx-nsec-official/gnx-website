import React from 'react'

interface Props {
    onClick: () => void,
    children: React.ReactNode
}

const Button = (props: Props) => {
    return (
        <button className='bg-green-400 text-white p-2 m-2' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button