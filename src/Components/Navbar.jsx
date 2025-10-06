import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { ShoppingCart } from "lucide-react";
import { use } from "react";
import { CartContext } from "../Providers/CartContext";

const Navbar = () => {
  const contextValue = use(CartContext);
  const { cart } = contextValue;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cart">Cart </Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Explore RectRouter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-6 font-normal menu-horizontal">
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/Contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/Blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-400 relative" : "relative"
            }
            to="/Cart"
          >
            <div>
              <ShoppingCart size={20} />
              <p className="font-medium text-sm absolute  -top-3 -right-2">
                {cart.length}
              </p>
            </div>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <ThemeToggle />
        <a className="btn">Login</a>
      </div>
    </div>
  );
};
export default Navbar;
