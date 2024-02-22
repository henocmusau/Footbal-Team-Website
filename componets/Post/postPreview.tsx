import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SectionTitle } from '..'

interface Props {
    post: {
        title: string
        author?: string
        category?: string
        createdAt?: Date
        image: StaticImageData
    }
}

export default function PostPreview({ post }: Props) {
    return (
        <Link href={'/'} className='preview group'>
            {/* <div className='previewImgContainer'> */}
            <Image
                src={post.image}
                alt={post.title}
                className='previewImg'
                placeholder='blur'
            // objectFit='fill'
            />
            {/* </div> */}
            <aside className='aside'>
                <span className='category'>{post.category}</span>
                <time className='date'>{post?.createdAt?.toLocaleDateString()}</time>
            </aside>
            <SectionTitle isSecondary={true} text={post.title} />
        </Link>
    )
}
