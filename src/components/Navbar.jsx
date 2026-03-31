import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/clerk-react'
import { MdLocationPin, MdExpandMore } from 'react-icons/md'
// Removed FaCartDown import since not needed

const Navbar = () => {
  const Links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]
  
  return (
    <div className='bg-white/80 backdrop-blur-md rounded-full h-16 w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-3 flex items-center justify-between px-4 md:px-8 shadow-lg border border-gray-100'>

      {/* Logo Div */}
      <div className="flex items-center gap-1">
        <span className="text-xl md:text-2xl font-black bg-black text-white px-4 py-1 rounded-full shadow-lg">
          Cart
        </span>
        <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
          ify
        </span>
      </div>

      {/* Items */}
      <ul className="hidden md:flex items-center space-x-1 lg:space-x-6">
        {Links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Cart Div */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-black">
          <FiShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>

      {/* Address icon with dropdown */}
      <div className="hidden md:flex gap-1 cursor-pointer text-gray-700 items-center border-r border-gray-200 pr-3 hover:text-black transition-colors">
        <MdLocationPin className="text-black h-5 w-5" />
        <span className="text-sm font-medium">Add Address</span>
        <MdExpandMore className="text-gray-500 h-4 w-4" /> 
      </div>

      {/* Authentication */}
      <header className="flex items-center space-x-2">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>

    </div>
  )
}

export default Navbar
