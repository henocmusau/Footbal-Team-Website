import React from 'react'
import { SectionTitle } from '.'
import { Trophy } from 'lucide-react'
import { antonio } from '@/lib/fonts/googleFonts'
import TrophyItem from './TrophyItem'

export default function Hounours() {
    return (
        <section className='honours'>
            <SectionTitle white text='Plamarès' />
            <TrophyItem name='LINAFOOT' total={2} />
            <TrophyItem name='EPFKIN' total={6} />
            <TrophyItem name='LDC CAF' total={1} />
            <span className='svg' />
        </section>
    )
}
