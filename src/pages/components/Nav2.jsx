import React from "react"
import Profile from "./Profile"
import Inpu from "./Inpu"


const Nav2 = () => {
  return (
    <div className="flex items-center justify-between">
      <Inpu placeholder="Search" />
      <Profile />
    </div>
  )
}

export default Nav2
