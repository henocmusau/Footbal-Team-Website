import React from 'react'
import { TrophyIcon } from 'lucide-react'

import { antonio } from '@/lib/fonts/googleFonts'

interface Props {
    total: number
    name: string
}

export default function TrophyItem({ total, name }: Props) {
    return (
        <div className='trophyDiv'>
            <div>
                <span className={antonio.className + ' trophyTotal'}>{total}</span>
                <TrophyIcon className='trophySvg' />
            </div>

            <h3 className={antonio.className + ' trophyCompetition'}>{name}</h3>
        </div>
    )
}
