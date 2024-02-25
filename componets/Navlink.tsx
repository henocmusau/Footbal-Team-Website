'use client'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

interface Props {
    text: string
    link?: string
    icon?: LucideIcon
    closeNav: () => void
}

export default function Navlink({ text, link = '/', closeNav, icon: Icon }: Props) {
    const pathname = usePathname()
    const isActive = pathname.toLowerCase() === link.toLowerCase()
    return (
        <Link
            href={link ?? '/'}
            onClick={closeNav}
            className={isActive ? 'navlink navPadding activeLink' : 'navlink navPadding'}>
            {Icon ? <Icon className='navlink__icon' /> : null}
            {text}
        </Link>
    )
}
