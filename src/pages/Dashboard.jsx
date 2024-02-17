import React from "react"
import Sidebar from "./components/Sidebar"
import Nav2 from "./components/Nav2"
import Container1 from "./components/Container1"
import C3 from "./components/C3"
import C2 from "./components/C2"
import PendingStartup from "./components/PendingStartup"
import StartupLayout from "./components/StartupLayout"

const Dashboard = () => {
  return (
    <div className="bg-primary flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="mt-8 sm:mt-10">
          <Nav2 />
        </div>
        <div className="flex flex-wrap">
          <div className="m-5">
            <Container1 />
          </div>
          <div className="m-5">
            <StartupLayout />
          </div>
          <div className="m-5">
            <C2 />
          </div>
          <div className="m-5">
            <C3 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
