import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX, FiSearch } from 'react-icons/fi'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/clerk-react'
import { MdLocationPin, MdExpandMore } from 'react-icons/md'
import { useCart } from '../context/CartContext'
// import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const { cartItem } = useCart()

  const Links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]



  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo Div */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>

          <NavLink to="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Cartify
            </span>
            <span className="h-2 w-2 rounded-full bg-gray-900" />
          </NavLink>
        </div>

        {/* Items */}
        <nav className="hidden md:flex items-center gap-1">
          {Links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search (desktop) */}
          {/* <button
            aria-label="Search"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
          >
            <FiSearch className="h-5 w-5" />
          </button> */}



          {/* Cart Div */}
          <NavLink
            to="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
            aria-label="Cart"
          >
            <FiShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">
              {cartItem.length}
            </span>
          </NavLink>

          {/* Authentication */}
          <div className="flex items-center gap-2 pl-1 sm:pl-2 sm:border-l sm:border-gray-200 sm:ml-1">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-gray-700 rounded-full hover:text-gray-900 hover:bg-gray-100 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition shadow-sm">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8 ring-2 ring-gray-200 hover:ring-gray-300 transition"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-4 py-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
          {Links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 text-sm font-medium rounded-lg transition ${isActive
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition">
            <MdLocationPin className="h-5 w-5" />
            Add Address
          </button>
        </nav>
      )}
    </header>
  )
}

export default Navbar