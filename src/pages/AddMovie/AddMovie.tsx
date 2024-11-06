import styles from './addMovie.module.css';
import { useNavigate } from "react-router-dom";
import { Field } from "../../components/Field/Field";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import { CreateMovieDto } from '../../interfaces/create-movie.dto.interface';
import { createMovie } from '../../services/createMovie';
import { useAppDispatch, useAppSelector } from '../../context/hooks';
import { isMatch, isMin, isPositive } from '../../helpers/validations';
import { setUser } from '../../context/slice';
const initialMovie: CreateMovieDto = {
    title: '',
    director: '',
    genre: '',
    url_image: '',
    year: 0
}
export const AddMovie = () => {
    const { form, handleChange } = useForm(initialMovie);
    const { title, director, genre, url_image, year } = form;
    const { _id } = useAppSelector(({ userReducer }) => userReducer.user)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createMovie(
            _id!,
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
                    required
                    validation={(value) => isMin(value, 5)}
                    initialError='Por favor proporciona el titulo de la película'
                />
                <Field
                    label="Año"
                    name="year"
                    handleChange={handleChange}
                    value={year}
                    type="number"
                    required
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
                    required
                    validation={(value) => isMin(value, 5)}
                    initialError='Por favor proporciona el director de la película'
                />
                <Field
                    label="Género"
                    name="genre"
                    handleChange={handleChange}
                    value={genre}
                    type="text"
                    required
                    validation={(value) => isMin(value, 3)}
                    initialError='Por favor proporciona el género'
                />
                <Field
                    label="URL a imagen"
                    name="url_image"
                    handleChange={handleChange}
                    value={url_image}
                    type="url"
                    required
                    validation={(value) => isMatch(value, /\.(gif|jpg|png|jpeg|svg|webp|avif)$/, `Debe terminar con una extension de imagen`)}
                    initialError='Por favor proporciona una URL válida con la imagen'
                />
                <input value={"Agregar"} type='submit' className={`btn btn-primary ${styles.btnAdd}`} />
            </form>
        </div>
    )
}