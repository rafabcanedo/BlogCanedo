import { Post } from "./post";

export enum Categories {
 Tecnology,
 Games,
 Others,
}

export interface Category {
 id: string;
 title: string;
 Posts: Post[];
}