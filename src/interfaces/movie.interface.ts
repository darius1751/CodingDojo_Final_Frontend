import { Comment } from "./comment.interface";

export interface Movie {
    title: string;
    year: number;
    director: string;
    genre: string;
    url_image: string;
    _id: string;
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
}
