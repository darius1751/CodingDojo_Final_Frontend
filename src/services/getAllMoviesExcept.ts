import { ajax } from "rxjs/ajax";
import { User } from "../interfaces/user.interface";
import { URLS } from "../constants/URLS";

export const getAllMoviesExcept = (userId: string) => { 
    return ajax<User>({ url: `${URLS.getAllMoviesExcept}/${userId}`, withCredentials: true, method: 'GET' });
}