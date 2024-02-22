import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import css from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={css.posts}>
          {posts.map((post) => (
            <Post key={post._id} id={post._id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostsList;

