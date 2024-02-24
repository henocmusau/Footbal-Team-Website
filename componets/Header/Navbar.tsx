'use client'
import { navbarLinks } from '@/constants/navlinks'
import React from 'react'
import { Navlink } from '..'
import { X } from 'lucide-react'

interface Props {
    isOpen: boolean
    closeNav: () => void
}

export default function Navbar({ isOpen, closeNav }: Props) {
    return (
        <>
            <button className='closeBtn' onClick={closeNav}>
                <X />
            </button>
            <nav className={isOpen ? 'navbar navbarActive' : 'navbar'}>
                {
                    navbarLinks.map((navlink) => (
                        <Navlink key={navlink.link} text={navlink?.text} link={navlink.link} />
                    ))
                }
            </nav>
        </>
    )
}
