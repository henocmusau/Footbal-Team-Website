import { Squada_One, Teko, Anton } from 'next/font/google'

export const teko = Teko({
    weight: ['500'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

export const antonio = Squada_One({
    weight: ['400'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

export const alumni = Anton({
    weight: ['400'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})