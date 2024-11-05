import { URLS } from "../constants/URLS";
import { CreateUserDto } from "../interfaces/create-user-dto.interface";
import { ajax } from 'rxjs/ajax'
import { User } from "../interfaces/user.interface";
export const createUser = (createUserDto: CreateUserDto) => {
    return ajax.post<User>(URLS.register, createUserDto);
}