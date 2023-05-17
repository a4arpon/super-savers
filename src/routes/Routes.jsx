import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Error from '../pages/error/Error'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])
export default Routes
