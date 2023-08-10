import React from 'react';
import NavButton from './NavButton';
import Image from 'next/image';
import logo from 'public/logo.png';
import Link from 'next/link';

const NavButtons = ({ className }: { className?: string }) => {
    return (
        <div className={`md:flex md:space-x-4 md:items-center ${className}`}>
            <NavButton href='/members' innerText='Members' />
            <NavButton href='/event' innerText='Events' />
            <NavButton href='/gallary' innerText='Gallery' />
            <NavButton href='/contact' innerText='Contact Us' />
        </div>
    );
};

const JoinButton = ({ className }: { className?: string }) => {
    return (
        <Link href='/join' className={className}>
            <button className='py-2 px-4 bg-green-200 text-green-500'>JOIN</button>
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
        <nav className='p-2 text-black border-b-2 select-none'>
            <div className='flex flex-col md:flex-row items-center justify-between md:w-2/3 m-auto'>
                <div className='flex flex-row justify-between w-full md:w-min'>
                    <Logo />
                    <JoinButton className='md:hidden' />
                </div>

                <NavButtons className='hidden md:block' />
                <JoinButton className='hidden md:block' />
                <NavButtons className='md:hidden py-2' />
            </div>
        </nav>
    );
};

export default NavBar;
