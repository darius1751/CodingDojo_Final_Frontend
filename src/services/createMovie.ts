import { ajax } from "rxjs/ajax";
import { User } from "../interfaces/user.interface";
import { URLS } from "../constants/URLS";
import { CreateMovieDto } from "../interfaces/create-movie.dto.interface";

export const createMovie = (userId: string, createMovieDto: CreateMovieDto) => {
    return ajax<User>({ url: `${URLS.createMovie}/${userId}`, body: createMovieDto, withCredentials: true, method:'POST'});
}