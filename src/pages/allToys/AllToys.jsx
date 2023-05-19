import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const AllToys = () => {
  useTitle('All Toys | SuperSaver')
  const [toys, setToys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageItemLimit, setPageItemLimit] = useState(20)
  const totalPages = Math.ceil(toys.length / pageItemLimit)
  const pageNumber = [...Array(totalPages).keys()]
  useEffect(() => {
    const url = `https://b7a11-toy-marketplace-server-side-a4arpon-a4arpon.vercel.app/?page=${currentPage}&limit=${pageItemLimit}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
      })
      .catch((err) => console.log(err))
  }, [currentPage, pageItemLimit])
  const handleLimitChange = (e) => {
    setPageItemLimit(parseInt(e.target.value))
    setCurrentPage(0)
  }
  return (
    <div className="container mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border-2">
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Group</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>
                <Link to="/toy/" className="btn btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-10 gap-3">
        <div className="btn-group border-2">
          {pageNumber.map((number) => (
            <button
              className={currentPage === number ? 'btn btn-active' : 'btn'}
              key={number}
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <select className="select select-bordered" onChange={handleLimitChange}>
          <option value="20">20 Result / Page</option>
          <option value="15">15 Result / Page</option>
          <option value="10">10 Result / Page</option>
        </select>
      </div>
    </div>
  )
}

export default AllToys
