import React from "react"
import Sidebar from "./components/Sidebar"
import Form from "./components/Form"
import { useNavigate } from "react-router-dom"

const Submit = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/dashboard")
    console.log("Button clicked!")
  }

  return (
    <div className="flex bg-primary text-white">
      <div>
        <Sidebar />
      </div>
      <div className="mt-10">
        <p className="text-[30px] font-bold mb-8">Submittion Form</p>
        <div className="flex flex-col sm:flex-row ">
          <div className="mr-0 sm:mr-10">
            <Form placeholder={"latitude"} />
            <Form placeholder={"longitude"} />
            <Form placeholder={"Labels"} />
            <Form placeholder={"age_first_funding_year"} />
            <Form placeholder={"age_last_funding_year"} />
            <Form placeholder={"age_first_milestone_year"} />
            <Form placeholder={"age_last_milestone_year"} />
          </div>
          <div>
            <Form placeholder={"relationships"} />
            <Form placeholder={"funding_rounds"} />
            <Form placeholder={"funding_total_usd"} />
            <Form placeholder={"milestones"} />
            <Form placeholder={"is_CA"} />
            <Form placeholder={"is_NY"} />
            <Form placeholder={"is_MA"} />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className=" md:py-2 md:px-4 py-2 px-3 rounded-lg text-[15px] font-semibold md:text-[20px] bg-dimWhite text-black mx-8"
          >
            Cancel
          </button>
          <button className="bg-blue-gradient md:py-2 md:px-4 py-2 px-3 rounded-lg text-[15px] font-semibold md:text-[20px] text-black">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Submit
