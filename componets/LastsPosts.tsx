import React from 'react'
import { PostPreview, SectionTitle } from '.'
import { news as posts } from '@/constants/news'

const news = posts.slice(1).reverse()

export default function LastsPosts() {
    return (
        <section className='previewSection'>
            <header className='previewHeader'>
                <SectionTitle text='Dernières actualités' />
            </header>
            {
                news.map((post, i) => (
                    <PostPreview key={i} post={post} />
                ))
            }
        </section>
    )
}
