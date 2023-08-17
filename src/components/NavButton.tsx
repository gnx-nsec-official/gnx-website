"use client"

import React from 'react'
import Link from 'next/link'

interface NavBarProps {
    href: string,
    innerText: string
}

const NavButton = (props: NavBarProps) => {
    return (
        <Link href={props.href} className='p-2 md:px-4 m-1 text-black transition rounded-md hover:bg-slate-200 whitespace-nowrap'>
            {props.innerText}
        </Link>
    )
}

export default NavButton