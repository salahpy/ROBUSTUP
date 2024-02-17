import React from "react"
import Inpu2 from "./Inpu2"
import plus from "../../assets/plus.png?react"

const Container1 = () => {
  return (
    <div className="flex flex-col justify-start p-5 bg-slate-800 rounded-xl ">
      <h1 className="text-white text-[20px] font-semibold px-5 pb-3">
        List for Consultation
      </h1>
      <div className="flex md:flex-row items-center flex-col">
        <div className="flex flex-col ">
          <Inpu2 placeholder="StartUp Name" />
          <Inpu2 placeholder="Marketing  Strategy" />
          <Inpu2 placeholder="Budget" />
        </div>
        <div className="flex flex-col ">
          <Inpu2 placeholder="Main Idea" />
          <Inpu2 placeholder="Target Audience" />
          <Inpu2 placeholder="Source code link" />
        </div>
        <div className="flex flex-col ml-5">
          <button className="bg-[#03DAC5] my-3 flex items-center py-3 px-5 rounded-3xl">
            <img src={plus} />
            <h1 className=" uppercase ml-3">by Ai</h1>
          </button>
          <button className="bg-[#BB86FC] my-3 flex items-center py-3 px-5 rounded-3xl">
            <img src={plus} />
            <h1 className=" uppercase ml-3">BY Investor</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Container1
