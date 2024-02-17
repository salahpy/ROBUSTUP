import React from "react"
import Inpu2 from "./Inpu2"

const C3 = () => {
  return (
    <div className="flex flex-col justify-start p-5 bg-slate-800 rounded-xl">
      <h1 className="text-white text-[20px] font-semibold px-5">
        Know your Audience
      </h1>
      <div className="flex flex-row items-center mb-4">
        <div className="flex flex-col ">
          <Inpu2 placeholder="StartUp Name" />
          <textarea
            placeholder="Description"
            className="px-6 py-2 rounded-xl bg-slate-800 border-[#c0c0c0] border-[1px] mx-4 my-3"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-gradient py-2 px-2 rounded-lg">Check</button>
      </div>
    </div>
  )
}

export default C3
