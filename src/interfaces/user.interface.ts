import { Movie } from "./movie.interface";

export interface User {
    _id: string;
    name: string;
    lastname: string;
    credentialId: string;
    createdAt: Date;
    updatedAt: Date;
    movies: Movie[];
}


