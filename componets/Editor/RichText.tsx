'use client'
import useStorage from "@/hooks/useStorage";
import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import { CodeElement, DefaultElement } from "./components";

export interface RenderElementProps {
    children: any
    element: Element & { type: string }
    attributes: {
        'data-slate-node': 'element'
        'data-slate-inline'?: true
        'data-slate-void'?: true
        dir?: 'rtl'
        ref: any
    }
}

export interface RenderLeafProps {
    children: any
    leaf: Text
    text: Text
    attributes: {
        'data-slate-leaf': true
    }
}

export function TextEditor() {
    const editor = useMemo(() => withReact(withHistory(createEditor())), []);
    const [value, setValue] = useStorage('text-editor', [
        {
            children: [{ text: 'Entrez le texte de l\'article ici...' }],
        },
    ]);

    const renderElement = useCallback((props: RenderElementProps) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    return (
        <Slate editor={editor} initialValue={value} onChange={(v) => setValue(v)}>
            <Editable
                onKeyDown={(e) => {
                    // let's make the current text bold if the user holds command and hits "b"
                    if (e.metaKey && e.key === 'b') {
                        e.preventDefault();
                        editor.addMark('bold', true);
                    }
                }}
                renderElement={renderElement}
                renderLeaf={(props: RenderLeafProps) => {
                    return (
                        <span
                            {...props.attributes}
                            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
                        >
                            {props.children}
                        </span>
                    )
                }}
            />
        </Slate>
    );
}