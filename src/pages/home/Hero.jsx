import bgImg from '../../assets/bg/bg.jpg'
const Hero = () => {
  return (
    <div
      className="lg:mt-2 hero h-[calc(100vh-30vh)] lg:rounded-lg bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-gray-900 lg:rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-3 text-5xl font-bold border-b-2 pb-3">Super Savers</h1>
          <p className="mb-5 text-3xl">
            Get Your All Favorite Super Heros In One Place
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
