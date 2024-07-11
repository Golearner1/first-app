"use server"
import { uploadImage } from '@/lib/cloudinary';
import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(prevstate,formData) {
   //using use server to convert this action as a server action if we not use it is a form action
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');
    let errors = [];

    // console.log(title,image,content);
    if(!title || title.trim().length===0)
      {
        errors.push("Title is required field")
      }
    if(!content|| content.trim().length===0)
      {
        errors.push("Content is required field")
      }
    if(!image||image.size===0){
        errors.push("required image")
    }
    if (errors.length>0){
      return{errors};
    }
    let imageurl;
    try {
    imageurl=await uploadImage(image);
    } catch(error){
        throw new Error("image uploading failed please try agian later.")
    }
    await storePost({
      imageUrl: imageurl,
      title,
      content,
      userId: 1,
    });

    redirect('/feed');
  }
  export default async function togglePostsLikestatus(Postid){
   await updatePostLikeStatus(Postid,2);
   revalidatePath('/' ,'layout');
  }