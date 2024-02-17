import React from "react"
import Profile from "./Profile"
import Inpu from "./Inpu"

const Nav2 = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Inpu placeholder="Search"  />
        <Profile />
      </div>
    </div>
  )
}

export default Nav2
