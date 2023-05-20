/* eslint-disable camelcase */
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthProvider'
import useTitle from '../../hooks/useTitle'

const AddToy = () => {
  useTitle('Add New Toy | SuperSaver')
  const { user } = useContext(AuthContext)
  const handleToySubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const img = form.img.value
    const price = form.price.value
    const quantity = form.quantity.value
    const category = form.category.value
    const details = form.details.value
    const rating = form.rating.value
    const seller = form.seller.value
    const seller_email = form.seller_email.value
    const toyData = {
      title,
      img,
      price: parseFloat(price).toFixed(2),
      quantity,
      category,
      details,
      rating: parseFloat(rating).toFixed(1),
      seller,
      seller_email
    }
    const response = await fetch(
      'https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/toy/add',
      {
        method: 'POST',
        body: JSON.stringify(toyData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (response?.status === 200) {
      toast.success('Toy Added Successfully')
      form.reset()
    }
  }
  return (
    <div className="my-20 container mx-auto p-2">
      <form onSubmit={handleToySubmit}>
        <h1 className="text-center text-4xl my-5 border-b-2 pb-2 font-bold">
          Add New Toy
        </h1>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mb-2">
            <label>Enter Toy Name</label>
            <input
              type="text"
              required
              className="input input-bordered w-full mt-2"
              name="title"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Price</label>
            <input
              type="text"
              required
              className="input input-bordered w-full mt-2"
              name="price"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Ratings</label>
            <input
              type="text"
              required
              defaultValue="3.5"
              className="input input-bordered w-full mt-2"
              name="rating"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Img Link</label>
            <input
              type="text"
              required
              className="input input-bordered w-full mt-2"
              name="img"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Category</label>
            <select
              className="select select-bordered w-full mt-2"
              name="category"
            >
              <option disabled selected>
                Select A Toy Category
              </option>
              <option value="avengers">Avengers Toy</option>
              <option value="Titans">Titans Toy</option>
              <option value="Justice League">Justice League Toy</option>
            </select>
            <div className="mb-2 mt-3">
              <label>Enter Toy Quantity</label>
              <input
                type="text"
                required
                className="input input-bordered w-full mt-2"
                name="quantity"
              />
            </div>
          </div>
          <div className="mb-2">
            <label>Enter Toy Details</label>
            <textarea
              name="details"
              required
              className="textarea textarea-bordered w-full mt-2"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-2">
            <label>Enter Your Name(Seller Name)</label>
            <input
              type="text"
              required
              className="input input-bordered w-full mt-2"
              name="seller"
              defaultValue={user?.displayName || ''}
            />
          </div>
          <div className="mb-2">
            <label>Enter Your Email(Seller Email)</label>
            <input
              type="text"
              required
              className="input input-bordered w-full mt-2"
              name="seller_email"
              defaultValue={user?.email || ''}
            />
          </div>
        </div>

        <div className="w-full text-center mt-4">
          <button
            className="btn btn-primary btn-outline border-2 w-full lg:w-1/2 font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddToy
