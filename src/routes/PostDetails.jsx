import {  useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './PostDetails.module.css';

export default function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post can not be found.</p>
                    <p>
                        <Link to={'..'} className={classes.btn}>
                            Okay
                        </Link>
                    </p>

                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <div className={classes.details}>
            <p  className={classes.author}>{post.author}</p>
            <p className={classes.body}>{post.body}</p>
            </div>
            

        </Modal>
    )
}

export async function loader({params}) {
    const response = await fetch('http://localhost:8000/posts/'+ params.id);
    const resData = await response.json();
    return resData;
}

