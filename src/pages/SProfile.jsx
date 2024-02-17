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
            <p className="mt-5 text-[25px]">First Name</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="Salah"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
          </div>
          <div>
            <p className="mt-5 text-[25px]">Last Name</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="Nacef"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
          </div>
          <div>
            <p className="mt-5 text-[25px]">Phone Number</p>
            <div className="mt-3 w-[400px] rounded-xl">
              <input
                type="text"
                placeholder="phone number"
                className=" p-2 rounded-xl w-full h-full text-black"
              />
            </div>
            <div>
              <p className="mt-5 text-[25px]">email</p>
              <div className="mt-3 w-[400px]rounded-xl">
                <input
                  type="text"
                  placeholder="s.nacef@esi.dz"
                  className=" p-2 rounded-xl w-full h-full text-black"
                />
              </div>
            </div>
            <div>
              <p className="mt-5 text-[25px]">is a Mentor</p>
              <div className="mt-3 w-[400px] rounded-xl">
                <input
                  type="text"
                  placeholder="No"
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
