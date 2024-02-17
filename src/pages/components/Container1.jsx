import React from "react"
import { useNavigate } from "react-router-dom"

const Container1 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/startups")
    console.log("Button clicked!")
  }
  return (
    <div className="flex flex-col justify-start p-5 bg-slate-800 rounded-xl ">
      <h1 className="text-white text-[20px] font-semibold px-5 pb-3">
        List for Consultation
      </h1>
      <div className="flex md:flex-row items-center flex-col">
        <div className="flex flex-col text-white px-5">
          If you're seeking consulting for your startup, our AI model is here to
          assist you
        </div>
        <div className="flex flex-col ml-5">
          <button
            onClick={handleClick}
            className="bg-[#03DAC5] my-3 flex items-center py-3 px-5 rounded-3xl"
          >
            <h1 className=" uppercase">click here</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Container1
