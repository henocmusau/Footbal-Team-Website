import { StaticImageData } from "next/image"


export interface Post {
    title: string
    author?: string
    category?: string
    createdAt?: Date
    image: StaticImageData
}