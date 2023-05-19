import { useLoaderData } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Toy = () => {
  const toyData = useLoaderData()
  const { img, title, details, price, rating, seller } = toyData
  useTitle(title + '| SuperSaver')
  return (
    <div className="my-20 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-2 p-2">
        <img src={img} alt="" />
        <div className="">
          <h1 className="text-2xl font-semibold mb-3">
            {title || 'Not Provided'}
          </h1>
          <p className="mb-2 text-lg">
            <strong>Price :</strong> {price || 0}$
          </p>
          <p className="mb-2 text-lg">
            <strong>Ratings :</strong> {rating || 0}
          </p>
          <p className="mb-2 text-lg">
            <strong>Seller :</strong> {seller || 'Not Provided'}
          </p>
          <div className="mb-2 text-lg">
            <details open>
              <summary className="font-semibold">Details</summary>
              <p>{details}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toy
