import { useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthProvider'
import useTitle from '../../hooks/useTitle'

const Register = () => {
  useTitle('Register | SuperSaver')
  const { user, signInWithGoogle, signUpWithEmail, updateUserName } =
    useContext(AuthContext)
  // For navigation form previous page and redirect to it while register is successful
  const location = useLocation()
  const from = location.state?.from || '/'
  if (user) {
    return <Navigate to={from} replace />
  }
  const handleEmailSignup = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    if (/^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(password)) {
      signUpWithEmail(email, password)
        .then((res) => {
          updateUserName(name)
          toast.success('Registration Successful')
        })
        .catch((err) => {
          toast.error(err.message)
        })
    } else {
      toast.warning(
        'Password must be more than 6 chars and contain alphabetic chars'
      )
    }
  }
  const handleAuthWithGoogle = () => {
    signInWithGoogle().catch((err) => {
      toast.error(err.message)
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 text-xl">
            To explore our super saver heros universe.
          </p>
        </div>
        <div className="lg:w-1/2 card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleEmailSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Here"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
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
                  <span className="label-text">Set Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Password Here"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Enter Your Email Here"
                  className="file-input file-input-bordered"
                />
              </div>
              <div className="mt-4">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="link link-primary font-semibold">
                    Login Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary font-bold" type="submit">
                  Register
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="mb-2">
              <button
                className="btn bg-blue-500 hover:bg-blue-600 border-none w-full text-white font-bold"
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

export default Register
