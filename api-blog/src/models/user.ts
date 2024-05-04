import { Post } from "./post";

export interface User {
 id: string;
 name: string;
 email: string;
 password: string;
 phone: number;
 posts?: Post[];
}