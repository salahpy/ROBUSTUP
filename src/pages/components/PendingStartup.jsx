import React from "react"

const PendingStartup = ({ pic, title, status, by }) => {
  return (
    <div className="flex justify-between bg-slate-800 rounded-xl ">
      <div className="flex gap-10">
        <div>
          <img src={pic} className="w-[80px]" />
        </div>
        <div>
          <h1 className="text-white text-[15px] uppercase">{title}</h1>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div>
          <p
            className={`${
              status === "Approuved" ? " text-green-600" : "text-red-700"
            } text-[15px]`}
          >
            {status}
          </p>
        </div>
        <div>
          <p className="text-white text-[15px]">{by}</p>
        </div>
      </div>
    </div>
  )
}

export default PendingStartup
