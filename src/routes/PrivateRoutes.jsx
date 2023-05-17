import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/shared/Loader'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (user) {
    // when the user is available it allows user to browse users authorized pages.
    return children
  } else if (loading) {
    // While application is checking users state it shows a loader.
    return <Loader />
  } else {
    // If the user is not available private route will be redirect to login page
    return <Navigate to={'/login'} replace state={{ from: location }} />
  }
}
export default PrivateRoutes
