import React, { useState } from "react"
import Sidebar from "./components/Sidebar"
import Nav2 from "./components/Nav2"
import Container1 from "./components/Container1"

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-primary">
      <Nav2 />
      <Container1 />
    </div>
  )
}

export default Dashboard
