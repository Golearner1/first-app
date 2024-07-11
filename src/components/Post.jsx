//(22. CSS Styling) & Exercise & Another Component: PostsList.jsx
import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({ id,author, body }) {
  return (
    <Link to={id}className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </Link>
  );
}

export default Post;