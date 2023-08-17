'use client'

import React from 'react';
import NavButton from './NavButton';
import Image from 'next/image';
import logo from 'public/logo.png';
import Link from 'next/link';
import { motion } from 'framer-motion'

const NavButtons = ({ className }: { className?: string }) => {
    return (
        <div className={`md:flex md:space-x-5 md:items-center ${className}`}>
            <NavButton href='/members' innerText='Members' />
            <NavButton href='/event' innerText='Events' />
            {/* <NavButton href='/gallary' innerText='Gallery' /> */}
            <NavButton href='/contact' innerText='Contact Us' />
            <NavButton href='/about' innerText='About' />
        </div>
    );
};

const JoinButton = ({ className }: { className?: string }) => {
    return (
        <Link href='/join' className={className}>
            <motion.button
                whileHover={{
                    opacity: 0.8,
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                transition={{duration: 0.2}}
                className='py-2 px-4 bg-green-200 text-green-500'>
                JOIN
            </motion.button>
        </Link>
    )
}

const Logo = () => {
    return (
        <Link href='/' className='flex items-center'>
            <Image height={20} width={20} alt='Logo' src={logo} className='m-2' />
            <div className='text-2xl font-bold text-orange-900'>GNX</div>
        </Link>
    )
}

const NavBar = () => {
    return (
        <nav className='p-2 text-black border-b-2 select-none z-10 sticky top-0 w-full overflow-hidden bg-white'>
            <div className='flex flex-col md:flex-row items-center justify-between md:w-2/3 m-auto'>
                <div className='flex flex-row justify-between w-full md:w-min'>
                    <Logo />
                    <JoinButton className='md:hidden' />
                </div>

                <NavButtons className='hidden md:block' />
                <JoinButton className='hidden md:block' />
                <NavButtons className='md:hidden py-2 text-sm' />
            </div>
        </nav>
    );
};

export default NavBar;
