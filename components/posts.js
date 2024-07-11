"use client";
import {useOptimistic } from 'react'
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import togglePostsLikestatus from '@/actions/posts';
import Image from 'next/image';

function Post({ post,action }) {
 
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} fill alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action ={action.bind(null,post.id)} className={post.isLiked? 'liked' : ''}>
            <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticposts,updatedoptimisticposts] = useOptimistic(posts,(prevPost,updatedpostId)=>{
    const updatedpostindex = prevPost.findIndex((post)=>{post.id===updatedpostId});

    if (updatedpostindex === -1){
      return prevPost;
    }
    const updatedpost ={...prevPost[updatedpostindex]}
    updatedpost.likes=updatedpost.likes +(updatedpost.likes?-1:+1);
    updatedpost.isLiked =!updatedpost.isLiked;
    const newposts=[...prevPost]
    newposts[updatedpostindex]=updatedpost;
    return newposts;
  });
  if (!optimisticposts || optimisticposts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }
  async function updatepost(postid){
    updatedoptimisticposts(postid);
    await togglePostsLikestatus(postid);
  }

  return (
    <ul className="posts">
      {optimisticposts.map((post) => (
        <li key={post.id}>
          <Post post={post} action ={updatepost}/>
        </li>
      ))}
    </ul>
  );
}
