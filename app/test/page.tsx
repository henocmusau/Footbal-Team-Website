import { TextEditor } from '@/componets/Editor/RichText'
import React from 'react'

export default function page() {
    return (
        <div className=' font-sans'>
            <h2 className='text-3xl font-semibold'>Test Page - Rich Text Editor</h2>
            <TextEditor />
        </div>
    )
}
