import React from "react"
import Card from "./Card"
import elemen from "../../assets/elemen.png?react"
import PersonCircle from "../../assets/PersonCircle.png?react"
import messag from "../../assets/messag.png?react"
import sms from "../../assets/sms.png?react"
import settin from "../../assets/settin.png?react"
import logout from "../../assets/logout.png?react"
import { NavLink } from "react-router-dom"
import Enhace from "./Enhace"

const Sidebar = () => {
  return (
    <div className=" bg-slate-800 mr-8 ">
      <div className="h-full px-3 sm:px-8 pt-8 pb-10">
        <div>
          <div className="flex justify-center">
            <h1 className="sm:text-[40px] text-[30px] text-white font-extrabold ">
              ROBUSTUP
            </h1>
          </div>
          <div className="mt-32">
            <NavLink to={"/Dashboard"}>
              <Card title="Overview" icon={elemen} />
            </NavLink>
            <NavLink to={"/SProfile"}>
              <Card title="Profile" icon={PersonCircle} />
            </NavLink>
            <NavLink to={"/Notifications"}>
              <Card title="Notifications" icon={messag} />
            </NavLink>
            <NavLink to={"/Startups"}>
              {" "}
              <Card title="Your Startups" icon={sms} />
            </NavLink>
            <NavLink to={"/Enhace"}>
              {" "}
              <Card title="Audience" icon={sms} />
            </NavLink>
          </div>
          <div className="mt-36">
            <NavLink to={"/login"}>
              {" "}
              <Card title="Logout" icon={logout} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
