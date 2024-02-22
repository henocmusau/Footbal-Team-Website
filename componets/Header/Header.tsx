import React from 'react'
import { Navbar } from '..'

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <strong className='brand'>
                    HELKATP
                </strong>

                <Navbar />
            </div>
        </header>
    )
}
