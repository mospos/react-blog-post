import { Link } from 'react-router-dom';
import css from './Post.module.css'

function Post({ id, body, author }) {
    return (
        <li className={css.post}>
            <Link to={id}>
                <p className={css.author}>{author}</p>
                <p className={css.text}>{body}</p>
            </Link>
        </li>
    )
}

export default Post;