import { ajax } from "rxjs/ajax";
import { URLS } from "../constants/URLS";

export const logoutUser = () => { 
    return ajax({ url: URLS.logout, withCredentials: true, method: 'PATCH' });
}