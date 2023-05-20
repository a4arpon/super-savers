import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import ToyTableHead from './ToyTableHead'
import ToyTableRow from './ToyTableRow'

const MyToys = () => {
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
    fetch(
      `https://b7a11-toy-marketplace-server-side-a4arpon.vercel.app/toy/${id}`,
      {
        method: 'DELETE'
      }
    )
    const tempToyList = myToys.filter((toys) => toys._id !== id)
    setMyToys(tempToyList)
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
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToys
