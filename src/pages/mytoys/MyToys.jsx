import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const email = user?.email
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [email])

  return <div>MyToys</div>
}

export default MyToys
