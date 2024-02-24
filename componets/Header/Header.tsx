import React from 'react'
import { Navbar } from '..'
import Image from 'next/image'
import logo from '@/assets/logos/logoWhiteAll.svg'
import { AlignCenter, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className='header'>
            <div className='container header__container'>
                <button className='hamburger'>
                    <AlignCenter />
                </button>
                <strong className='brand'>
                    <Image className='brand__image' src={logo} alt='Helka TP logo' />
                </strong>

                <Navbar />

                <section className='header__aside'>
                    <button>
                        <Search />
                    </button>
                </section>
            </div>
        </header>
    )
}
