import useTitle from '../../hooks/useTitle'
import Feedback from './Feedback'
import FunWorld from './FunWorld'
import Gallery from './Gallery'
import Hero from './Hero'
import ToyContainer from './ToyContainer'

const Home = () => {
  useTitle('Home | SuperSaver')

  return (
    <div className="container mx-auto">
      <Hero />
      <Gallery />
      <div className="mt-20 px-2">
        <ToyContainer />
      </div>
      <FunWorld />
      <Feedback />
    </div>
  )
}

export default Home
