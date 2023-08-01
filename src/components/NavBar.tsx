'use client'

import React from 'react'
import NavButton from './NavButton'

const NavButtons = () => {
    return (
        <>
            <NavButton href='/core' innerText='Core Team' />
            <NavButton href='/developers' innerText='Developer Team' />
            <NavButton href='/contact' innerText='Contact US' />
            <NavButton href='/join' innerText='Join' />
        </>
    )
}

const NavBar = () => {
    return (
        <nav className='bg-red-500 p-2 text-white flex items-center justify-center'>
            <div className='text-lg font-bold'>
                GNX
            </div>
            <NavButtons />
        </nav>
    )
}

export default NavBar