import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Blogs from '../pages/blogs/Blogs'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import Toy from '../pages/toy/Toy'

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
        path: '/toy/:id',
        element: <Toy />,
        loader: ({ params }) =>
          fetch(
            'https://b7a11-toy-marketplace-server-side-a4arpon-a4arpon.vercel.app/toy/' +
              params.id
          )
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
