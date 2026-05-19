import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12">
            <img src={logo} alt="Kanwariya Sewa Logo" className="h-full w-full object-contain" />
          </div>
          <h1 className="text-xl font-bold text-orange-600">
            Kanwariya Sewa
            
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/register" className="hover:text-orange-600">Register</Link>
          <Link to="/login" className="hover:text-orange-600">Login</Link>
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-600"
          >
            Home
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-600"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-600"
          >
            Login
          </Link>
          
        </div>
      )}
    </nav>
  );
}
