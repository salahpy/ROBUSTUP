import React from "react"
import pp from "../../assets/pp.png?react"
import sahm from "../../assets/sahm.png?react"

const Profile = () => {
  return (
    <div className="flex items-center">
      <img src={pp} className=" px-3" />
      <h1 className="text-white">Nacef Salah</h1>
      <img src={sahm} className="px-3" />
    </div>
  )
}

export default Profile
