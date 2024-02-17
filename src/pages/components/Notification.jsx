import React from "react"

const Notification = () => {
  return (
    <div className="bg-slate-800 py-3 px-5 rounded-2xl flex justify-between items-center mt-4">
      <div className="">
        <div>
          <h1 className="font-bold text-[22px] ">New Resource Alert</h1>
        </div>
        <div>
          <p className="mt-3 text-[18px]">
            Discover the latest resource added to our library: '10 Tips for
            Effective Marketing Strategies.'Access it now to gain...{" "}
          </p>
        </div>
        <div>
          <p className="mt-3 text-dimWhite">March 1, 2023</p>
        </div>
      </div>
      <div>
        <p className="text-nowrap ml-6">0 min</p>
      </div>
    </div>
  )
}

export default Notification
