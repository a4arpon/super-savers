import { Link } from 'react-router-dom'
import errorImg from '../../assets/bg/bg_error.svg'
import errorPng from '../../assets/bg/error.png'
const Error = () => {
  return (
    <div
      className="container mx-auto flex min-h-screen justify-center items-center bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${errorImg})` }}
    >
      <div className="w-full lg:w-3/5 bg-gray-200 p-10 rounded-lg bg-opacity-30 flex flex-col items-center shadow-lg">
        <img src={errorPng} alt="" className="w-auto h-96" />
        <div className="flex justify-center">
          <Link className="mt-10 btn btn-primary  font-semibold px-10" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
