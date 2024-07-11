// Data Fetching via loader's: move loading from PostsList to Posts …
import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostList';

function App() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
export  async function loader(){
  const response =  await fetch('http://localhost:8080/posts')
    const resdata = await response.json();
    return resdata.posts?resdata.posts:[];
}