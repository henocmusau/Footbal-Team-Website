'use client'
import { navbarLinks } from '@/constants/navlinks'
import React from 'react'
import { Navlink, SocialMedia } from '..'
import { X } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/logos/logoWhiteAll.svg'
import Link from 'next/link'
import { socialMedias } from '@/constants/socialmedias'


interface Props {
    isOpen: boolean
    closeNav: () => void
}

export default function Navbar({ isOpen, closeNav }: Props) {
    return (
        <>
            <nav className={isOpen ? 'navbar navbarActive' : 'navbar'}>
                <Link href={'/'} className='navbar__brand navPadding'>
                    <Image className='navbar__brand__image' src={logo} alt='Helka TP logo' />
                </Link>
                {
                    navbarLinks.map((navlink) => (
                        <Navlink
                            key={navlink.link}
                            {...navlink}
                            closeNav={closeNav}
                        />
                    ))
                }

                <ul className='mobilesocialMedias'>
                    {
                        socialMedias.map((sm) => (
                            <SocialMedia key={sm.name} {...sm} />
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
