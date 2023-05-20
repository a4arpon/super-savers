import { useEffect, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import Toy from './Toy'

const AllToys = () => {
  useTitle('All Toys | SuperSaver')
  const [toys, setToys] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageItemLimit, setPageItemLimit] = useState(20)
  const totalPages = Math.ceil(toys.length / pageItemLimit)
  const pageNumber = [...Array(totalPages).keys()]
  useEffect(() => {
    const url = `https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/?page=${currentPage}&limit=${pageItemLimit}`
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
      <div className="form-control my-10">
        <div className="input-group w-full">
          <input type="text" placeholder="Search…" className="input border-1 input-bordered focus:outline-none w-full text-lg" />
          <button className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
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
            {toys &&
              toys.map((toy, index) => (
                <Toy key={toy._id} number={index + 1} toy={toy} />
              ))}
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
