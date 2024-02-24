'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    text: string
    link?: string
}

export default function Navlink({ text, link = '/' }: Props) {
    const pathname = usePathname()
    const isActive = pathname.toLowerCase() === link.toLowerCase()
    return (
        <Link
            href={link ?? '/'}
            className={isActive ? 'navlink activeLink' : 'navlink'}>
            {text}
        </Link>
    )
}
