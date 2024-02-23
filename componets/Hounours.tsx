import React from 'react'

import { SectionTitle } from '.'
import TrophyItem from './TrophyItem'

export default function Hounours() {
    return (
        <section className='honours'>
            <SectionTitle white text='Palmarès' />
            <TrophyItem name='LINAFOOT' total={2} />
            <TrophyItem name='EPFKIN' total={6} />
            <TrophyItem name='LDC CAF' total={1} />
            <span className='svg' />
        </section>
    )
}
