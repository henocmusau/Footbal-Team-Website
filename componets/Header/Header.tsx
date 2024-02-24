'use client'

import React, { useState } from 'react'
import { Navbar } from '..'
import Image from 'next/image'
import logo from '@/assets/logos/logoWhiteAll.svg'
import { AlignCenter, Search } from 'lucide-react'

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const closeNav = () => setNavOpen(false)
    return (
        <header className='header'>
            <div className='container header__container'>
                <button onClick={() => setNavOpen(true)} className='hamburger'>
                    <AlignCenter />
                </button>
                <strong className='brand'>
                    <Image className='brand__image' src={logo} alt='Helka TP logo' />
                </strong>

                <Navbar isOpen={navOpen} closeNav={closeNav} />

                <section className='header__aside'>
                    <button>
                        <Search />
                    </button>
                </section>
            </div>
        </header>
    )
}
