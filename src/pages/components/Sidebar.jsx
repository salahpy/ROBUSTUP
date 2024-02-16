import React from "react"
import Card from "./Card"
import elemen from "../../assets/elemen.png?react"
import PersonCircle from "../../assets/PersonCircle.png?react"
import messag from "../../assets/messag.png?react"
import sms from "../../assets/sms.png?react"
import settin from "../../assets/settin.png?react"
import logout from "../../assets/logout.png?react"

const Sidebar = () => {
  return (
    <div>
      <div className="h-full px-8 pt-8">
        <div>
          <div>
            <h1 className="text-[40px] text-white font-extrabold">ROBUSTUP</h1>
          </div>
          <div className="mt-32">
            <Card title="Overview" icon={elemen} />
            <Card title="Profile" icon={PersonCircle} />
            <Card title="Notifications" icon={messag} />
            <Card title="Your Startups" icon={sms} />
          </div>
          <div className="mt-36">
            <Card title="Settings" icon={settin} />
            <Card title="Logout" icon={logout} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
