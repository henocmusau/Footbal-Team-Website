import React from "react"

export const CodeElement = ({ children, attributes }: { children: React.ReactNode, attributes: any }) => {
    return (
        <pre {...attributes}>
            <code>{children}</code>
        </pre>
    )
}

export const DefaultElement = ({ children, attributes }: { children: React.ReactNode, attributes: any }) => {
    return <p {...attributes}>{children}</p>
}