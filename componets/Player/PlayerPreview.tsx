import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { UserRound } from 'lucide-react'

import { antonio } from '@/lib/fonts/googleFonts';

interface Props {
    player: {
        firstName: string;
        lastName: string;
        number: number;
        image: StaticImageData;
        position: string;
    }
}

export default function PlayerPreview({ player }: Props) {
    const { firstName, lastName, number, image, position } = player
    return (
        <div className={'playerItem'}>
            <span className='svg' />

            <h3 className='fullname'>
                <span className='firstName'>{firstName}</span>
                <span className='lastName'>{lastName}</span>
                <p className='position'>{position}</p>
            </h3>

            <p className='number'>{number}</p>

            <Image
                placeholder='blur'
                className='image'
                src={image}
                alt={firstName + ' ' + lastName + ' Profile picture'}
            />

            <aside className='playerItem__aside'>
                <button className='aside__btn'>
                    <UserRound className='aside__svg' />
                    <span className='aside__text'>Voir le Profil</span>
                </button>
            </aside>
        </div>
    )
}
