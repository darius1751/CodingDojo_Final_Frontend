import { ajax } from "rxjs/ajax";
import { User } from "../interfaces/user.interface";
import { URLS } from "../constants/URLS";
import { CreateCommentDto } from "../interfaces/create-comment.dto.interface";

export const addComment = (userId: string, movieId: string, createCommentDto: CreateCommentDto & { owner: string }) => {
    return ajax<User>({ url: `${URLS.addComment}/${userId}/${movieId}`, body: createCommentDto, withCredentials: true, method: 'PUT' });
}