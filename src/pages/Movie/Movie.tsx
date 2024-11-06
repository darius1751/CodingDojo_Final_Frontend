import styles from './movie.module.css';
import { NavLink, useLocation } from "react-router-dom"
import { Movie as MovieModel } from "../../interfaces/movie.interface";
import { Comment } from './components/Comment';
export const Movie = () => {
    const { state } = useLocation();
    const { _id, title, director, comments, genre, url_image, year, isOwn } = (state as MovieModel & { isOwn: boolean });
    return (
        <div className={`page`}>
            <h2>{title}</h2>
            <div className={styles.details}>
                <div className={`${styles.descriptions} ${styles.section}`}>
                    <div className={styles.definitions}>
                        <div className={styles.definition}>
                            <span className={styles.descriptionTitle}>Director: </span> <span className={styles.descriptionValue}>{director}</span>
                        </div>
                        <div className={styles.definition}>
                            <span className={styles.descriptionTitle}>Año de lanzamiento: </span><span className={styles.descriptionValue}>{year}</span>
                        </div>
                        <div className={styles.definition}>
                            <span className={styles.descriptionTitle}>Género:</span> <span className={styles.descriptionValue}>{genre}</span>
                        </div>
                    </div>

                    <div>
                        <img src={url_image} alt={title} className={styles.descriptionImage} />
                        <div className={styles.btnOptions}>
                            <NavLink to={`/dashboard/add-comment/${_id}`} state={state} className={`btn btn-secondary ${styles.btn}`}>Escribir una reserña</NavLink>
                            {isOwn && <NavLink to={`/dashboard/edit-movie/${_id}`} state={state} className={`btn btn-primary ${styles.btn}`}>Editar</NavLink>}
                        </div>
                    </div>
                </div>
                <div className={`${styles.comments} ${styles.section}`}>
                    <h3>Reseñas</h3>
                    {
                        comments.map((comment) => <Comment comment={comment} key={comment._id} />)
                    }
                </div>
            </div>
        </div>
    )
}