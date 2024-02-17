import React from "react"
import Sidebar from "./components/Sidebar"
import Notification from "./components/Notification"

const Notifications = () => {
  return (
    <div className="flex bg-primary text-white">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div>
            <p className="text-[30px] font-bold">Notifications</p>
            <div className="flex justify-end">
              <div className=" text-gradient font-bold text-[18px]">
                <button>Mark all as read</button>
              </div>
            </div>
            <div>
              <Notification />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
