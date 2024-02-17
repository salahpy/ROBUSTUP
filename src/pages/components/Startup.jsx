import React from "react"

const Startup = ({name, email, description, industry, status}) => {
  return (
    <div>
      <div className="p-4 ">
        <h1 className="text-[20px] font-bold mb-3">{name}</h1>
        <p className="text-[17px] font-semibold mb-3">{email}</p>
        <p className=" mb-3">
          {description}
        </p>
        <p className="text-[17px] font-semibold mb-3">{industry}</p>
        <p className="text-[17px] font-semibold mb-3">{status}</p>
      </div>
    </div>
  )
}

export default Startup
