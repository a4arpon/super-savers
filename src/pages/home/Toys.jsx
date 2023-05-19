import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Toys = ({ queryCategory }) => {
  const [toys, setToys] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      let url =
        'https://b7a11-toy-marketplace-server-side-a4arpon-a4arpon.vercel.app/'
      if (queryCategory) {
        url = `https://b7a11-toy-marketplace-server-side-a4arpon-a4arpon.vercel.app/type/${queryCategory}`
      }
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
            className="card card-compact w-full bg-base-100 shadow-xl"
            key={toy._id}
          >
            {/* <figure><img src={toy.img} alt="Shoes" /></figure> */}
            <div className="card-body">
              <h2 className="card-title text-xl border-b-2 pb-2">
                {toy.title}
              </h2>
              <p className="text-lg">Price: {toy.price}</p>
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
