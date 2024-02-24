import React from 'react'

import { Post } from "@/types/news";
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    post: Post
}

export default function BrevePreview({ post }: Props) {
    return (
        <Link href={'/'} className='breves__item gradientBefore'>
            <Image className='breve__image' alt={post.title} src={post.image} />

            <div className='breve__text observer'>
                <h2 className='breve__title'>{post.title}</h2>
                <aside className='breve__aside'>
                    <p className='category'>{post.category}</p>
                    <time className='date'>{post.createdAt?.toLocaleDateString()}</time>
                </aside>
            </div>
        </Link>
    )
}
