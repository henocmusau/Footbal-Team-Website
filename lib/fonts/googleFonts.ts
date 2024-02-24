import { Squada_One, Teko, Anton, Inter, Roboto } from 'next/font/google'

export const teko = Teko({
    weight: ['500'],
    fallback: ['Arial', 'sans-serif'],
    subsets: ["latin"]
})

export const inter = Inter({ subsets: ['latin'] })

export const roboto = Roboto({
    weight: '500',
    subsets: ['latin']
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