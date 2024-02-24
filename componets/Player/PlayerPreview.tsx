import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { UserRound } from 'lucide-react'
import Link from 'next/link';

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
        <li className={'playerItem gradientBefore'}>
            <h3 className='fullname observer'>
                <span className='firstName'>{firstName}</span>
                <span className='lastName'>{lastName}</span>
                <p className='position'>{position}</p>
            </h3>


            <Image
                placeholder='blur'
                className='image'
                src={image}
                alt={firstName + ' ' + lastName + ' Profile picture'}
            />

            <p className='number observer'>{number}</p>
            <aside className='playerItem__aside'>
                <Link href={'/'} className='aside__btn'>
                    <UserRound className='aside__svg' />
                    <span className='aside__text'>Voir le Profil</span>
                </Link>
            </aside>
        </li>
    )
}
