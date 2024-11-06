import { useNavigate } from 'react-router-dom';
import { Movie } from '../../../../interfaces/movie.interface';
import styles from './Card.module.css';
import { useAppDispatch, useAppSelector } from '../../../../context/hooks';
import { deleteMovie } from '../../../../services/deleteMovie';
import { setUser } from '../../../../context/slice';
type Props = {
    movie: Movie;
    isOwn?: boolean;
}
export const Card = ({ movie, isOwn = false }: Props) => {
    const { title, url_image, _id } = movie;
    const rank = ((Math.random() + 1) * 10 - 1).toFixed(2);
    const { _id: userId } = useAppSelector(({ userReducer }) => userReducer.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/dashboard/movie/${_id}`, { state: { ...movie, isOwn } });
    }
    const handleDelete = () => {
        deleteMovie(userId!, _id)
            .subscribe(({ response }) => {
                dispatch(setUser(response));
            });
    }
    return (
        <div className={styles.card}>
            <span>{title}</span>
            <img src={url_image} alt={title} className={styles.cardImage} />
            <p >Calificación: <span className={styles.rank}>{rank}</span></p>
            <div className={styles.btnOptions}>
                <button className={`btn btn-primary`} onClick={handleDetail}>Detalle</button>
                {isOwn && <button className={`btn btn-danger`} onClick={handleDelete}>Eliminar</button>}
            </div>

        </div>
    )
}