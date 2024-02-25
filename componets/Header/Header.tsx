'use client'

import React, { useState } from 'react'
import { Navbar, SocialMedia } from '..'
import Image from 'next/image'
import logo from '@/assets/logos/logoWhiteAll.svg'
import { AlignCenter, Search, X } from 'lucide-react'
import { socialMedias } from '@/constants/socialmedias'
import Link from 'next/link'

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const closeNav = () => setNavOpen(false)

    const toggleNav = () => setNavOpen(p => !p)
    return (
        <header className='header'>
            <div className='container header__container'>
                <button onClick={toggleNav} className='hamburger'>
                    {!navOpen ? <AlignCenter /> : <X />}
                </button>

                <Link href={'/'} className='brand'>
                    <strong>
                        <Image className='brand__image' src={logo} alt='Helka TP logo' />
                    </strong>
                </Link>

                <Navbar isOpen={navOpen} closeNav={closeNav} />

                <section className='header__aside'>
                    <button className='header__aside__Btn'>
                        <Search />
                    </button>

                    <ul className='socialMedias'>
                        {
                            socialMedias.map((sm) => (
                                <SocialMedia key={sm.name} {...sm} />
                            ))
                        }
                    </ul>
                </section>

            </div>
        </header>
    )
}
