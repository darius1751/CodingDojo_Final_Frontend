import { ajax } from "rxjs/ajax";
import { User } from "../interfaces/user.interface";
import { URLS } from "../constants/URLS";

export const deleteMovie = (userId: string, movieId: string) => {
    return ajax<User>({ url: `${URLS.deleteMovie}/${userId}/${movieId}`, withCredentials: true, method: 'DELETE' });
}