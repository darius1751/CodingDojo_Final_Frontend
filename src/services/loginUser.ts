import { ajax } from 'rxjs/ajax';
import { URLS } from '../constants/URLS';
import { LoginDto } from '../interfaces/login-dto.interface';
import { User } from '../interfaces/user.interface';
export const loginUser = (loginDto: LoginDto) => {
    return ajax<User>({ url: URLS.login, body: loginDto, withCredentials: true, method: 'POST' });
}