import React from "react"
import Inpu2 from "./Inpu2"

const C3 = () => {
  return (
    <div className="flex flex-col justify-start p-5 bg-slate-800 rounded-xl">
      <h1 className="text-white text-[20px] font-semibold px-5">
        Know your Audience
      </h1>
      <div className="flex flex-row items-center">
        <div className="flex flex-col ">
          <Inpu2 placeholder="StartUp Name" />
          <Inpu2 placeholder="Marketing  Strategy" />
          <Inpu2 placeholder="Budget" />
        </div>
      </div>
    </div>
  )
}

export default C3
