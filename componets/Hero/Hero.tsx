import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Teko, Squada_One } from 'next/font/google'

const teko = Teko({
    weight: ['500'],
    fallback: ['AgencyFB', 'Arial', 'sans-serif'],
    subsets: ["latin"]
})

const antonio = Squada_One({
    weight: ['400'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

import { news } from '@/constants/news'
const heroNews = news[0]

export default function Hero() {
    return (
        <Link className='hero group' href={'/'}>
            <Image
                alt={heroNews.title}
                src={heroNews.image}
                fill
                placeholder='blur'
                priority
                className='hero__image group-hover:scale-110 '
            />
            <div className='title__container'>
                <p className='hero_category'>{heroNews?.category}</p>
                <h2 className={'hero__title ' + antonio.className}>{heroNews.title}</h2>
                <time className=''>{heroNews.createdAt.toLocaleDateString()}</time>
            </div>
        </Link>
    )
}
