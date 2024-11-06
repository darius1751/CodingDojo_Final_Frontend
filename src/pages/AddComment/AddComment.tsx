import styles from './addComment.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Field } from "../../components/Field/Field";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from '../../context/hooks';
import { inRank, isMin } from '../../helpers/validations';
import { setUser } from '../../context/slice';
import { CreateCommentDto } from '../../interfaces/create-comment.dto.interface';
import { addComment } from '../../services/addComment';
const initialMovie: CreateCommentDto = {
    comment: '',
    rank: 0,
}
export const AddComment = () => {
    const { form, handleChange } = useForm(initialMovie);
    const { state } = useLocation();
    const { _id: movieId } = state;
    const { comment, rank } = form;
    const { _id, name, lastname } = useAppSelector(({ userReducer }) => userReducer.user)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addComment(
            _id!,
            movieId,
            { ...form, owner: `${name} ${lastname}` },
        ).subscribe({
            next({ response }) {
                dispatch(setUser(response));
                navigate('/dashboard/movies');
            },
            error(_err) {
                console.warn(_err);
            },
        })
    }
    return (
        <div className={`page`}>
            <form onSubmit={handleSubmit} className={`form`}>
                <h2 >Registro</h2>
                <Field
                    label="Comentarios"
                    name="comment"
                    handleChange={handleChange}
                    value={comment}
                    type="textarea"
                    required
                    validation={(value) => isMin(value, 20)}
                    initialError='Por favor proporciona el comentario'
                />
                <Field
                    label="Calificación"
                    name="rank"
                    handleChange={handleChange}
                    value={rank}
                    type="number"
                    required
                    validation={(value) => inRank(value, 1, 10)}
                    initialError='Por favor proporciona la calificación (1-10)'
                    min={0}
                />
                <input value={"Enviar reseña"} type='submit' className={`btn btn-primary ${styles.btnAdd}`} />
            </form>
        </div>
    )
}