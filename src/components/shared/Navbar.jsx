import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 font-bold"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active ' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? 'active ' : '')}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) => (isActive ? 'active ' : '')}
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                {' '}
                <li>
                  <NavLink
                    to="/myToys"
                    className={({ isActive }) => (isActive ? 'active ' : '')}
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addToys"
                    className={({ isActive }) => (isActive ? 'active ' : '')}
                  >
                    Add A Toy
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-3xl">SuperSavers</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li className="px-1">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active ' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="px-1">
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? 'active ' : '')}
            >
              Blogs
            </NavLink>
          </li>
          <li className="px-1">
            <NavLink
              to="/allToys"
              className={({ isActive }) => (isActive ? 'active ' : '')}
            >
              All Toys
            </NavLink>
          </li>
          {user && (
            <>
              <li className="px-1">
                <NavLink
                  to="/myToys"
                  className={({ isActive }) => (isActive ? 'active ' : '')}
                >
                  My Toys
                </NavLink>
              </li>
              <li className="px-1">
                <NavLink
                  to="/addToys"
                  className={({ isActive }) => (isActive ? 'active ' : '')}
                >
                  Add A Toy
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user
          ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full" title={user.displayName}>
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
            )
          : (
          <Link to="/login" className="btn btn-primary font-extrabold">
            Login
          </Link>
            )}
      </div>
    </div>
  )
}

export default Navbar
