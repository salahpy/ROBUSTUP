import React from "react"
import Startup from "./components/Startup"
import Sidebar from "./components/Sidebar"
import plus from "../assets/plus.png?react"
import { useNavigate } from "react-router-dom"

const Startups = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/Submit")
    console.log("Button clicked!")
  }

  return (
    <div className="flex bg-primary text-white">
      <div>
        <Sidebar />
      </div>
      <div className="mt-10">
        <h1 className="text-white text-[30px] font-bold pb-5">Startups</h1>
        <div className="flex flex-wrap">
          <div className="bg-slate-800 max-w-[450px] m-8 rounded-3xl">
            <Startup
              email={"s.nacef@esi.dz"}
              description={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis qui illum officia provident quo porro accusamus veritatis tempore fugit, quia commodi illo consequatur reiciendis similique dignissimos a harum explicabo minima ex delectus nobis. Dolor, unde laboriosam sit qui natus maiores eum ut earum. Aliquam quisquam minus alias corrupti veritatis numquam deserunt vitae commodi ut debitis!"
              }
              name={"RobustUP"}
              industry={"Freelance"}
              status={"Status"}
            />
            <div className="flex flex-col mx-5">
              <button
                onClick={handleClick}
                className="bg-[#03DAC5] my-4 mb-6 flex items-center py-3 px-5 rounded-3xl"
              >
                <img src={plus} />
                <h1 className=" uppercase mx-3">Consulting by AI</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Startups
