import React from "react"
import ReactSend from "../../assets/Send.svg?react"
import ReactStar from "../../assets/Star.svg?react"
import ReactShield from "../../assets/Shield.svg?react"

const Business = () => {
  return (
    <div className=" mt-20 mx-5 flex flex-col lg:flex-row items-center sm:mx-10 md:mx-20 ">
      <div className="md:max-w-[700px] mr-[70px]">
        <p className="text-white text-[60px] font-semibold leading-[85px]">
          Explore our services
        </p>
        <p className="text-dimWhite text-[20px] leading-[30px] mt-10">
          If you have a startup and are currently seeking sponsorship, you can
          list your startup idea on our platform. Through our analysis, you will
          receive notifications regarding your startup's eligibility for
          sponsorship. Additionally, you can consult with one of our experts to
          determine if your idea is viable for sponsorship. List it now and take
          the first step towards securing support for your startup!
        </p>
        <button className="bg-blue-gradient mt-10 py-3 px-6 rounded-lg text-[20px] font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <div className="mt-12 flex flex-row justify-start items-center feature-card px-4 py-2 rounded-[15px]">
          <div className="mr-5 p-3 rounded-[100px] bg-[#09977C1A] ">
            <ReactStar />
          </div>
          <div>
            <p className="text-white ">Unique platform</p>
            <p className="text-dimWhite">
              Gain access to valuable content where we evaluate your startup and
              provide guidance towards success.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-row justify-start items-center feature-card px-4 py-2 rounded-[15px]">
          <div className="mr-5 p-3 rounded-[100px] bg-[#09977C1A] ">
            <ReactShield />
          </div>
          <div>
            <p className="text-white ">100% Secured and safe</p>
            <p className="text-dimWhite">
              We take proactive steps make sure your information are secure.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-row justify-start items-center feature-card px-4 py-2 rounded-[15px]">
          <div className="mr-5 p-3 rounded-[100px] bg-[#09977C1A] ">
            <ReactSend />
          </div>
          <div>
            <p className="text-white ">Idea Validation & Sponsoring</p>
            <p className="text-dimWhite">
              On our site, you can receive feedback on your startup and even
              find sponsors for your innovative ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business
