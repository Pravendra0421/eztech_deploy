import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/ez logo.jpg';
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to='/'>
          <img src={logo} alt="logo" width="80" height="50" />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-7">
              <li>
                <Link
                  to="/home"
                  className="hover:text-blue-600  hover:underline transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-20 bg-gray-800 bg-opacity-75 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="bg-white w-64 h-full shadow-lg">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none p-4"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  to="/home"
                  onClick={toggleSidebar}
                  className="text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  <div className='flex text-center items-center space-x-2'>
                    <div><FaHome /></div>
                    <div>Home</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={toggleSidebar}
                  className="text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  <div className='flex text-center items-center space-x-2'>
                    <div><MdMiscellaneousServices /></div>
                    <div>Service</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={toggleSidebar}
                  className="text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  <div className='flex text-center items-center space-x-2'>
                    <div><AiFillProduct /></div>
                    <div>Our Products</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleSidebar}
                  className="text-gray-800 hover:text-blue-600 hover:underline transition-colors duration-300"
                >
                  <div className='flex text-center items-center space-x-2'>
                    <div><MdContactMail /></div>
                    <div>Contact</div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
