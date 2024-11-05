import { Credential } from "./credential";

export interface CreateUserDto {
    name: string;
    lastname: string;
    credentials: Credential;
}