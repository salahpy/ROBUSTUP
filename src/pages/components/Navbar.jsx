import React from "react"
import ReactLogo from "../../assets/logo.svg?react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/signupStartup")
  }

  return (
    <div>
      <nav className="w-full items-center flex bg-[#080C16] justify-between px-4 py-8 sm:px-20  z-10">
        <div className="flex items-center text-center justify-center">
          <h1 className="font-montserrat  font-bold text-[20px]  text-white sm:font-extrabold sm:text-[30px]">
            ROBUSTUP
          </h1>
        </div>
        <ul className="flex text-white text-[15px] md:text-[18px]">
          <li className="mx-4 md:mx-7 hover:text-dimWhite cursor-pointer">
            Home
          </li>
          <li className="mx-4 md:mx-7 hover:text-dimWhite cursor-pointer">
            About
          </li>
          <li className="mx-4 md:mx-7 hover:text-dimWhite cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <button
            onClick={handleClick}
            className="bg-blue-gradient md:py-2 md:px-4 py-2 px-3 rounded-lg text-[15px] font-semibold md:text-[20px]"
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
