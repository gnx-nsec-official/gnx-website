'use client'

import React from 'react'
import NavButton from './NavButton'
import Image from 'next/image'
import logo from "public/logo.png"
import Link from 'next/link'

const NavButtons = () => {
    return (
        <div>
            <NavButton href='/members' innerText='Members' />
            <NavButton href='/event' innerText='Events' />
            <NavButton href='/gallary' innerText='Gallary' />
            <NavButton href='/contact' innerText='Contact Us' />
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className='p-2 text-black border-b-2 select-none'>
            <div className='flex items-center justify-between w-2/3 m-auto'>
                <div className='flex items-center'>
                    <Image height={20} width={20} alt='Logo' src={logo} className='m-2' />
                    <div className='text-2xl font-bold text-orange-900'>
                        GNX
                    </div>
                </div>
                <NavButtons />
                <Link href="/join">
                    <button className='py-2 px-4 bg-green-200 text-green-500'>JOIN</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar