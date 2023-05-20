import { useContext, useEffect, useState } from 'react'
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
  const updateToyDetails = (id) => {
    console.log(id)
    Swal.fire('Any fool can use a computer')
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
                  upToy={updateToyDetails}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToys
