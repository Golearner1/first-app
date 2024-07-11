// Submitting Data with action's: Add hooks action, redirect and Form
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

function NewPost() {


  return (
    <Modal>
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name='body'required rows={3}  />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name='author' id="name" required  />
      </p>
      <p className={classes.actions}>
        <Link to ="/" type="button" >
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;
 export async function action({request}){
    const formData= await request.formData();
    const postData =Object.fromEntries(formData); //{ body: '...', author: '...' }
    await fetch('http://localhost:8080/posts',{
    method : 'POST',
    body: JSON.stringify(postData),
      headers:{
        'content-Type':'application/json'
      }
      
  });
  return redirect('/');
 }
/*function NewPost() {
  return (
    <form className={style.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;*/