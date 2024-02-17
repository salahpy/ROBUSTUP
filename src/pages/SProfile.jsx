import React from "react"
import Sidebar from "./components/Sidebar"

const SProfile = () => {
  return (
    <div className="flex bg-primary text-white">
      <div>
        <Sidebar />
      </div>
      <div className="flex justify-center mt-10">
        <div>
          <p className="text-[30px] font-bold">Welcome to your profile</p>
          <div>
            <p className="mt-5 text-[25px]">Biography</p>
            <input type="text" placeholder="EX : Our startup......" className="mt-3 px-10"/>
          </div>
          <div>
            <p>Industry</p>
            <input type="text" placeholder="Ex: Freelance" />
          </div>
          <div>
            <p>Start up name</p>
            <input type="text" placeholder="EX : ROBUST UP" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SProfile
