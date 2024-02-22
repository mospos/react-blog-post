import { Link, Form, redirect } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
import css from './NewPost.module.css';

function NewPost() {

  return (
    <Modal>
      <Form method='post' className={css.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author"  />
        </p>
        <p className={css.actions}>
          <Link to='..' type='button'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);   
  await axios.post('http://localhost:8000/posts/add', postData);
  return redirect('/');
}