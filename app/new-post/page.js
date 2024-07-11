

import { createPost } from '@/actions/posts';
import Postform from '@/components/Post-form';



export default function NewPostPage() {
  
  return(<>
    <Postform action= {createPost} />
    </>
  );
  
}
