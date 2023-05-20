import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Toys = ({ queryCategory }) => {
  AOS.init()
  const [toys, setToys] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/type/${queryCategory}`
      const response = await fetch(url)
      const result = await response.json()
      setToys(result)
    }
    fetchData()
  }, [queryCategory])
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
      {toys &&
        toys.map((toy) => (
          <div
            className="card card-compact w-full bg-white shadow-xl"
            key={toy._id}
            data-aos="flip-left"
          >
            <figure>
              <img src={toy.img} alt="Shoes" className="h-64 pt-5" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl border-b-2 pb-2">
                {toy.title}
              </h2>
              <p className="text-lg">Price: {toy.price}$</p>
              <p className="text-lg">Ratings: {toy.rating}</p>
              <div className="card-actions justify-end border-t-2 pt-2">
                <Link className="btn btn-primary" to={'/toy/' + toy._id}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Toys
