import { ElementType } from "react"

export interface SocialsProps {
 text: string
 icon: ElementType
 href: string
}

export interface Post {
 title: string;
 overview: string;
 content: string;
 _id: string;
 slug: {
    current: string;
 };
 _createdAt: string;
}

export interface TitleProps {
 title: string;
}