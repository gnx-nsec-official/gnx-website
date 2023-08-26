"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavBarProps {
    href: string,
    innerText: string,
    title?: string
}

const NavButton = (props: NavBarProps) => {
    const pathname = usePathname()
    return (
        <Link
            href={props.href}
            className={`p-2 md:px-4 m-1 text-black transition rounded-md whitespace-nowrap ${pathname.includes(props.href) ? 'bg-slate-100': 'hover:bg-slate-200'}`}>
            <span title={props.title}>
                {props.innerText}
            </span>
        </Link>
    )
}

export default NavButton