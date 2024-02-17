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
            <p className="mt-5 text-[25px]">Start up name</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="ROBUST UP"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
          </div>
          <div>
            <p className="mt-5 text-[25px]">Email</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="RobustUP@gmail.com"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
          </div>
          <div>
            <p className="mt-5 text-[25px]">Contact Number</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="Freelance"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
            <div>
              <p className="mt-5 text-[25px]">Biography</p>
              <div className="mt-3 w-[400px] h-[100px] rounded-xl">
                <textarea
                  type="text"
                  placeholder="EX : Our startup......"
                  className=" p-2 rounded-xl w-full h-full text-black"
                />
              </div>
            </div>
            <div>
              <p className="mt-5 text-[25px]">Industry</p>
              <div className="mt-3 w-[400px] rounded-xl">
                <input
                  type="text"
                  placeholder="Freelance"
                  className=" p-2 rounded-xl w-full h-full text-black"
                />
              </div>
            </div>
            <div>
              <p className="mt-5 text-[25px]">Status</p>
              <div className="mt-3 w-[400px] rounded-xl">
                <input
                  type="text"
                  placeholder=""
                  className=" p-2 rounded-xl w-full h-full text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SProfile
