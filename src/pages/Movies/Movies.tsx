import styles from './movies.module.css';
import { useAppSelector } from "../../context/hooks"
import { Card } from './components/Card/Card';
import { useEffect, useState } from 'react';
import { getAllMoviesExcept } from '../../services/getAllMoviesExcept';
import { Movie } from '../../interfaces/movie.interface';

export const Movies = () => {
    const user = useAppSelector(({ userReducer }) => userReducer.user);
    const [otherMovies, setOtherMovies] = useState<Movie[]>([]);
    const { name, lastname, movies, _id } = user;
    useEffect(() => {
        getAllMoviesExcept(_id!)
            .subscribe(({ response }) => { setOtherMovies(response.movies) })
    }, [])
    return (
        <div className={`page`}>
            <h2>Bienvenido de vuelta {`${name} ${lastname}`} </h2>
            <div className={styles.cards}>
                {
                    movies?.map((movie) => <Card movie={movie} isOwn key={movie._id} />)
                }
                { 
                   otherMovies?.map((movie) => <Card movie={movie} key={movie._id} />) 
                }
            </div>
        </div>
    )
}