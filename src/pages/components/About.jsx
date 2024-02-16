import React from "react"
import pic from "../../assets/pic.png?react"

const Business = () => {
  return (
    <div className=" mt-20 mx-5 flex flex-col lg:flex-row items-center sm:mx-10 md:mx-20 ">
      <div className="md:max-w-[700px] mr-[70px]">
        <p className="text-white text-[60px] font-semibold leading-[85px]">
          About us
        </p>
        <p className="text-dimWhite text-[20px] leading-[30px] mt-10">
          ROBUST UP isn't just another platform. We're a passionate community
          dedicated to empowering Algerian startups and investors. From launch
          to growth, we provide the resources, connections, and support needed
          to thrive in our vibrant ecosystem
        </p>
      </div>
      <div>
        <div className="mt-12 flex flex-row justify-start items-center ">
          <img src={pic} />
        </div>
      </div>
    </div>
  )
}

export default Business
