import styles from './editMovie.module.css';
import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Field } from "../../components/Field/Field";
import { useForm } from "../../hooks/useForm";
import { useAppDispatch, useAppSelector } from '../../context/hooks';
import { isMatch, isMin, isPositive } from '../../helpers/validations';
import { setUser } from '../../context/slice';
import { updateMovie } from '../../services/updateMovie';


export const EditMovie = () => {
    const { state } = useLocation();
    const { form, handleChange } = useForm((state));
    const { _id, title, director, genre, url_image, year } = form;
    const { _id: userId } = useAppSelector(({ userReducer }) => userReducer.user)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        delete form._id;
        updateMovie(
            userId!,
            _id,
            form
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
                    label="Titulo"
                    name="title"
                    handleChange={handleChange}
                    value={title}
                    type="text"
                    validation={(value) => isMin(value, 5)}
                    initialError='Por favor proporciona el titulo de la película'
                />
                <Field
                    label="Año"
                    name="year"
                    handleChange={handleChange}
                    value={year}
                    type="number"
                    validation={isPositive}
                    initialError='Por favor proporciona el año de lanzamiento'
                    min={0}
                />
                <Field
                    label="Director"
                    name="director"
                    handleChange={handleChange}
                    value={director}
                    type="text"
                    validation={(value) => isMin(value, 5)}
                    initialError='Por favor proporciona el director de la película'
                />
                <Field
                    label="Género"
                    name="genre"
                    handleChange={handleChange}
                    value={genre}
                    type="text"
                    validation={(value) => isMin(value, 3)}
                    initialError='Por favor proporciona el género'
                />
                <Field
                    label="URL a imagen"
                    name="url_image"
                    handleChange={handleChange}
                    value={url_image}
                    type="url"
                    validation={(value) => isMatch(value, /\.(gif|jpg|png|jpeg|svg|webp|avif)$/, `Debe terminar con una extension de imagen`)}
                    initialError='Por favor proporciona una URL válida con la imagen'
                />
                <input value={"Editar"} type='submit' className={`btn btn-primary ${styles.btnAdd}`} />
            </form>
        </div>
    )
}