import { useEffect, useState } from 'react'

const Toys = ({ ins }) => {
  const [toys, setToys] = useState([])
  useEffect(() => {
    fetch(
      'https://b7a11-toy-marketplace-server-side-a4arpon-a4arpon.vercel.app/'
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
      })
  }, [ins])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
      {toys &&
        toys.map((toy) => (
          <div
            className="card card-compact w-full bg-base-100 shadow-xl"
            key={toy._id}
          >
            <figure>
              <img
                src={toy.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toy.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Toys
