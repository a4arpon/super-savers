import useTitle from '../../hooks/useTitle'
import Gallery from './Gallery'
import Hero from './Hero'
import ToyContainer from './ToyContainer'

const Home = () => {
  useTitle('Home | SuperSaver')

  return (
    <div className="container mx-auto">
      <Hero />
      <Gallery />
      <div className="mt-20 px-5">
        <ToyContainer />
      </div>
    </div>
  )
}

export default Home
