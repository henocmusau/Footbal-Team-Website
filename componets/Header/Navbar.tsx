import { navbarLinks } from '@/constants/navlinks'
import React from 'react'
import { Navlink } from '..'

navbarLinks

export default function Navbar() {
    return (
        <nav className='navbar'>
            {
                navbarLinks.map((navlink) => (
                    <Navlink key={navlink.link} text={navlink?.text} link={navlink.link} />
                ))
            }
        </nav>
    )
}
