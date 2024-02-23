import React from 'react'

import { players } from '@/constants/players'
import { PlayerPreview } from '..'

export default function PlayersPreview() {
    return (
        <section className='playersPreview'>
            {
                players.map((player, i) => (
                    <PlayerPreview key={i} player={player} />
                ))
            }
        </section>
    )
}
