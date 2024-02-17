import React from "react"

const Card = ({ icon, title }) => {
  return (
    <div className="mt-6 max-w-[230px] px-4 py-3 rounded-3xl hover:bg-primary ">
      <button className=" flex items-center ">
        <img src={icon} />
        <h1 className="text-white mx-4 sm:text-[20px] text-[18px]">{title}</h1>
      </button>
    </div>
  )
}

export default Card
