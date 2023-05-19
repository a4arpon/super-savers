import { useLoaderData } from 'react-router-dom'

const Toy = () => {
  const toyData = useLoaderData()
  const { _id, img, title, details, price, rating } = toyData
  return (
    <div className="my-20 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-2 p-2">
        <img src={img} alt="" />
        <div className="">
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p className="mb-2 text-lg">
            <strong>Price :</strong> {price}
          </p>
          <p className="mb-2 text-lg">
            <strong>Ratings :</strong> {rating}
          </p>
          <div className="mb-2 text-lg">
            <details open>
              <summary className="font-semibold">
                Details of {title}
              </summary>
              <p>{details}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toy
