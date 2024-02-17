import React from "react"
import Inpu2 from "./Inpu2"
import { useNavigate } from "react-router-dom"

const C3 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/enhace")
    console.log("Button clicked!")
  }
  return (
    <div className="flex flex-col justify-start p-5 bg-slate-800 rounded-xl">
      <h1 className="text-white text-[20px] font-semibold px-5">
        Know your Audience
      </h1>
      <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col text-white px-5">
          If you want to enhace your startup's target audience, our AI model is
          here to assist you
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleClick}
          className="bg-[#03DAC5] my-3 flex items-center py-3 px-5 rounded-3xl"
        >
          <h1 className=" uppercase">click here</h1>
        </button>
      </div>
    </div>
  )
}

export default C3
