import React from "react"
import ReactFacebook from "../../assets/facebook.svg?react"
import ReactInstagram from "../../assets/instagram.svg?react"
import ReactLinkedin from "../../assets/linkedin.svg?react"
import Divider from "../../assets/Divider.png?react"

const Footer = () => {
  return (
    <div className="bg-[#080C16] mt-32 w-full px-16 py-10 justify-center items-center text-center text-white">
      <p className="text-[25px] font-bold">RobustUP</p>
      <ul className="flex  justify-center items-center text-center text-white text-[15px] md:text-[18px] my-6">
        <li className="mx-6 md:mx-7 hover:text-dimWhite cursor-pointer">
          Home
        </li>
        <li className="mx-6 md:mx-7 hover:text-dimWhite cursor-pointer">
          About
        </li>
        <li className="mx-6 md:mx-7 hover:text-dimWhite cursor-pointer">
          Contact
        </li>
      </ul>
      <div className=" justify-center items-center text-center flex mt-2">
        <ReactFacebook className="mx-6 md:mx-7 mb-6" />
        <ReactInstagram className="mx-6 md:mx-7 mb-6" />
        <ReactLinkedin className="mx-6 md:mx-7 mb-6" />
      </div>
      <div className=" justify-center items-center text-center flex">
        <img src={Divider} />
      </div>
      <div className="mt-6">
        <p> Robust.up@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
