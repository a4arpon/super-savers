import { useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { AuthContext } from '../../contexts/AuthProvider'
import useTitle from '../../hooks/useTitle'
import ToyTableHead from './ToyTableHead'
import ToyTableRow from './ToyTableRow'
const MyToys = () => {
  useTitle('My Toys | SuperSaver')
  const { user } = useContext(AuthContext)
  const email = user?.email
  const [myToys, setMyToys] = useState([])
  const [updateAbleToy, setUpdateAbleToy] = useState({})
  const modalToggler = useRef()
  useEffect(() => {
    fetch(
      'https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/myToys',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data))
      .catch((err) => console.log(err))
  }, [email])
  const delToyFormList = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/toy/${id}`,
          {
            method: 'DELETE'
          }
        )
        const tempToyList = myToys.filter((toys) => toys._id !== id)
        setMyToys(tempToyList)
        Swal.fire('Deleted!')
      }
    })
  }
  const updateToyDetails = async (e) => {
    e.preventDefault()
    const _id = updateAbleToy?._id
    const form = e.target
    const price = form.price.value
    const quantity = form.quantity.value
    const details = form.details.value
    const updatedToy = {
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity),
      details
    }
    const response = await fetch(
      `https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/toy/${_id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(updatedToy),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.status === 200) {
      toast.success('Toy Updated')
      modalToggler.current.checked = false
    } else {
      toast.error('Unexpected Error Occurred')
    }
  }
  return (
    <div className="my-20 container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <ToyTableHead />
          <tbody>
            {myToys &&
              myToys.map((toy, index) => (
                <ToyTableRow
                  key={toy._id}
                  toy={toy}
                  serial={index}
                  delToy={delToyFormList}
                  upToy={setUpdateAbleToy}
                />
              ))}
          </tbody>
        </table>
      </div>
      {/* Modal Code */}
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        ref={modalToggler}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={updateToyDetails}>
            <h3 className="mb-4 border-b-2 pb-2 text-lg">
              <strong>Update: </strong>
              {updateAbleToy?.title || ''}
            </h3>
            <div className="mb-2">
              <label>Update Toy Price</label>
              <input
                type="text"
                required
                className="input input-bordered w-full mt-2"
                name="price"
                defaultValue={updateAbleToy?.price}
              />
            </div>
            <div className="mb-2">
              <label>Update Toy Quantity</label>
              <input
                type="text"
                required
                className="input input-bordered w-full mt-2"
                name="quantity"
                defaultValue={updateAbleToy?.quantity}
              />
            </div>
            <div className="mb-2">
              <label>Update Toy Details</label>
              <textarea
                name="details"
                required
                className="textarea textarea-bordered w-full mt-2"
                rows="4"
                defaultValue={updateAbleToy?.details || ''}
              ></textarea>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="btn btn-warning font-semibold w-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyToys
