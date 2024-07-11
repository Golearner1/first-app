//Submitting Data with action's: Add hooks action, redirect and Form
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const post = useLoaderData();

  
  return (
    <>
     
      {post.length>0 &&(<ul className={classes.posts}>
        {post.map((posts)=><Post key={posts.id} id={posts.id}author={posts.author} body={posts.body}/>)}
      </ul>
    )}
    {post.length === 0 && <div style={{textAlign: 'center',color: 'white'}}>
      <h2>There Are No Post Available</h2>
      <p>Start To Add Some</p>
      </div>}  
      
    </>
  );
}

export default PostsList;

// let visibility; updating modal visiblity with variable
// if(modalVisibility){
//   visibility=(<Modal onVisibility={hideModel}>
//     <NewPost 
//     onBodyChange ={changebody} 
//     onAuthorChange ={changeauthor}
//     />
//     </Modal>)
/* {//modalVisibility ?(<Modal onVisibility={hideModel}> with function it should used inside return
      // <NewPost 
      // onBodyChange ={changebody} 
      // onAuthorChange ={changeauthor}
      // />
      // </Modal>):null
      } */
      // visibility for if