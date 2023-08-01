import React from 'react'
import Link from 'next/link'

interface NavBarProps {
    href: string,
    innerText: string
}

const NavButton = (props: NavBarProps) => {
    return (
        <Link href={props.href} className='p-2 m-1 text-white hover:text-slate-300 transition'>
            {props.innerText}
        </Link>
    )
}

export default NavButton