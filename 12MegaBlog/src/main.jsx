import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPost from "./pages/AllPost.jsx"
import AddPost from "./pages/AddPost.jsx"

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentation={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentation={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentation>
            {" "}
            <AllPost/>
          </AuthLayout>
        )
      },
      {
        path:"/add-posts",
        element:(
          <AuthLayout authentation>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:"/edit-posts/:slug",
        element:(
          <AuthLayout authentation>
            {" "}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:"/posts:slug",
        element:<Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
