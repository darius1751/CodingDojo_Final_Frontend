import { Comment as CommentModel } from '../../../interfaces/comment.interface'
import styles from '../movie.module.css'
type Props = {
    comment: CommentModel
}
export const Comment = ({ comment }: Props) => {
    const { owner, rank, comment: commentText } = comment;
    return (
        <div className={styles.comment}>
            <p className={styles.owner}>{owner}:</p>
            <p className={styles.commentText}>{commentText}</p>
            <p className={styles.rank}>Calificación: {rank}</p>
        </div>
    )
}