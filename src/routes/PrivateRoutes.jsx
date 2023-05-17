import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (user) {
    // when user is available it allows user to browse user's authorized routes.
    return children
  } else if (loading) {
    // While firebase is checking users state it shows a spinner.
    return <Loading />
  } else {
    // If the user is not available private route will redirect user to login page
    return <Navigate to={'/login'} replace state={{ from: location }} />
  }
}
export default PrivateRoutes
