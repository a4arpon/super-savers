import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Blogs from '../pages/blogs/Blogs'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/login/Register'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])
export default Routes
