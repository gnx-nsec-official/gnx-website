"use client"

import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';

interface NavBarProps {
    href: string,
    innerText: string
}

const NavButton = (props: NavBarProps) => {
    return (
        <Link href={props.href} className='p-2 m-1 text-black transition rounded-md hover:bg-slate-200'>
            {props.innerText}
        </Link>
    )
}

export default NavButton