import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Login = () => {
  useTitle('Login | SuperSaver')
  const { signInWithGoogle, signInWithEmail } = useContext(AuthContext)
  const handleAuthWithGoogle = () => {
    signInWithGoogle().catch((err) => {
      toast.error(err.message)
    })
  }
  const handleEmailSignIn = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signInWithEmail(email, password).catch((err) => {
      toast.error(err.message)
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-xl">
            To explore our super saver heros universe.
          </p>
        </div>
        <div className="lg:w-1/2 card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleEmailSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Here"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Password Here"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="mt-4">
                <p>
                  Don&rsquo;t have any account?{' '}
                  <Link
                    to="/register"
                    className="link link-primary font-semibold"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary font-bold" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="mb-2">
              <button
                className="btn bg-blue-500 hover:bg-blue-600 border-none w-full text-white"
                onClick={handleAuthWithGoogle}
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
