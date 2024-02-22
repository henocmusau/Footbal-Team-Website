import React from 'react'
import { Alumni_Sans, Squada_One, Teko, Anton } from 'next/font/google'

const teko = Teko({
    weight: ['500'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

const antonio = Squada_One({
    weight: ['400'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

const alumni = Anton({
    weight: ['400'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

interface Props {
    text: string
    isSecondary?: boolean
}

export default function SectionTitle({ text, isSecondary }: Props) {
    const style = isSecondary ? ' sectionTitleSecondary ' : ' sectionTitle'
    return (
        <h2 className={antonio.className + style}>{text}</h2>
    )
}
