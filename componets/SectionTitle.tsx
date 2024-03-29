import React from 'react'


interface Props {
    text: string
    isSecondary?: boolean
    white?: boolean
}

export default function SectionTitle({ text, isSecondary, white }: Props) {
    const style = isSecondary ? ' sectionTitleSecondary ' : ' sectionTitle'

    if (white) return <h2 className={' sectionTitle sectionTitleWhite'}>{text}</h2>
    return (
        <h2 className={style}>{text}</h2>
    )
}
