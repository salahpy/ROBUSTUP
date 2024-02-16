import React from "react"
import Inpu from "./Inpu"

const Container1 = () => {
  return (
    <div className="flex flex-col justify-start px-3 bg-slate-800">
      <h1>list for Consultation</h1>
      <div className="flex flex-row ">
        <div className="flex flex-col ">
          <Inpu placeholder="StartUp Name" />
          <Inpu placeholder="Marketing  Strategy" />
          <Inpu placeholder="Budget" />
        </div>
        <div className="flex flex-col ">
          <Inpu placeholder="Main Idea" />
          <Inpu placeholder="Target Audience" />
          <Inpu placeholder="Source code link" />
        </div>
      </div>
    </div>
  )
}

export default Container1
