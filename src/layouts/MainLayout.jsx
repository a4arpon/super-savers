import AOS from 'aos'
import 'aos/dist/aos.css'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'
const MainLayout = () => {
  AOS.init()
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
