import React from 'react'
import { BrevePreview, LastsVideos, SectionTitle } from '..'
import { news } from '@/constants/news'

const posts = [...news].reverse()

export default function Breves() {
    return (
        <section className='breves'>
            <header className='previewHeader'>
                <SectionTitle text='Dernières actualités' />
            </header>
            {/* <section className='brevesList'> */}
            {posts.map((post, i) => (
                <BrevePreview key={i} post={post} />
            ))}
            {/* </section>
            <LastsVideos /> */}

        </section>
    )
}
