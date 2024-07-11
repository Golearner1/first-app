// Submitting Data with action's: Add hooks action, redirect and Form
import React from 'react'
import ReactDOM from 'react-dom/client'
import App,{loader as apploader} from './routes/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost,{action as actionForNewPost} from './routes/NewPost'
import RootsLayout from './routes/RootsLayout'
import PostDetails,{loader as postDetilsLoader} from './routes/PostDetails'
const creatingpathforrouter = createBrowserRouter([
  {
    path:'/',
    element: <RootsLayout />,
    children:[
      {path:'/',
      element:<App />,
      loader: apploader,
      children:[
        {path:'/create-post',element:<NewPost />, action:actionForNewPost},
        {path:'/:postId',element:<PostDetails />, loader:postDetilsLoader}
      ],
    },  
  ],
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={creatingpathforrouter} />
  </React.StrictMode>
)
