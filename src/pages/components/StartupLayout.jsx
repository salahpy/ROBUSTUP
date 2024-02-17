import React from "react"
import PendingStartup from "./PendingStartup"
import pic from "../../assets/pic.png?react"

const StartupLayout = () => {
  return (
    <div className="flex py-5 px-7 bg-slate-800 rounded-xl flex-col ">
      <h1 className="text-white text-[20px] font-semibold  mb-8">
        Pending Startups
      </h1>
      <div>
        <div className="mb-5">
          <PendingStartup
            pic={pic}
            title="salah"
            status="Approuved"
            by="by AI"
          />
        </div>
        <div className="mb-5">
          <PendingStartup
            pic={pic}
            title="salah"
            status="Approuved"
            by="by AI"
            className="mb-10"
          />
        </div>
      </div>
    </div>
  )
}

export default StartupLayout
