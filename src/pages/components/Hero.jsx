import React from "react"
import robot from "../../assets/robot.png?react"

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row items-start sm:items-center mt-20">
        <div className="ml-7 flex flex-col items-start sm:ml-10 md:ml-20 ">
          <div className="flex items-center box-shadow mb-3">
            <p className="text-gradient text-[18px] md:text-[20px] uppercase">
              We don't just help startups , we build legends
            </p>
          </div>
          <div className=" text-[50px] font-bold leading-[78px] sm:text-[70px] sm:leading-[92px] lg:text-[80px] lg:leading-[100px] md:mb-8">
            <p className="text-white">
              Unleash your startup with ROBUST UP Platform.
            </p>
          </div>
        </div>
        <div className=" flex md:my-0 my-20 relative ">
        <img src={robot} className="w-[100%] h-[100%] relative z-[5] " />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </section>
  )
}

export default Hero
