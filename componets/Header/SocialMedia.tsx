import { LucideIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface Props {
    name: string;
    link: string;
    icon: LucideIcon;
}

export default function SocialMedia({ name, link, icon: Icon }: Props) {
    return (
        <li>
            <Link href={link} title={name} className='header__socialMedia' target='_blank'>
                <Icon className='header__aside__Btn' />
            </Link>
        </li>
    )
}
