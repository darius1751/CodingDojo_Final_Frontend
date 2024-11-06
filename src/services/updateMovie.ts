import { ajax } from "rxjs/ajax";
import { User } from "../interfaces/user.interface";
import { URLS } from "../constants/URLS";
import { CreateMovieDto } from "../interfaces/create-movie.dto.interface";

export const updateMovie = (userId: string, movieId: string, createMovieDto: Partial<CreateMovieDto>) => {
    return ajax<User>({ url: `${URLS.updateMovie}/${userId}/${movieId}`, body: createMovieDto, withCredentials: true, method: 'PATCH' });
}